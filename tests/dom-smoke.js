const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { JSDOM } = require('jsdom');
const assert = require('node:assert/strict');

const html = readFileSync(resolve(__dirname, '../index.html'), 'utf8');
const script = readFileSync(resolve(__dirname, '../app.js'), 'utf8');
const contactHtml = readFileSync(resolve(__dirname, '../contact.html'), 'utf8');
const contactScript = readFileSync(resolve(__dirname, '../contact.js'), 'utf8');
const goldenBuzzVenues = JSON.parse(readFileSync(resolve(__dirname, '../data/goldenbuzz-areas-2026-09-19.json'), 'utf8'));
const vesperImportSql = readFileSync(resolve(__dirname, '../supabase/import-vesper-daily-specials.sql'), 'utf8');

const dom = new JSDOM(html, {
  url: 'https://sip-city.test/',
  runScripts: 'outside-only',
  pretendToBeVisual: true
});

const { window } = dom;
window.HTMLElement.prototype.scrollIntoView = () => {};
window.HTMLDialogElement.prototype.showModal = function () { this.open = true; this.setAttribute('open', ''); };
window.HTMLDialogElement.prototype.close = function () { this.open = false; this.removeAttribute('open'); };
window.open = url => { database.openedUrls.push(url); return null; };
window.fetch = async (url, options) => {
  database.emailNotifications.push({ url, options });
  return { ok: true, json: async () => ({ success: true }) };
};
const NativeDate = window.Date;
let fixedNow = new NativeDate('2026-09-22T21:30:00Z').getTime();
window.Date = class FixedDate extends NativeDate {
  constructor(...args) { super(...(args.length ? args : [fixedNow])); }
  static now() { return fixedNow; }
};

let authCallback = async () => {};
let activeSession = null;
let profile = { id: 'member-id', username: 'orlando_local', role: 'member' };
const database = {
  votes: {}, favorites: [], submissions: [], uploads: [], signedUrls: [], openedUrls: [],
  venueSaves: [], venueDeletes: [], homepageSaves: [], magicLinks: [], emailNotifications: []
};

async function testContactPage() {
  const contactDom = new JSDOM(contactHtml, {
    url: 'https://www.pourh.com/contact.html',
    runScripts: 'outside-only',
    pretendToBeVisual: true
  });
  const contactWindow = contactDom.window;
  contactWindow.matchMedia = () => ({ matches: false });
  let sentRequest = null;
  contactWindow.fetch = async (url, options) => {
    sentRequest = { url, options };
    return { ok: true, json: async () => ({ success: true }) };
  };
  contactWindow.eval(contactScript);
  const form = contactWindow.document.querySelector('#contact-form');
  assert.match(contactWindow.document.title, /Pour Happy/, 'contact page browser title uses the Pour Happy brand');
  assert.equal(contactWindow.document.querySelector('.site-header .brand strong').textContent, 'Pour Happy', 'contact page header uses the Pour Happy brand');
  const visibleFields = [...form.querySelectorAll('input:not([type="hidden"]):not(.contact-honey), textarea')];
  assert.deepEqual(visibleFields.map(field => field.name), ['Name', 'Phone', 'email', 'Details'], 'contact form has only the four requested visible fields');
  visibleFields[0].value = 'Orlando Restaurant';
  visibleFields[1].value = '407-555-0100';
  visibleFields[2].value = 'hello@example.com';
  visibleFields[3].value = 'We would like to update our happy-hour listing.';
  form.dispatchEvent(new contactWindow.Event('submit', { bubbles: true, cancelable: true }));
  await new Promise(resolve => contactWindow.setTimeout(resolve, 0));
  assert.equal(sentRequest.url, 'https://formsubmit.co/ajax/huntsvilledesigns@gmail.com', 'contact messages route to the owner email');
  assert.equal(sentRequest.options.body.get('Phone'), '407-555-0100', 'contact submission includes the phone number');
  assert.equal(form.hidden, true, 'contact form hides after a successful send');
  assert.equal(contactWindow.document.querySelector('#contact-success').hidden, false, 'contact page confirms a successful send');
  contactWindow.document.querySelector('[data-theme-toggle]').click();
  assert.equal(contactWindow.document.documentElement.dataset.theme, 'dark', 'contact page supports dark mode');
}

function venueToRow(venue) {
  return {
    id: venue.id, name: venue.name, neighborhood: venue.neighborhood, address: venue.address,
    website: venue.website || null, image_url: venue.image, days: venue.days, start_hour: venue.start,
    time_label: venue.time, price_level: venue.price, base_score: venue.baseScore ?? venue.score ?? 0,
    deals: venue.deals.map((text, index) => JSON.stringify({ text, category: venue.dealCategories?.[index] || 'info' })),
    tags: venue.tags, vibe: venue.vibe, parking: venue.parking,
    schedule: venue.schedule || [],
    published: venue.published !== false
  };
}

window.SipCityDb = {
  getVenues: async () => [],
  getSiteContent: async () => null,
  getVenueScores: async () => [],
  getSession: async () => activeSession,
  onAuthStateChange(callback) { authCallback = callback; return { data: { subscription: { unsubscribe() {} } } }; },
  async sendMagicLink(email, username) { database.magicLinks.push({ email, username }); },
  async getProfile() { return profile; },
  async getVotes() { return Object.entries(database.votes).map(([venue_id, value]) => ({ venue_id, value })); },
  async setVote(_userId, venueId, value) {
    if (value) database.votes[venueId] = value;
    else delete database.votes[venueId];
  },
  async getFavorites() { return database.favorites.map(venue_id => ({ venue_id })); },
  async setFavorite(_userId, venueId, saved) {
    if (saved && !database.favorites.includes(venueId)) database.favorites.unshift(venueId);
    if (!saved) database.favorites = database.favorites.filter(id => id !== venueId);
  },
  async signOut() { activeSession = null; },
  async updateSiteContent(content) { database.homepageSaves.push(structuredClone(content)); return content; },
  async saveVenue(venue, isNew) { database.venueSaves.push({ venue: structuredClone(venue), isNew }); return venueToRow(venue); },
  async deleteVenue(venueId) { database.venueDeletes.push(venueId); return { id: venueId }; },
  async uploadSubmissionFile(_userId, file) { const path = `member-id/test/${file.name}`; database.uploads.push({ path, file }); return path; },
  async deleteSubmissionFile(path) { database.uploads = database.uploads.filter(item => item.path !== path); },
  async createSubmission(submission) {
    const row = {
      ...structuredClone(submission),
      id: `submission-${database.submissions.length + 1}`,
      created_at: '2026-09-22T20:00:00Z',
      review_notes: null,
      reviewed_by: null,
      reviewed_at: null
    };
    database.submissions.push(row);
    return structuredClone(row);
  },
  async getSubmissions() { return structuredClone(database.submissions); },
  async updateSubmissionStatus(id, status, reviewNotes, reviewerId) {
    const row = database.submissions.find(item => item.id === id);
    Object.assign(row, status === 'pending'
      ? { status, review_notes: null, reviewed_by: null, reviewed_at: null }
      : {
          status,
          review_notes: reviewNotes || null,
          reviewed_by: reviewerId,
          reviewed_at: '2026-09-22T21:45:00Z'
        });
    return structuredClone(row);
  },
  async getSubmissionFileUrl(path) {
    database.signedUrls.push(path);
    return `https://signed.test/${encodeURIComponent(path)}`;
  }
};

window.eval(script);

const document = window.document;
const click = selector => document.querySelector(selector).dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
const input = (selector, value) => {
  const element = document.querySelector(selector);
  element.value = value;
  element.dispatchEvent(new window.Event('input', { bubbles: true }));
};
const submit = selector => document.querySelector(selector).dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
const settle = async () => {
  await new Promise(resolve => setTimeout(resolve, 0));
  await new Promise(resolve => setTimeout(resolve, 0));
};
const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const signInAs = async (username, role = 'member', email = 'member@example.com') => {
  profile = { id: `${role}-id`, username, role };
  activeSession = { user: { id: profile.id, email } };
  await authCallback(activeSession);
  await settle();
};

(async () => {
  await settle();
  assert.equal(goldenBuzzVenues.length, 43, 'reviewed GoldenBuzz snapshot contains 43 merged venues');
  assert.deepEqual(
    Object.fromEntries(['Altamonte', 'Baldwin Park', 'Maitland', 'Winter Park'].map(area => [area, goldenBuzzVenues.filter(venue => venue.neighborhood === area).length])),
    { Altamonte: 8, 'Baldwin Park': 5, Maitland: 9, 'Winter Park': 21 },
    'GoldenBuzz snapshot is limited to the four requested areas'
  );
  assert(goldenBuzzVenues.every(venue => venue.image_url === ''), 'third-party source images are intentionally excluded');
  assert.equal(goldenBuzzVenues.find(venue => venue.id === 'the-osprey').schedule.length, 3, 'merged venues keep each schedule window');
  const vesperImportIds = [...vesperImportSql.matchAll(/^    '([a-z0-9-]+)', '[^']+'/gm)].map(match => match[1]);
  assert.equal(vesperImportIds.length, 19, 'Vesper import contains the 19 new venues');
  assert.equal(new Set(vesperImportIds).size, 19, 'Vesper import does not repeat a venue ID');
  assert.match(vesperImportSql, /'Mon - Fri 3PM - 7PM'/, 'Vesper schedules use the standard day and time format');
  assert.match(vesperImportSql, /'Mon 11:30AM - 9:30PM; Tue - Fri 4:30PM - 6PM'/, 'half-hour schedules stay readable');
  const vesperImageUrls = [...vesperImportSql.matchAll(/^    (?:'https:[^']+'|null), '(https:[^']+)',$/gm)].map(match => match[1]);
  assert.equal(vesperImageUrls.length, 14, 'reviewed Vesper import uses 14 direct image URLs');
  assert.equal(vesperImportSql.includes('assets/venue-images/'), false, 'Vesper import does not require local venue image files');
  const importedOsprey = goldenBuzzVenues.find(venue => venue.id === 'the-osprey');
  const mappedOsprey = window.mapDatabaseVenue({
    ...importedOsprey,
    deals: importedOsprey.deals.map(deal => JSON.stringify(deal)),
    tags: importedOsprey.tags
  });
  assert.equal(mappedOsprey.schedule.length, 3, 'database schedule windows are mapped into the app');
  const placeholderImage = window.venueImage(mappedOsprey);
  assert.match(placeholderImage, /^data:image\/svg\+xml;charset=UTF-8,/, 'missing listing photos use an embedded Pour Happy placeholder');
  assert.match(decodeURIComponent(placeholderImage), /PHOTO COMING SOON/, 'embedded placeholder keeps the photo-coming-soon message');
  const initialCards = document.querySelectorAll('.venue-card').length;
  assert(initialCards >= 4, `expected at least 4 listings today, got ${initialCards}`);
  assert.equal(document.querySelector('#listing-stat').textContent, '17', 'directory total includes Lamp & Shade');
  assert.equal(document.querySelector('#neighborhood-stat').textContent, '9', 'homepage counts unique listing neighborhoods');
  assert.match(document.title, /Pour Happy/, 'browser title uses the Pour Happy brand');
  assert.equal(document.querySelector('.site-header .brand strong').textContent, 'Pour Happy', 'header uses the Pour Happy brand');
  assert.equal(document.querySelector('.site-header .brand-mark').textContent, 'P', 'brand mark uses the new initial');
  assert.equal(document.querySelector('#last-updated time').textContent, 'Sept. 21, 2026', 'homepage shows the current content update date');
  assert.equal(document.querySelector('#last-updated time').dateTime, '2026-09-21', 'last-updated date is machine readable');
  assert.equal(document.querySelectorAll('.sample-pill').length, 0, 'preview listing badges are removed');
  assert.match(document.querySelector('.hero-stats').textContent, /Happy Hour Spots/);
  assert.equal(document.querySelector('nav a[href="contact.html"]').textContent, 'Contact', 'Contact appears beside the main navigation links');
  assert.equal(document.querySelectorAll('.hero-slide').length, 3, 'hero rotates through three existing venue photos');
  assert.match(document.querySelector('.mini-card-one').textContent, /\$8 craft cocktails/);
  assert.match(document.querySelector('.mini-card-two').textContent, /Half-price flatbreads/);
  window.refreshHeroCarousel([
    { name: 'Aroma Gastro Bar', image: 'https://images.test/aroma-1600.jpg?w=1600&q=90' },
    { name: 'Bulla', image: 'https://images.test/bulla-1600.jpg?w=1600&q=90' },
    { name: 'AVA MediterrAegean', image: 'https://images.test/ava-1600.jpg?w=1600&q=90' },
    { name: 'The Osprey', image: 'https://images.test/osprey-1200.jpg?w=1200&q=85' },
    { name: 'Prato', image: 'https://images.test/prato-1200.jpg?w=1200&q=85' },
    { name: 'No Photo', image: '' }
  ]);
  assert.equal(document.querySelectorAll('.hero-slide').length, 8, 'hero keeps three current photos and adds five quality spot photos');
  assert.deepEqual(
    [...document.querySelectorAll('.hero-slide[data-hero-venue]')].slice(0, 3).map(image => image.dataset.heroVenue),
    ['Aroma Gastro Bar', 'Bulla', 'AVA MediterrAegean'],
    'named high-quality spots are prioritized in the rotation'
  );
  assert.equal(document.querySelector('#hero-slides').dataset.count, '8', 'hero timing adjusts to the expanded rotation');
  assert.match(document.querySelector('.mini-card-one').textContent, /\$8 craft cocktails/, 'Top Pick blurb remains over the expanded carousel');
  assert.match(document.querySelector('.mini-card-two').textContent, /Half-price flatbreads/, 'Best Bite blurb remains over the expanded carousel');
  window.refreshHeroCarousel([]);
  assert.equal(document.querySelectorAll('.hero-slide').length, 3, 'hero falls back to the original photos when listings have no usable images');
  click('[data-hero-carousel-toggle]');
  assert(document.querySelector('.hero-art').classList.contains('is-paused'), 'hero photo rotation can be paused');
  assert.equal(document.querySelector('[data-hero-carousel-toggle]').getAttribute('aria-label'), 'Play featured photos');
  click('[data-hero-carousel-toggle]');
  assert(!document.querySelector('.hero-art').classList.contains('is-paused'), 'hero photo rotation can resume');

  click('.header-submit');
  assert(document.querySelector('#submit-modal').hasAttribute('open'), 'top Submit a deal button opens the form while logged out');
  assert(!document.querySelector('#account-modal').hasAttribute('open'), 'top submit button does not force sign-in before showing the form');
  click('#submit-modal [data-close-modal]');
  click('.community [data-open-submit]');
  assert(document.querySelector('#submit-modal').hasAttribute('open'), 'bottom Submit a happy hour button opens the form while logged out');
  assert(!document.querySelector('#account-modal').hasAttribute('open'), 'bottom submit button does not force sign-in before showing the form');
  click('#submit-modal [data-close-modal]');

  const startingTheme = document.documentElement.dataset.theme;
  click('[data-theme-toggle]');
  const toggledTheme = startingTheme === 'dark' ? 'light' : 'dark';
  assert.equal(document.documentElement.dataset.theme, toggledTheme, 'theme toggle changes the color mode');
  assert.equal(window.localStorage.getItem('sip-city-theme'), toggledTheme, 'theme choice persists in local storage');

  document.querySelector('#day-filter').value = 'all';
  document.querySelector('#day-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  input('#directory-search', 'rooftop');
  assert.equal(document.querySelectorAll('.venue-card').length, 1, 'search narrows to one listing');
  assert.match(document.querySelector('.venue-card h3').textContent, /Eola Rooftop/);
  click('[data-view="eola-rooftop"]');
  assert.equal(document.querySelectorAll('#detail-content [data-deal-tab]').length, 2, 'venue with food and drink specials shows both tabs');
  assert.equal(document.querySelector('[data-deal-tab="drinks"]').getAttribute('aria-selected'), 'true', 'Drinks opens by default');
  assert.match(document.querySelector('[data-deal-panel="drinks"]').textContent, /rooftop cocktails/);
  assert.equal(document.querySelector('[data-deal-panel="food"]').hidden, true, 'Food specials start hidden');
  click('[data-deal-tab="food"]');
  assert.equal(document.querySelector('[data-deal-tab="food"]').getAttribute('aria-selected'), 'true', 'Food tab becomes active');
  assert.equal(document.querySelector('[data-deal-panel="drinks"]').hidden, true, 'Drinks hide after switching tabs');
  assert.match(document.querySelector('[data-deal-panel="food"]').textContent, /snack boards/);
  click('#detail-modal [data-close-modal]');

  click('#clear-filters');
  document.querySelector('#day-filter').value = 'all';
  document.querySelector('#day-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  click('[data-neighborhood="Mills 50"]');
  assert.equal(document.querySelectorAll('.venue-card').length, 4, 'Mills 50 filter includes Hawkers and Lamp & Shade');

  click('#clear-filters');
  document.querySelector('#day-filter').value = 'tuesday';
  document.querySelector('#day-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  input('#directory-search', "Johnny's Other Side");
  assert.equal(document.querySelectorAll('.venue-card').length, 1, 'Johnny’s appears in the Tuesday filter');
  assert.match(document.querySelector('.venue-card').textContent, /Limited half-price menu/);
  click('[data-view="johnnys-other-side"]');
  assert.equal(document.querySelector('#detail-content .venue-links a').href, 'https://johnnysotherside.com/');
  assert(document.querySelector('[data-deal-tab="food"]'), 'food-only happy hour shows a Food tab');
  assert.equal(document.querySelector('[data-deal-tab="drinks"]'), null, 'food-only happy hour does not show a Drinks tab');
  click('#detail-modal [data-close-modal]');

  click('#clear-filters');
  input('#directory-search', 'Firebirds');
  for (const day of ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']) {
    document.querySelector('#day-filter').value = day;
    document.querySelector('#day-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
    assert.equal(document.querySelectorAll('.venue-card').length, 1, `Firebirds appears on ${day}`);
  }
  assert.match(document.querySelector('.venue-card').textContent, /11 AM–6 PM/);

  click('#clear-filters');
  document.querySelector('#day-filter').value = 'all';
  document.querySelector('#day-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  input('#directory-search', 'Lamp & Shade');
  assert.equal(document.querySelectorAll('.venue-card').length, 1, 'Lamp & Shade appears in search');
  assert.match(document.querySelector('.venue-card').textContent, /Monday Industry Night/);
  click('[data-view="lamp-and-shade"]');
  assert.match(document.querySelector('#detail-content').textContent, /Shuck It \+ Tomahawk Tuesday/);
  assert.match(document.querySelector('#detail-content').textContent, /Shady Nights/);
  assert.equal(document.querySelector('#detail-content .venue-links a').href, 'https://throwsomeshadeorl.com/menus/');
  click('#detail-modal [data-close-modal]');

  click('#clear-filters');
  document.querySelector('#sort-filter').value = 'now';
  document.querySelector('#sort-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  assert.equal(document.querySelectorAll('.venue-card').length, 14, 'Happening Now uses Orlando local time');
  assert.equal(document.querySelector('#day-filter').value, 'today', 'Happening Now resets the day to today');
  assert.match(document.querySelector('#result-context').textContent, /happening right now/);
  assert.equal(document.querySelectorAll('.venue-card .now-badge').length, 14, 'active listings show a Happening now badge');
  assert(document.querySelector('[data-id="lamp-and-shade"]'), 'Lamp & Shade is active Tuesday evening');

  fixedNow = new NativeDate('2026-09-25T22:30:00Z').getTime();
  document.querySelector('#sort-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  assert.equal(document.querySelector('[data-id="lamp-and-shade"]'), null, 'Lamp & Shade is not active after Friday happy hour');
  fixedNow = new NativeDate('2026-09-28T01:30:00Z').getTime();
  document.querySelector('#sort-filter').dispatchEvent(new window.Event('change', { bubbles: true }));
  assert(document.querySelector('[data-id="lamp-and-shade"]'), 'Lamp & Shade Shady Nights is active Sunday late night');
  fixedNow = new NativeDate('2026-09-22T21:30:00Z').getTime();

  click('#clear-filters');
  const firstId = document.querySelector('.venue-card').dataset.id;
  const scoreBefore = Number(document.querySelector(`[data-score="${firstId}"]`).textContent);
  click(`[data-id="${firstId}"] [data-vote="up"]`);
  assert(document.querySelector('#account-modal').hasAttribute('open'), 'voting requires an account');
  input('#username-input', 'orlando_local');
  input('#account-email-input', 'member@example.com');
  submit('#account-form');
  await settle();
  assert.equal(database.magicLinks.length, 1, 'passwordless sign-in link is requested');
  assert.equal(document.querySelector('#account-email-sent').hidden, false, 'email confirmation state is shown');
  await signInAs('orlando_local');
  assert.equal(database.votes[firstId], 1, 'pending upvote is stored in the database');
  assert.equal(Number(document.querySelector(`[data-score="${firstId}"]`).textContent), scoreBefore + 1, 'upvote increments score');
  assert.match(document.querySelector('#account-label').textContent, /@orlando_local/);
  click('#account-modal [data-close-modal]');

  click(`[data-id="${firstId}"] [data-favorite]`);
  await settle();
  assert(database.favorites.includes(firstId), 'favorite is stored in the database');
  click('#account-button');
  assert(document.querySelector('#dashboard-modal').hasAttribute('open'), 'signed-in member opens the dashboard');
  assert.equal(document.querySelector('#owner-workspace').hidden, true, 'member does not receive owner controls');
  assert.equal(document.querySelector('#favorite-count').textContent, '1');
  click('#dashboard-modal [data-close-modal]');

  click('[data-open-submit]');
  input('[name="venue"]', 'Test Venue');
  document.querySelector('[name="neighborhood"]').value = 'Downtown';
  input('[name="details"]', 'Weekdays, 4–6 PM, sample drinks and bites.');
  const menuFile = new window.File(['sample menu'], 'happy-hour-menu.pdf', { type: 'application/pdf' });
  Object.defineProperty(document.querySelector('#menu-upload'), 'files', { value: [menuFile], configurable: true });
  document.querySelector('#menu-upload').dispatchEvent(new window.Event('change', { bubbles: true }));
  submit('#submit-form');
  await settle();
  assert.equal(document.querySelector('#submit-success').hidden, false, 'submission confirmation displays');
  assert.equal(database.submissions.at(-1).status, 'pending', 'new submissions remain pending');
  assert.equal(database.submissions.at(-1).attachment_name, 'happy-hour-menu.pdf', 'file metadata is stored');
  assert.equal(database.uploads.length, 1, 'menu file uploads to private storage');
  assert.equal(database.emailNotifications.at(-1).url, 'https://formsubmit.co/ajax/huntsvilledesigns@gmail.com', 'happy-hour submission emails the owner');
  assert.equal(database.emailNotifications.at(-1).options.body.get('Venue'), 'Test Venue', 'submission email includes the venue name');
  assert.equal(database.emailNotifications.at(-1).options.body.get('Attachment'), 'happy-hour-menu.pdf', 'submission email includes the attachment name');
  click('#submit-success [data-close-modal]');

  click('#account-button');
  click('#sign-out');
  await settle();
  assert.equal(document.querySelector('#account-label').textContent, 'Sign in', 'sign out clears the session');
  await signInAs('camron', 'owner', 'huntsvilledesigns@gmail.com');
  click('#account-button');
  await settle();
  assert.equal(document.querySelector('#account-role').textContent, 'Owner', 'verified owner role is displayed');
  assert.equal(document.querySelector('#owner-workspace').hidden, false, 'owner controls are visible');
  assert.equal(document.querySelector('#submission-count').textContent, '1', 'pending submission count loads for the owner');

  click('[data-owner-tab="submissions"]');
  await settle();
  assert.match(document.querySelector('#submission-queue').textContent, /Test Venue/, 'owner sees the submitted venue');
  click('[data-submission-action="attachment"]');
  await settle();
  assert.equal(database.signedUrls.length, 1, 'private attachment receives a temporary signed URL');
  assert.match(database.openedUrls.at(-1), /^https:\/\/signed\.test\//, 'private attachment opens for review');

  input('[data-submission-notes]', 'Needs a clearer official source.');
  click('[data-submission-action="reject"]');
  await settle();
  assert.equal(database.submissions[0].status, 'rejected', 'owner can reject a submission');
  assert.equal(database.submissions[0].review_notes, 'Needs a clearer official source.', 'review note is saved');
  click('[data-submission-action="reopen"]');
  await settle();
  assert.equal(database.submissions[0].status, 'pending', 'rejected submission can return to pending');

  click('[data-submission-action="build"]');
  assert.equal(document.querySelector('[data-owner-panel="listings"]').hidden, false, 'Build listing opens the listing editor');
  assert.equal(document.querySelector('#listing-editor [name="name"]').value, 'Test Venue', 'submission details prefill the listing');
  input('#listing-editor [name="address"]', '1 Review Queue Ave, Orlando');
  input('#listing-editor [name="neighborhood"]', 'Maitland');
  submit('#listing-editor');
  await settle();
  assert.equal(database.venueSaves.at(-1).isNew, true, 'approved submission creates a new listing');
  assert.equal(database.submissions[0].status, 'approved', 'publishing marks the submission approved');
  assert.equal(document.querySelector('#submission-count').textContent, '0', 'pending count updates after approval');
  assert.equal(document.querySelector('#listing-stat').textContent, '18', 'approved listing is added to the directory');
  assert.equal(document.querySelector('#neighborhood-stat').textContent, '10', 'neighborhood total updates when a new area is added');
  assert.match(document.querySelector('#listing-save-state').textContent, /Changes saved successfully/, 'listing save confirms success');
  assert.equal(document.querySelector('#save-listing').textContent, 'Saved ✓', 'save button confirms success');
  await pause(750);
  assert.equal(document.querySelector('#dashboard-modal').hasAttribute('open'), false, 'dashboard closes after a successful listing save');
  click('#account-button');

  click('[data-owner-tab="homepage"]');
  input('[name="heroTitleMain"]', 'Orlando starts here');
  input('[name="announcementText"]', 'New weekend specials are live.');
  document.querySelector('[name="announcementEnabled"]').checked = true;
  submit('#homepage-editor');
  await settle();
  assert.equal(document.querySelector('#hero-title-main').textContent, 'Orlando starts here', 'owner edits homepage');
  assert.equal(database.homepageSaves.at(-1).heroTitleMain, 'Orlando starts here', 'homepage edit saves to database');

  click('[data-owner-tab="listings"]');
  document.querySelector('#listing-select').value = firstId;
  document.querySelector('#listing-select').dispatchEvent(new window.Event('change', { bubbles: true }));
  const startTimeField = document.querySelector('#listing-editor [name="start"]');
  assert.equal(startTimeField.tagName, 'SELECT', 'listing start time uses an AM/PM dropdown');
  assert.equal(startTimeField.options[0].textContent, '9:00 AM', 'start-time choices begin at 9 AM');
  assert.equal(startTimeField.options[startTimeField.options.length - 1].textContent, '12:00 AM', 'start-time choices end at midnight');
  assert.equal(startTimeField.querySelector('[value="17"]').textContent, '5:00 PM', 'stored 24-hour values display as standard time');
  assert.match(document.querySelector('[name="drinkDeals"]').value, /\S/, 'listing editor separates drink specials');
  assert.match(document.querySelector('[name="foodDeals"]').value, /\S/, 'listing editor separates food specials');
  click('[data-editor-deal-tab="food"]');
  assert.equal(document.querySelector('[data-editor-deal-panel="food"]').hidden, false, 'owner can switch to food specials');
  assert.equal(document.querySelector('[data-editor-deal-panel="drinks"]').hidden, true, 'drink editor hides on Food tab');
  input('[name="foodDeals"]', `${document.querySelector('[name="foodDeals"]').value}\n$6 owner-edited bites`);
  input('#listing-editor [name="time"]', '4–8 PM');
  input('#listing-editor [name="start"]', '17.5');
  submit('#listing-editor');
  await settle();
  assert.equal(database.venueSaves.at(-1).venue.time, '4–8 PM', 'listing edit saves to database');
  assert.equal(database.venueSaves.at(-1).venue.start, 17.5, 'AM/PM dropdown saves the correct numeric start time');
  assert(database.venueSaves.at(-1).venue.dealCategories.includes('food'), 'food category saves with the listing');
  assert.match(document.querySelector(`[data-id="${firstId}"] .schedule-line`).textContent, /4–8 PM/);
  assert.match(document.querySelector('#listing-save-state').textContent, /Changes saved successfully/, 'edited listing shows a success confirmation');
  await pause(750);
  assert.equal(document.querySelector('#dashboard-modal').hasAttribute('open'), false, 'editor closes after updating a listing');

  click('#account-button');
  click('[data-owner-tab="listings"]');
  document.querySelector('#listing-select').value = firstId;
  document.querySelector('#listing-select').dispatchEvent(new window.Event('change', { bubbles: true }));
  const listingCountBeforeDelete = Number(document.querySelector('#listing-stat').textContent);
  click('#delete-listing');
  assert(document.querySelector('#delete-listing-modal').hasAttribute('open'), 'delete listing opens a confirmation dialog');
  assert.match(document.querySelector('#delete-listing-name').textContent, /\S/, 'confirmation names the listing being deleted');
  click('#delete-listing-modal [data-close-modal]');
  assert.equal(database.venueDeletes.length, 0, 'canceling the confirmation keeps the listing');
  click('#delete-listing');
  click('#confirm-delete-listing');
  await settle();
  assert.equal(database.venueDeletes.at(-1), firstId, 'owner deletion is saved to the database');
  assert.equal(document.querySelector(`[data-id="${firstId}"]`), null, 'deleted listing is removed from the directory');
  assert.equal(Number(document.querySelector('#listing-stat').textContent), listingCountBeforeDelete - 1, 'listing total updates after deletion');
  assert.equal(document.querySelector('#delete-listing-modal').hasAttribute('open'), false, 'confirmation closes after deletion');
  assert(document.querySelector('#dashboard-modal').hasAttribute('open'), 'owner dashboard stays open after deletion');
  assert.match(document.querySelector('#listing-save-state').textContent, /was deleted/, 'dashboard confirms the deletion');

  await testContactPage();

  console.log(JSON.stringify({
    initialCards, theme: 'ok', filters: 'ok', auth: 'ok', voting: 'database', favorites: 'database',
    uploads: 'private-storage', submissions: 'database', ownerRole: 'verified-email',
    homepageEditor: 'database', listingEditor: 'categorized-specials', saveConfirmation: 'auto-close',
    listingDeletion: 'database-with-confirmation', submissionReview: 'database',
    specialTabs: 'food-and-drinks', contactPage: 'email-ready'
  }));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
