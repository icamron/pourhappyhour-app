const venueData = [
  {
    id: 'lake-eola-social', name: 'Lake Eola Social', neighborhood: 'Downtown', address: '120 E Central Blvd, Orlando',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 16, time: '4–7 PM', price: '$$', score: 84,
    deals: ['$8 house cocktails', '$5 local drafts', 'Half-price shareables'], tags: ['Cocktails','Outdoor seating'], vibe: 'Lively downtown patio', parking: 'Street and nearby garages'
  },
  {
    id: 'citrus-and-rye', name: 'Citrus & Rye', neighborhood: 'Winter Park', address: '358 N Park Ave, Winter Park',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 15, time: '3–6 PM', price: '$$$', score: 72,
    deals: ['$9 seasonal cocktails', '$7 wine pours', '$10 flatbreads'], tags: ['Date night','Wine'], vibe: 'Polished and relaxed', parking: 'Garage behind Park Avenue'
  },
  {
    id: 'mills-house', name: 'Mills House', neighborhood: 'Mills 50', address: '944 N Mills Ave, Orlando',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85',
    days: ['tuesday','wednesday','thursday','friday','saturday'], start: 16, time: '4–6:30 PM', price: '$$', score: 91,
    deals: ['$6 highballs', '$4 bao bites', '$2 off sake'], tags: ['Late night','Small plates'], vibe: 'Creative neighborhood energy', parking: 'Small lot plus street parking'
  },
  {
    id: 'thornton-tap', name: 'Thornton Tap', neighborhood: 'Thornton Park', address: '420 E Church St, Orlando',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'], start: 14, time: '2–6 PM', price: '$', score: 67,
    deals: ['$4 drafts', '$6 frozen drinks', '$8 loaded fries'], tags: ['Dog friendly','Sports'], vibe: 'Easygoing corner bar', parking: 'Street parking'
  },
  {
    id: 'ivanhoe-supper-club', name: 'Ivanhoe Supper Club', neighborhood: 'Ivanhoe Village', address: '1800 N Orange Ave, Orlando',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
    days: ['wednesday','thursday','friday','saturday'], start: 17, time: '5–7 PM', price: '$$$', score: 78,
    deals: ['$10 martinis', '$9 oysters by the half-dozen', '$7 bar snacks'], tags: ['Martinis','Upscale'], vibe: 'Retro supper-club mood', parking: 'Complimentary valet after 5 PM'
  },
  {
    id: 'milk-district-market', name: 'Milk District Market', neighborhood: 'Milk District', address: '2408 E Robinson St, Orlando',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 15, time: '3–7 PM', price: '$', score: 63,
    deals: ['$5 margaritas', '$3 tacos', '$18 beer buckets'], tags: ['Groups','Tacos'], vibe: 'Casual and social', parking: 'Shared surface lot'
  },
  {
    id: 'college-park-canteen', name: 'College Park Canteen', neighborhood: 'College Park', address: '2301 Edgewater Dr, Orlando',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday'], start: 16, time: '4–6 PM', price: '$$', score: 59,
    deals: ['$6 spritzes', '$5 draft wine', '$7 sliders'], tags: ['Patio','Neighborhood'], vibe: 'Sunny neighborhood hangout', parking: 'Street parking on Edgewater'
  },
  {
    id: 'eola-rooftop', name: 'Eola Rooftop', neighborhood: 'Downtown', address: '55 W Pine St, Orlando',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85',
    days: ['thursday','friday','saturday','sunday'], start: 16, time: '4–7 PM', price: '$$$', score: 88,
    deals: ['$9 rooftop cocktails', '$6 prosecco', '$12 snack boards'], tags: ['Rooftop','Views'], vibe: 'Skyline views and DJs', parking: 'Nearby paid garage'
  },
  {
    id: 'sunroom-on-mills', name: 'Sunroom on Mills', neighborhood: 'Mills 50', address: '1112 N Mills Ave, Orlando',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','sunday'], start: 17, time: '5–8 PM', price: '$$', score: 75,
    deals: ['$7 tropical classics', '$5 zero-proof drinks', '$6 crispy bites'], tags: ['Tropical','Zero-proof'], vibe: 'Colorful and intimate', parking: 'Street parking'
  },
  {
    id: 'park-avenue-pour', name: 'Park Avenue Pour', neighborhood: 'Winter Park', address: '610 S Park Ave, Winter Park',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 14, time: '2–5 PM', price: '$$', score: 69,
    deals: ['$8 wine flights', '$5 lager', 'Half-price bruschetta'], tags: ['Wine bar','Quiet'], vibe: 'Low-key wine bar', parking: 'Free street parking nearby'
  },
  {
    id: 'the-green-room', name: 'The Green Room', neighborhood: 'Thornton Park', address: '712 E Washington St, Orlando',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=85',
    days: ['tuesday','wednesday','thursday','friday','saturday'], start: 16, time: '4–7 PM', price: '$$', score: 81,
    deals: ['$7 garden cocktails', '$6 glasses of wine', '$9 hummus boards'], tags: ['Garden patio','Vegetarian'], vibe: 'Leafy patio hideaway', parking: 'Street parking'
  },
  {
    id: 'orange-line-kitchen', name: 'Orange Line Kitchen', neighborhood: 'Downtown', address: '319 N Orange Ave, Orlando',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 15, time: '3–6 PM', price: '$$', score: 64,
    deals: ['$5 wells', '$6 draft cocktails', '$8 smashburger'], tags: ['Burgers','After work'], vibe: 'Fast-paced downtown stop', parking: 'Central Boulevard garage'
  },
  {
    id: 'johnnys-other-side', name: "Johnny's Other Side", neighborhood: 'South Downtown', address: '1619 E Michigan St, Orlando, FL 32806', website: 'https://johnnysotherside.com/',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
    days: ['tuesday'], start: 17, time: '5–10 PM', price: '$$', score: 76,
    deals: ['Limited half-price menu', 'Tuesday only', 'Available 5–10 PM'], tags: ['Covered patio','Live music'], vibe: 'Family-owned patio restaurant and bar', parking: 'Confirm parking details with the venue'
  },
  {
    id: 'firebirds-orlando', name: 'Firebirds Wood Fired Grill', neighborhood: 'Mills Park', address: '1562 N Mills Ave, Orlando, FL 32803', website: 'https://firebirdsrestaurants.com/orlando/menu/firebar',
    image: 'https://images.firebirdsrestaurants.com/production/general/Steak-Tacos-FIREBAR-Hero.jpg?auto=format%2Cavif&dm=1711397803&fit=crop&h=932&q=80&s=e745b176f18b1c56f52273302ac1373f&w=1660',
    days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'], start: 11, time: '11 AM–6 PM', price: '$$', score: 82,
    deals: ['$7.95 martinis & classic cocktails', '$6 wine, $5 wells & $2 off drafts', 'Happy-hour bar bites from $5.95', 'Every day, excluding major holidays'], tags: ['FIREBAR','Patio'], vibe: 'Polished wood-fired grill and bar', parking: 'Confirm parking details with the venue'
  },
  {
    id: 'hawkers-asian-street-food', name: 'Hawkers Asian Street Food', neighborhood: 'Mills 50', address: '1103 N Mills Ave, Orlando, FL 32803',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85',
    days: ['monday','tuesday','wednesday','thursday'], start: 15, time: '3–6 PM', price: '$$', score: 0,
    deals: ['Half off all bao buns', '$3 off all spirits', '$5 select small plates'], tags: [], vibe: '', parking: 'Parking lot'
  },
  {
    id: 'thrive', name: 'Thrive Cocktail Lounge & Eatery', neighborhood: 'Downtown', address: '13 S Orange Ave, Orlando, FL 32801', website: 'https://eatdrinkthriveorl.com/menu/',
    image: 'https://eatdrinkthriveorl.com/wp-content/uploads/2023/04/ThriveFront.png',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 16, time: '4–7 PM', price: '$$$', score: 0,
    deals: ['Apps, sushi, and wings', '18% gratuity on everything', 'Monday service industry night'], tags: ['Cozy','Cocktails'], vibe: 'Cozy cocktail lounge', parking: 'Paid street or paid garage'
  },
  {
    id: 'lamp-and-shade', name: 'Lamp & Shade Craft Kitchen & Cocktails', neighborhood: 'Mills 50', address: '1336 N Mills Ave, Orlando, FL 32803', website: 'https://throwsomeshadeorl.com/menus/',
    image: 'https://throwsomeshadeorl.com/wp-content/uploads/2024/07/hhweb4-min.jpg',
    days: ['sunday','monday','tuesday','wednesday','thursday','friday'], start: 16, time: 'Weekly specials · Sun–Fri', price: '$$$', score: 0,
    deals: ['Monday Industry Night: 20% off for hospitality, health care, and first responders · 4 PM–close', 'Shuck It + Tomahawk Tuesday: $2 oysters, discounted bubbles and white wine, and a $90 tomahawk · 4 PM–close', 'Midweek Martinis & Margs: $10 martinis and margaritas Wednesday · 4 PM–close', 'Thriving Thursday: happy hour all night · 4 PM–close', 'Shady Nights: $8 classic cocktails Sunday–Wednesday · 9 PM–close', 'Happy Hour: $10 classic cocktails and select wine Monday–Friday · until 6 PM'],
    tags: ['Craft cocktails','Oysters','Late night'], vibe: 'Playful, polished craft kitchen and cocktail bar', parking: 'Confirm parking details with the venue'
  }
];

const placeholderVenueImage = 'assets/venue-placeholder.svg';

const dealCategoryOverrides = {
  'lake-eola-social': ['drinks', 'drinks', 'food'],
  'citrus-and-rye': ['drinks', 'drinks', 'food'],
  'mills-house': ['drinks', 'food', 'drinks'],
  'thornton-tap': ['drinks', 'drinks', 'food'],
  'ivanhoe-supper-club': ['drinks', 'food', 'food'],
  'milk-district-market': ['drinks', 'food', 'drinks'],
  'college-park-canteen': ['drinks', 'drinks', 'food'],
  'eola-rooftop': ['drinks', 'drinks', 'food'],
  'sunroom-on-mills': ['drinks', 'drinks', 'food'],
  'park-avenue-pour': ['drinks', 'drinks', 'food'],
  'the-green-room': ['drinks', 'drinks', 'food'],
  'orange-line-kitchen': ['drinks', 'drinks', 'food'],
  'johnnys-other-side': ['food', 'info', 'info'],
  'firebirds-orlando': ['drinks', 'drinks', 'food', 'info'],
  'hawkers-asian-street-food': ['food', 'drinks', 'food'],
  'thrive': ['food', 'info', 'info'],
  'lamp-and-shade': ['both', 'both', 'drinks', 'info', 'drinks', 'drinks']
};

function inferDealCategory(deal) {
  const text = String(deal || '').toLowerCase();
  const hasDrinks = /beer|bourbon|bubbles|cocktail|draft|drink|gin|highball|lager|liquor|margarita|martini|mimosa|mojito|pour|prosecco|rum|sake|sangria|spirit|spritz|tequila|vodka|well|whiskey|wine|zero-proof/.test(text);
  const hasFood = /app\b|apps\b|appetizer|bao|bite|board|bruschetta|burger|charcuterie|cheese|chicken|flatbread|food|fries|hummus|menu|oyster|pizza|shareable|slider|snack|steak|sushi|taco|tomahawk|wing/.test(text);
  if (hasDrinks && hasFood) return 'both';
  if (hasDrinks) return 'drinks';
  if (hasFood) return 'food';
  return 'info';
}

function dealCategoriesForVenue(venue) {
  const overrides = dealCategoryOverrides[venue.id] || [];
  return (venue.deals || []).map((deal, index) => overrides[index] || inferDealCategory(deal));
}

function normalizeVenueDealRecords(venueId, rawDeals = []) {
  const overrides = dealCategoryOverrides[venueId] || [];
  const deals = [];
  const dealCategories = [];
  rawDeals.forEach((entry, index) => {
    let storedEntry = entry;
    if (typeof entry === 'string' && entry.trim().startsWith('{')) {
      try {
        const parsed = JSON.parse(entry);
        if (parsed && typeof parsed === 'object' && typeof parsed.text === 'string') storedEntry = parsed;
      } catch {
        storedEntry = entry;
      }
    }
    const text = typeof storedEntry === 'string' ? storedEntry.trim() : String(storedEntry?.text || '').trim();
    if (!text) return;
    const storedCategory = typeof storedEntry === 'object' && ['drinks', 'food', 'both', 'info'].includes(storedEntry?.category)
      ? storedEntry.category
      : null;
    deals.push(text);
    dealCategories.push(storedCategory || overrides[index] || inferDealCategory(text));
  });
  return { deals, dealCategories };
}

const customVenueSchedules = {
  'lamp-and-shade': [
    { days: ['monday','tuesday','wednesday','thursday'], start: 16, end: 23 },
    { days: ['friday'], start: 16, end: 18 },
    { days: ['sunday'], start: 21, end: 22 }
  ]
};
venueData.forEach(venue => {
  venue.schedule = customVenueSchedules[venue.id] || [];
  venue.dealCategories = dealCategoriesForVenue(venue);
});

const db = window.SipCityDb;
const defaultVenueData = JSON.parse(JSON.stringify(venueData));

const defaultSiteContent = {
  announcementEnabled: false,
  announcementText: 'Fresh finds are added every Friday. Check back before the weekend.',
  heroEyebrow: 'Your after-work shortcut',
  heroTitleMain: 'Find Orlando’s',
  heroTitleAccent: 'best hours.',
  heroDescription: 'Discover standout drinks, bites, and neighborhood spots without digging through a dozen menus.',
  directoryTitle: 'Good deals. Better plans.',
  directoryDescription: 'Browse local specials, save favorites, and confirm current offers with the venue before visiting.'
};
let siteContent = { ...defaultSiteContent };
let activeOwnerPanel = 'favorites';

const state = {
  query: '',
  neighborhood: 'All',
  day: 'today',
  sort: 'top',
  user: null,
  userId: null,
  userEmail: null,
  role: 'member',
  votes: {},
  favorites: [],
  pendingAction: null,
  submissions: [],
  submissionsLoaded: false,
  submissionsLoading: false,
  pendingSubmissionId: null,
  pendingDeleteVenueId: null
};

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('sip-city-theme', theme);
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#081f1a' : '#153c35');
}

const elements = {
  grid: document.querySelector('#venue-grid'),
  count: document.querySelector('#result-count'),
  context: document.querySelector('#result-context'),
  empty: document.querySelector('#empty-state'),
  search: document.querySelector('#directory-search'),
  heroSearch: document.querySelector('#hero-search'),
  day: document.querySelector('#day-filter'),
  sort: document.querySelector('#sort-filter'),
  neighborhoods: document.querySelector('#neighborhoods'),
  detailModal: document.querySelector('#detail-modal'),
  detailContent: document.querySelector('#detail-content'),
  accountButton: document.querySelector('#account-button'),
  accountAvatar: document.querySelector('#account-avatar'),
  accountLabel: document.querySelector('#account-label'),
  accountModal: document.querySelector('#account-modal'),
  accountForm: document.querySelector('#account-form'),
  usernameInput: document.querySelector('#username-input'),
  accountEmailInput: document.querySelector('#account-email-input'),
  accountSubmit: document.querySelector('#account-submit'),
  accountEmailSent: document.querySelector('#account-email-sent'),
  usernameError: document.querySelector('#username-error'),
  dashboardModal: document.querySelector('#dashboard-modal'),
  dashboardTitle: document.querySelector('#dashboard-title'),
  dashboardAvatar: document.querySelector('#dashboard-avatar'),
  dashboardFavorites: document.querySelector('#dashboard-favorites'),
  dashboardEmpty: document.querySelector('#dashboard-empty'),
  favoriteCount: document.querySelector('#favorite-count'),
  voteCount: document.querySelector('#vote-count'),
  accountRole: document.querySelector('#account-role'),
  signOut: document.querySelector('#sign-out'),
  ownerWorkspace: document.querySelector('#owner-workspace'),
  ownerTabs: document.querySelectorAll('[data-owner-tab]'),
  ownerPanels: document.querySelectorAll('[data-owner-panel]'),
  homepageEditor: document.querySelector('#homepage-editor'),
  homepageSaveState: document.querySelector('#homepage-save-state'),
  listingEditor: document.querySelector('#listing-editor'),
  listingSelect: document.querySelector('#listing-select'),
  newListing: document.querySelector('#new-listing'),
  deleteListing: document.querySelector('#delete-listing'),
  deleteListingModal: document.querySelector('#delete-listing-modal'),
  deleteListingName: document.querySelector('#delete-listing-name'),
  confirmDeleteListing: document.querySelector('#confirm-delete-listing'),
  listingSaveState: document.querySelector('#listing-save-state'),
  listingSubmit: document.querySelector('#save-listing'),
  submissionCount: document.querySelector('#submission-count'),
  submissionQueue: document.querySelector('#submission-queue'),
  submissionEmpty: document.querySelector('#submission-empty'),
  refreshSubmissions: document.querySelector('#refresh-submissions'),
  announcementBar: document.querySelector('#announcement-bar'),
  announcementText: document.querySelector('#announcement-text'),
  heroSlides: document.querySelector('#hero-slides'),
  submitModal: document.querySelector('#submit-modal'),
  submitForm: document.querySelector('#submit-form'),
  submitSuccess: document.querySelector('#submit-success'),
  uploadInput: document.querySelector('#menu-upload'),
  uploadBox: document.querySelector('#upload-box'),
  uploadTitle: document.querySelector('#upload-title'),
  uploadHelp: document.querySelector('#upload-help'),
  uploadError: document.querySelector('#upload-error'),
  removeUpload: document.querySelector('#remove-upload'),
  toast: document.querySelector('#toast')
};

let selectedAttachment = null;
const allowedAttachmentTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
const maxAttachmentSize = 10 * 1024 * 1024;
const originalHeroPhotos = [...elements.heroSlides.querySelectorAll('[data-hero-original]')].map(image => image.src);
const featuredHeroVenueNames = [
  'Aroma Gastro Bar',
  'Bulla',
  'AVA MediterrAegean',
  'The Osprey',
  'The Ravenous Pig',
  'Prato',
  'Seito Sushi Baldwin Park',
  'Permanent Vacation',
  'The Courtesy',
  'Lamp & Shade Craft Kitchen & Cocktails',
  'Firebirds Wood Fired Grill',
  'Thrive Cocktail Lounge & Eatery'
];

function validHeroPhoto(value) {
  if (!value || value === placeholderVenueImage || /\.pdf(?:$|[?#])/i.test(value)) return false;
  try { return ['http:', 'https:'].includes(new URL(value, window.location.href).protocol); }
  catch { return false; }
}

function heroPhotoQualityScore(venue) {
  const priorityIndex = featuredHeroVenueNames.findIndex(name => name.toLowerCase() === venue.name.toLowerCase());
  let score = priorityIndex >= 0 ? 1000 - priorityIndex * 20 : 0;
  try {
    const url = new URL(venue.image, window.location.href);
    const width = Number(url.searchParams.get('w') || url.searchParams.get('width') || 0);
    const quality = Number(url.searchParams.get('q') || url.searchParams.get('quality') || 0);
    if (width >= 1600) score += 60;
    else if (width >= 1200) score += 45;
    else if (width >= 900) score += 30;
    if (quality >= 80) score += 15;
    if (/\.(?:avif|webp|jpe?g|png)(?:$|[?#])/i.test(url.href)) score += 10;
    if (url.protocol === 'https:') score += 5;
  } catch {}
  return score;
}

function refreshHeroCarousel(sourceVenues = venueData) {
  const usedUrls = new Set(originalHeroPhotos);
  const venuePhotos = sourceVenues
    .filter(venue => venue.published !== false && validHeroPhoto(venue.image) && !usedUrls.has(venue.image))
    .sort((a, b) => heroPhotoQualityScore(b) - heroPhotoQualityScore(a) || a.name.localeCompare(b.name))
    .filter(venue => {
      if (usedUrls.has(venue.image)) return false;
      usedUrls.add(venue.image);
      return true;
    })
    .slice(0, 5)
    .map(venue => ({ url: venue.image, venue: venue.name }));
  const photos = [
    ...originalHeroPhotos.map(url => ({ url, venue: '' })),
    ...venuePhotos
  ];
  const slides = photos.map((photo, index) => {
    const image = document.createElement('img');
    image.className = 'hero-slide';
    image.src = photo.url;
    image.alt = '';
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.style.setProperty('--hero-slide-delay', `${index * 6}s`);
    if (index === 0) image.fetchPriority = 'high';
    if (photo.venue) image.dataset.heroVenue = photo.venue;
    else image.dataset.heroOriginal = '';
    if (photo.venue) {
      image.addEventListener('error', () => {
        image.remove();
        const remainingSlides = [...elements.heroSlides.querySelectorAll('.hero-slide')];
        remainingSlides.forEach((slide, slideIndex) => slide.style.setProperty('--hero-slide-delay', `${slideIndex * 6}s`));
        elements.heroSlides.dataset.count = String(remainingSlides.length);
        elements.heroSlides.style.setProperty('--hero-cycle-duration', `${remainingSlides.length * 6}s`);
      }, { once: true });
    }
    return image;
  });
  elements.heroSlides.replaceChildren(...slides);
  elements.heroSlides.dataset.count = String(slides.length);
  elements.heroSlides.style.setProperty('--hero-cycle-duration', `${slides.length * 6}s`);
}

function isOwner() {
  return state.role === 'owner';
}

function applySiteContent() {
  document.querySelector('#hero-eyebrow-text').textContent = siteContent.heroEyebrow;
  document.querySelector('#hero-title-main').textContent = siteContent.heroTitleMain;
  document.querySelector('#hero-title-accent').textContent = siteContent.heroTitleAccent;
  document.querySelector('#hero-description').textContent = siteContent.heroDescription;
  document.querySelector('#directory-title').textContent = siteContent.directoryTitle;
  document.querySelector('#directory-description').textContent = siteContent.directoryDescription;
  elements.announcementText.textContent = siteContent.announcementText;
  elements.announcementBar.hidden = !siteContent.announcementEnabled || !siteContent.announcementText.trim();
}

function fillHomepageEditor() {
  Object.entries(siteContent).forEach(([key, value]) => {
    const field = elements.homepageEditor.elements.namedItem(key);
    if (!field) return;
    if (field.type === 'checkbox') field.checked = Boolean(value);
    else field.value = value;
  });
}

function fillListingEditor(id = elements.listingSelect.value || venueData[0].id) {
  const isNew = id === '__new';
  const venue = isNew ? {
    id: '__new', name: '', neighborhood: '', address: '', website: '',
    image: '',
    days: ['monday','tuesday','wednesday','thursday','friday'], start: 16,
    time: '4–7 PM', price: '$$', deals: [], dealCategories: [], tags: [], vibe: '', parking: '', published: true
  } : venueData.find(item => item.id === id) || venueData[0];
  if (isNew && !elements.listingSelect.querySelector('[value="__new"]')) {
    elements.listingSelect.insertAdjacentHTML('afterbegin', '<option value="__new">New listing</option>');
  }
  elements.listingSelect.value = venue.id;
  const fields = elements.listingEditor.elements;
  fields.namedItem('name').value = venue.name;
  fields.namedItem('neighborhood').value = venue.neighborhood;
  fields.namedItem('address').value = venue.address;
  fields.namedItem('website').value = venue.website || '';
  fields.namedItem('image').value = venue.image;
  fields.namedItem('time').value = venue.time;
  fields.namedItem('start').value = venue.start;
  fields.namedItem('price').value = venue.price;
  fields.namedItem('days').value = venue.days.join(', ');
  fillListingDealFields(venue);
  fields.namedItem('tags').value = venue.tags.join(', ');
  fields.namedItem('vibe').value = venue.vibe;
  fields.namedItem('parking').value = venue.parking;
  fields.namedItem('published').checked = venue.published !== false;
  elements.listingSaveState.classList.remove('saved', 'error');
  elements.listingSubmit.disabled = false;
  elements.listingSubmit.classList.remove('is-saved');
  elements.listingSubmit.textContent = 'Save listing';
  elements.deleteListing.disabled = isNew;
  elements.listingSaveState.textContent = isNew ? 'Complete the fields to add a venue' : `Editing ${venue.name}`;
}

function activateListingDealTab(tabName) {
  elements.listingEditor.querySelectorAll('[data-editor-deal-tab]').forEach(tab => {
    const active = tab.dataset.editorDealTab === tabName;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  elements.listingEditor.querySelectorAll('[data-editor-deal-panel]').forEach(panel => {
    panel.hidden = panel.dataset.editorDealPanel !== tabName;
  });
}

function fillListingDealFields(venue) {
  const groups = categorizedVenueDeals(venue);
  const fields = elements.listingEditor.elements;
  fields.namedItem('drinkDeals').value = groups.drinks.join('\n');
  fields.namedItem('foodDeals').value = groups.food.join('\n');
  fields.namedItem('infoDeals').value = groups.info.join('\n');
  activateListingDealTab(groups.drinks.length || !groups.food.length ? 'drinks' : 'food');
}

function refreshListingSelect(selectedId = venueData[0]?.id) {
  elements.listingSelect.innerHTML = venueData
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(venue => `<option value="${venue.id}">${venue.name}</option>`)
    .join('');
  if (selectedId) fillListingEditor(selectedId);
}

function showOwnerPanel(panel) {
  activeOwnerPanel = panel;
  elements.ownerTabs.forEach(tab => {
    const active = tab.dataset.ownerTab === panel;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  elements.ownerPanels.forEach(item => { item.hidden = item.dataset.ownerPanel !== panel; });
  if (panel === 'homepage') fillHomepageEditor();
  if (panel === 'listings' && !state.pendingSubmissionId) fillListingEditor();
  if (panel === 'submissions') loadSubmissionQueue();
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function formatSubmissionDate(value) {
  if (!value) return 'Recently submitted';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/New_York'
  }).format(new Date(value));
}

function submissionCardMarkup(submission) {
  const id = escapeHtml(submission.id);
  const status = submission.status || 'pending';
  const sourceUrl = safeExternalUrl(submission.source_url);
  const attachment = submission.attachment_path
    ? `<button type="button" data-submission-action="attachment" data-submission-id="${id}">View ${escapeHtml(submission.attachment_name || 'attachment')} ↗</button>`
    : '';
  const contact = submission.contact_email
    ? `<span class="submission-contact">Contact: ${escapeHtml(submission.contact_email)}</span>`
    : '<span class="submission-contact">No contact email provided</span>';
  const review = status === 'pending' ? `
    <label class="submission-review">
      <span>Private review note</span>
      <textarea data-submission-notes="${id}" rows="2" placeholder="Optional reason or internal note">${escapeHtml(submission.review_notes || '')}</textarea>
    </label>
    <div class="submission-actions">
      <button class="button button-ghost" type="button" data-submission-action="reject" data-submission-id="${id}">Reject</button>
      <button class="button button-dark" type="button" data-submission-action="build" data-submission-id="${id}">Build listing →</button>
    </div>` : `
    ${submission.review_notes ? `<p class="submission-contact">Review note: ${escapeHtml(submission.review_notes)}</p>` : ''}
    ${status === 'rejected' ? `<div class="submission-actions"><button class="button button-ghost" type="button" data-submission-action="reopen" data-submission-id="${id}">Return to pending</button></div>` : ''}`;
  return `<article class="submission-card" data-submission-card="${id}">
    <div class="submission-card-header">
      <div><span class="submission-meta">${escapeHtml(submission.neighborhood)} · ${escapeHtml(formatSubmissionDate(submission.created_at))}</span><h4>${escapeHtml(submission.venue_name)}</h4></div>
      <span class="submission-status ${escapeHtml(status)}">${escapeHtml(status)}</span>
    </div>
    <p class="submission-details">${escapeHtml(submission.details)}</p>
    <div class="submission-links">
      ${sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">Open source ↗</a>` : ''}
      ${attachment}
      ${contact}
    </div>
    ${review}
  </article>`;
}

function renderSubmissionQueue() {
  const order = { pending: 0, rejected: 1, approved: 2 };
  const submissions = state.submissions.slice().sort((a, b) =>
    (order[a.status] ?? 3) - (order[b.status] ?? 3) || new Date(b.created_at) - new Date(a.created_at)
  );
  const pendingCount = submissions.filter(item => item.status === 'pending').length;
  elements.submissionCount.textContent = pendingCount;
  elements.submissionQueue.innerHTML = submissions.map(submissionCardMarkup).join('');
  elements.submissionQueue.hidden = submissions.length === 0;
  elements.submissionEmpty.hidden = submissions.length > 0;
}

async function loadSubmissionQueue(force = false) {
  if (!isOwner() || state.submissionsLoading || (state.submissionsLoaded && !force)) return;
  state.submissionsLoading = true;
  if (!state.submissionsLoaded) {
    elements.submissionQueue.innerHTML = '<p class="submission-loading">Loading submissions…</p>';
    elements.submissionQueue.hidden = false;
    elements.submissionEmpty.hidden = true;
  }
  try {
    state.submissions = await db.getSubmissions();
    state.submissionsLoaded = true;
    renderSubmissionQueue();
  } catch (error) {
    console.error(error);
    elements.submissionQueue.innerHTML = '<p class="submission-loading">Submissions could not be loaded. Try Refresh.</p>';
    elements.submissionQueue.hidden = false;
    elements.submissionEmpty.hidden = true;
    showToast('Submission queue could not be loaded.');
  } finally {
    state.submissionsLoading = false;
  }
}

function replaceSubmission(updatedSubmission) {
  const index = state.submissions.findIndex(item => item.id === updatedSubmission.id);
  if (index >= 0) state.submissions[index] = updatedSubmission;
  else state.submissions.unshift(updatedSubmission);
  renderSubmissionQueue();
}

function submissionDealLines(details) {
  const words = String(details || '').replace(/\s+/g, ' ').trim().split(' ');
  const lines = [''];
  words.forEach(word => {
    const current = lines.at(-1);
    if (`${current} ${word}`.trim().length > 76 && lines.length < 3) lines.push(word);
    else lines[lines.length - 1] = `${current} ${word}`.trim();
  });
  return lines.slice(0, 3).map(line => line.slice(0, 80));
}

function buildListingFromSubmission(submission) {
  state.pendingSubmissionId = submission.id;
  showOwnerPanel('listings');
  fillListingEditor('__new');
  const fields = elements.listingEditor.elements;
  const dealLines = submissionDealLines(submission.details);
  fields.namedItem('name').value = submission.venue_name || '';
  fields.namedItem('neighborhood').value = submission.neighborhood || '';
  fields.namedItem('website').value = safeExternalUrl(submission.source_url) || '';
  fillListingDealFields({
    id: '__submission',
    deals: dealLines,
    dealCategories: dealLines.map(inferDealCategory)
  });
  fields.namedItem('tags').value = 'Community submission';
  elements.listingSaveState.textContent = `Building a listing from ${submission.venue_name}. Complete the address, schedule, image, and specials.`;
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function resetAttachment() {
  selectedAttachment = null;
  elements.uploadInput.value = '';
  elements.uploadTitle.textContent = 'Drop a menu here or browse';
  elements.uploadHelp.textContent = 'PDF, JPG, PNG, or WEBP · Up to 10 MB';
  elements.uploadError.hidden = true;
  elements.uploadError.textContent = '';
  elements.removeUpload.hidden = true;
  elements.uploadBox.classList.remove('has-file', 'has-error', 'drag-active');
}

function selectAttachment(file) {
  const validExtension = /\.(pdf|jpe?g|png|webp)$/i.test(file?.name || '');
  if (!file || (!allowedAttachmentTypes.includes(file.type) && !validExtension)) {
    resetAttachment();
    elements.uploadError.textContent = 'Please choose a PDF, JPG, PNG, or WEBP file.';
    elements.uploadError.hidden = false;
    elements.uploadBox.classList.add('has-error');
    return false;
  }
  if (file.size > maxAttachmentSize) {
    resetAttachment();
    elements.uploadError.textContent = 'That file is larger than 10 MB. Please choose a smaller file.';
    elements.uploadError.hidden = false;
    elements.uploadBox.classList.add('has-error');
    return false;
  }
  selectedAttachment = file;
  elements.uploadTitle.textContent = file.name;
  elements.uploadHelp.textContent = `${formatFileSize(file.size)} · Ready to attach`;
  elements.uploadError.hidden = true;
  elements.removeUpload.hidden = false;
  elements.uploadBox.classList.remove('has-error');
  elements.uploadBox.classList.add('has-file');
  return true;
}

function orlandoClock(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(date);
  const value = type => parts.find(part => part.type === type)?.value;
  return {
    day: value('weekday').toLowerCase(),
    hour: Number(value('hour')) + Number(value('minute')) / 60
  };
}

const dayInOrlando = () => orlandoClock().day;
const activeDay = () => state.day === 'today' ? dayInOrlando() : state.day;

function happyHourEnd(venue) {
  const timeMatches = [...venue.time.matchAll(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/gi)];
  const endMatch = timeMatches.at(-1);
  if (!endMatch) return null;
  let hour = Number(endMatch[1]) % 12 + (endMatch[3].toUpperCase() === 'PM' ? 12 : 0);
  hour += Number(endMatch[2] || 0) / 60;
  if (hour <= venue.start) hour += 24;
  return hour;
}

function activeHappyHourEnd(venue, date = new Date()) {
  const { day, hour } = orlandoClock(date);
  const weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const previousDay = weekdays[(weekdays.indexOf(day) + 6) % 7];
  const windows = venue.schedule?.length
    ? venue.schedule
    : [{ days: venue.days, start: venue.start, end: happyHourEnd(venue) }];
  for (const window of windows) {
    if (window.end === null) continue;
    if (window.end <= 24 && window.days.includes(day) && hour >= window.start && hour < window.end) return window.end;
    if (window.end > 24 && window.days.includes(day) && hour >= window.start) return window.end;
    if (window.end > 24 && window.days.includes(previousDay) && hour < window.end - 24) return window.end - 24;
  }
  return null;
}

function isHappeningNow(venue, date = new Date()) {
  return activeHappyHourEnd(venue, date) !== null;
}

function icon(direction) {
  return direction === 'up'
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 10 6 6 6-6"/></svg>';
}

function heartIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>';
}

function userVotes() {
  return state.user ? state.votes : {};
}

function userFavorites() {
  return state.user ? state.favorites : [];
}

function isFavorite(id) {
  return userFavorites().includes(id);
}

function currentScore(venue) {
  return venue.score;
}

function selectedVenues() {
  const query = state.query.trim().toLowerCase();
  const day = activeDay();
  return venueData
    .filter(v => state.neighborhood === 'All' || v.neighborhood === state.neighborhood)
    .filter(v => state.sort === 'now' || state.day === 'all' || v.days.includes(day))
    .filter(v => state.sort !== 'now' || isHappeningNow(v))
    .filter(v => !query || [v.name, v.neighborhood, v.address, ...v.deals, ...v.tags].join(' ').toLowerCase().includes(query))
    .sort((a, b) => {
      if (state.sort === 'az') return a.name.localeCompare(b.name);
      if (state.sort === 'soonest') return a.start - b.start || currentScore(b) - currentScore(a);
      if (state.sort === 'now') return activeHappyHourEnd(a) - activeHappyHourEnd(b) || currentScore(b) - currentScore(a);
      return currentScore(b) - currentScore(a);
    });
}

function cardMarkup(venue) {
  const vote = userVotes()[venue.id] || 0;
  const favorite = isFavorite(venue.id);
  const available = venue.days.includes(activeDay());
  const happeningNow = isHappeningNow(venue);
  const scheduleText = venue.schedule?.length
    ? venue.time
    : `${venue.time} · ${venue.days.length === 7 ? 'Daily' : venue.days.map(d => d.slice(0,3)).join(' · ')}`;
  return `
    <article class="venue-card" data-id="${venue.id}">
      <div class="card-image">
        <img src="${venueImage(venue)}" alt="${venue.image ? `Photo representing ${venue.name}` : ''}" loading="lazy" onerror="this.onerror=null;this.src='${placeholderVenueImage}'" />
        ${venue.price ? `<div class="image-tags"><span class="price-pill">${venue.price}</span></div>` : ''}
      </div>
      <button class="card-main" data-view="${venue.id}" aria-label="View details for ${venue.name}">
        <div class="card-location"><span>${venue.neighborhood}</span>${happeningNow ? '<span class="now-badge">● Happening now</span>' : available ? '<span class="today-badge">● Today</span>' : ''}</div>
        <h3>${venue.name}</h3>
        <div class="schedule-line"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>${scheduleText}</span></div>
        <p class="deal-list">${venue.deals.slice(0,2).join(' · ')}</p>
      </button>
      <div class="card-footer">
        <span class="card-tag">${venue.tags.join(' · ')}</span>
        <div class="card-actions">
          <button class="favorite-button ${favorite ? 'active' : ''}" data-favorite="${venue.id}" aria-label="${favorite ? 'Remove' : 'Save'} ${venue.name} ${favorite ? 'from' : 'to'} favorites" aria-pressed="${favorite}">${heartIcon()}</button>
          <div class="vote-group" aria-label="Vote on ${venue.name}">
            <button class="vote-button ${vote === 1 ? 'active-up' : ''}" data-vote="up" data-id="${venue.id}" aria-label="Upvote ${venue.name}" aria-pressed="${vote === 1}">${icon('up')}</button>
            <span class="vote-score" data-score="${venue.id}">${currentScore(venue)}</span>
            <button class="vote-button ${vote === -1 ? 'active-down' : ''}" data-vote="down" data-id="${venue.id}" aria-label="Downvote ${venue.name}" aria-pressed="${vote === -1}">${icon('down')}</button>
          </div>
        </div>
      </div>
    </article>`;
}

function render() {
  const venues = selectedVenues();
  document.querySelector('#listing-stat').textContent = venueData.length;
  document.querySelector('#neighborhood-stat').textContent = new Set(
    venueData
      .map(venue => String(venue.neighborhood || '').trim().toLocaleLowerCase())
      .filter(Boolean)
  ).size;
  elements.grid.innerHTML = venues.map(cardMarkup).join('');
  elements.count.textContent = `${venues.length} ${venues.length === 1 ? 'spot' : 'spots'}`;
  elements.context.textContent = state.sort === 'now'
    ? ' happening right now'
    : state.query || state.neighborhood !== 'All' || state.day !== 'today'
      ? ' matching your filters'
      : ' worth leaving work for';
  elements.empty.hidden = venues.length > 0;
  elements.grid.hidden = venues.length === 0;
}

function renderNeighborhoods() {
  const names = ['All', ...new Set(venueData.map(v => v.neighborhood))];
  elements.neighborhoods.innerHTML = names.map(name => `<button class="neighborhood-chip ${state.neighborhood === name ? 'active' : ''}" data-neighborhood="${name}" aria-pressed="${state.neighborhood === name}">${name}</button>`).join('');
}

function resetFilters() {
  state.query = '';
  state.neighborhood = 'All';
  state.day = 'today';
  state.sort = 'top';
  elements.search.value = '';
  elements.heroSearch.value = '';
  elements.day.value = 'today';
  elements.sort.value = 'top';
  renderNeighborhoods();
  render();
}

function updateAccountUI() {
  const signedIn = Boolean(state.user);
  elements.accountButton.classList.toggle('signed-in', signedIn);
  elements.accountButton.classList.toggle('is-owner', isOwner());
  elements.accountAvatar.textContent = signedIn ? state.user[0] : '?';
  elements.accountLabel.textContent = signedIn ? `@${state.user}` : 'Sign in';
  elements.accountButton.setAttribute('aria-label', signedIn ? `Open ${isOwner() ? 'owner ' : ''}dashboard for @${state.user}` : 'Sign in or create an account');
}

function openAccount(pendingAction = null) {
  if (pendingAction) state.pendingAction = pendingAction;
  elements.usernameError.hidden = true;
  elements.usernameError.textContent = '';
  elements.accountForm.hidden = false;
  elements.accountEmailSent.hidden = true;
  if (elements.detailModal.open) elements.detailModal.close();
  elements.accountModal.showModal();
  window.setTimeout(() => elements.usernameInput.focus(), 0);
}

function mapDatabaseVenue(row, scoreById = {}) {
  const normalizedDeals = normalizeVenueDealRecords(row.id, row.deals || []);
  return {
    id: row.id,
    name: row.name,
    neighborhood: row.neighborhood,
    address: row.address,
    website: row.website || '',
    image: row.image_url || '',
    days: row.days || [],
    start: Number(row.start_hour),
    time: row.time_label,
    price: row.price_level,
    baseScore: Number(row.base_score),
    score: Number(scoreById[row.id] ?? row.base_score),
    deals: normalizedDeals.deals,
    dealCategories: normalizedDeals.dealCategories,
    tags: row.tags || [],
    vibe: row.vibe || '',
    parking: row.parking || '',
    published: row.published !== false,
    schedule: Array.isArray(row.schedule) && row.schedule.length
      ? row.schedule.map(window => ({
          days: Array.isArray(window.days) ? window.days : [],
          start: Number(window.start),
          end: Number(window.end)
        }))
      : customVenueSchedules[row.id] || []
  };
}

function venueImage(venue) {
  return venue.image || placeholderVenueImage;
}

function categorizedVenueDeals(venue) {
  const groups = { drinks: [], food: [], info: [] };
  const categories = venue.dealCategories?.length === venue.deals.length
    ? venue.dealCategories
    : dealCategoriesForVenue(venue);
  venue.deals.forEach((deal, index) => {
    const category = categories[index] || inferDealCategory(deal);
    if (category === 'both') {
      groups.drinks.push(deal);
      groups.food.push(deal);
    } else if (groups[category]) groups[category].push(deal);
    else groups.info.push(deal);
  });
  return groups;
}

function dealCardsMarkup(deals, label) {
  return deals.map(deal => `<div class="deal-box"><span>${label}</span><strong>${escapeHtml(deal)}</strong></div>`).join('');
}

function venueSpecialsMarkup(venue) {
  const groups = categorizedVenueDeals(venue);
  const tabs = [];
  if (groups.drinks.length) tabs.push('drinks');
  if (groups.food.length) tabs.push('food');
  if (!tabs.length) {
    return `<div class="detail-specials-heading"><h3>What’s on special</h3></div>
      <div class="detail-deals">${dealCardsMarkup(venue.deals, 'Special')}</div>`;
  }
  const activeTab = tabs[0];
  const tabMarkup = tabs.map(tab => `<button class="special-tab${tab === activeTab ? ' active' : ''}" id="${venue.id}-${tab}-tab" type="button" role="tab" aria-selected="${tab === activeTab}" aria-controls="${venue.id}-${tab}-panel" tabindex="${tab === activeTab ? '0' : '-1'}" data-deal-tab="${tab}">${tab === 'drinks' ? 'Drinks' : 'Food'}</button>`).join('');
  const panelMarkup = tabs.map(tab => `<div class="detail-deals special-panel" id="${venue.id}-${tab}-panel" role="tabpanel" aria-labelledby="${venue.id}-${tab}-tab" data-deal-panel="${tab}"${tab === activeTab ? '' : ' hidden'}>${dealCardsMarkup(groups[tab], tab === 'drinks' ? 'Drink special' : 'Food special')}</div>`).join('');
  const infoMarkup = groups.info.length
    ? `<div class="detail-special-info">${dealCardsMarkup(groups.info, 'Details')}</div>`
    : '';
  return `<div class="detail-specials-heading">
      <h3>What’s on special</h3>
      <div class="special-tabs" role="tablist" aria-label="${escapeHtml(venue.name)} specials">${tabMarkup}</div>
    </div>
    ${panelMarkup}${infoMarkup}`;
}

function mapDatabaseContent(row) {
  const legacyDescription = 'Every listing below is sample data for this private preview. Confirm current offers with the venue before visiting.';
  return {
    announcementEnabled: row.announcement_enabled,
    announcementText: row.announcement_text,
    heroEyebrow: row.hero_eyebrow,
    heroTitleMain: row.hero_title_main,
    heroTitleAccent: row.hero_title_accent,
    heroDescription: row.hero_description,
    directoryTitle: row.directory_title,
    directoryDescription: row.directory_description === legacyDescription ? defaultSiteContent.directoryDescription : row.directory_description
  };
}

function clearAccountState() {
  state.user = null;
  state.userId = null;
  state.userEmail = null;
  state.role = 'member';
  state.votes = {};
  state.favorites = [];
  state.submissions = [];
  state.submissionsLoaded = false;
  state.submissionsLoading = false;
  state.pendingSubmissionId = null;
  activeOwnerPanel = 'favorites';
  elements.submissionCount.textContent = '0';
  elements.submissionQueue.innerHTML = '';
  elements.submissionQueue.hidden = true;
  elements.submissionEmpty.hidden = false;
  updateAccountUI();
  render();
}

async function runPendingAction() {
  let pending = state.pendingAction;
  if (!pending) {
    try { pending = JSON.parse(localStorage.getItem('sip-city-pending-action') || 'null'); }
    catch { pending = null; }
  }
  state.pendingAction = null;
  localStorage.removeItem('sip-city-pending-action');
  if (pending?.type === 'vote') await vote(pending.id, pending.direction);
  else if (pending?.type === 'favorite') await toggleFavorite(pending.id);
  else if (pending?.type === 'submit') openSubmit();
}

async function hydrateSession(session, announce = false) {
  if (!session?.user) {
    clearAccountState();
    return;
  }
  try {
    const [profile, votes, favorites] = await Promise.all([
      db.getProfile(session.user.id),
      db.getVotes(session.user.id),
      db.getFavorites(session.user.id)
    ]);
    const isNewSession = state.userId !== session.user.id;
    state.userId = session.user.id;
    state.userEmail = session.user.email || '';
    state.user = profile.username;
    state.role = profile.role;
    state.votes = Object.fromEntries(votes.map(item => [item.venue_id, item.value]));
    state.favorites = favorites.map(item => item.venue_id);
    updateAccountUI();
    render();
    if (elements.dashboardModal.open) renderDashboard();
    if (announce && isNewSession) showToast(`Welcome, @${state.user}`);
    await runPendingAction();
  } catch (error) {
    console.error(error);
    showToast('Could not load your account. Please try again.');
  }
}

function favoriteRowMarkup(venue) {
  return `<article class="favorite-row" data-dashboard-id="${venue.id}">
    <img src="${venueImage(venue)}" alt="" onerror="this.onerror=null;this.src='${placeholderVenueImage}'" />
    <div class="favorite-row-copy"><span>${venue.neighborhood} · ${venue.time}</span><strong>${venue.name}</strong><small>${venue.deals[0]}</small></div>
    <div class="favorite-row-actions">
      <button class="favorite-open" type="button" data-dashboard-view="${venue.id}">View</button>
      <button class="favorite-remove" type="button" data-dashboard-remove="${venue.id}" aria-label="Remove ${venue.name} from favorites">×</button>
    </div>
  </article>`;
}

function renderDashboard() {
  if (!state.user) return;
  const favorites = userFavorites().map(id => venueData.find(venue => venue.id === id)).filter(Boolean);
  const votes = Object.values(userVotes()).filter(Boolean).length;
  elements.dashboardTitle.textContent = `@${state.user}`;
  elements.dashboardAvatar.textContent = state.user[0];
  elements.favoriteCount.textContent = favorites.length;
  elements.voteCount.textContent = votes;
  elements.accountRole.textContent = isOwner() ? 'Owner' : 'Member';
  elements.ownerWorkspace.hidden = !isOwner();
  elements.dashboardFavorites.innerHTML = favorites.map(favoriteRowMarkup).join('');
  elements.dashboardFavorites.hidden = favorites.length === 0;
  elements.dashboardEmpty.hidden = favorites.length > 0;
  if (isOwner()) {
    showOwnerPanel(activeOwnerPanel);
    if (!state.submissionsLoaded) loadSubmissionQueue();
  }
  else elements.ownerPanels.forEach(panel => { panel.hidden = panel.dataset.ownerPanel !== 'favorites'; });
}

function openDashboard() {
  if (!state.user) return openAccount();
  renderDashboard();
  elements.dashboardModal.showModal();
}

async function vote(id, direction) {
  if (!state.user) {
    openAccount({ type: 'vote', id, direction });
    return false;
  }
  const nextVote = direction === 'up' ? 1 : -1;
  const votes = userVotes();
  const previousVote = votes[id] || 0;
  const savedVote = previousVote === nextVote ? 0 : nextVote;
  const venue = venueData.find(item => item.id === id);
  votes[id] = savedVote;
  if (venue) venue.score += savedVote - previousVote;
  render();
  if (elements.dashboardModal.open) renderDashboard();
  try {
    await db.setVote(state.userId, id, savedVote);
    showToast(savedVote === 0 ? 'Vote removed' : savedVote === 1 ? 'Upvote counted' : 'Feedback counted');
  } catch (error) {
    votes[id] = previousVote;
    if (venue) venue.score -= savedVote - previousVote;
    render();
    console.error(error);
    showToast('Your vote could not be saved.');
  }
  return true;
}

async function toggleFavorite(id) {
  if (!state.user) {
    openAccount({ type: 'favorite', id });
    return false;
  }
  const favorites = userFavorites();
  const index = favorites.indexOf(id);
  if (index >= 0) favorites.splice(index, 1);
  else favorites.unshift(id);
  render();
  if (elements.dashboardModal.open) renderDashboard();
  try {
    await db.setFavorite(state.userId, id, index < 0);
    showToast(index >= 0 ? 'Removed from your favorites' : 'Saved to your private list');
  } catch (error) {
    if (index >= 0) favorites.splice(index, 0, id);
    else favorites.splice(favorites.indexOf(id), 1);
    render();
    if (elements.dashboardModal.open) renderDashboard();
    console.error(error);
    showToast('Your favorite could not be saved.');
  }
  return true;
}

function showDetails(id) {
  const venue = venueData.find(v => v.id === id);
  if (!venue) return;
  const days = venue.days.map(d => d[0].toUpperCase() + d.slice(1,3)).join(', ');
  const scheduleText = venue.schedule?.length ? venue.time : `${days} · ${venue.time}`;
  const mapQuery = encodeURIComponent(`${venue.name}, ${venue.address}`);
  elements.detailContent.innerHTML = `
    <div class="detail-hero" style="background-image:url('${venueImage(venue)}')">
      <div><span class="kicker">${venue.neighborhood}</span><h2 id="detail-title">${venue.name}</h2></div>
    </div>
    <div class="detail-body">
      <div class="detail-meta">
        <div class="meta-box"><span>Happy hour</span><strong>${scheduleText}</strong></div>
        <div class="meta-box"><span>Community score</span><strong>${currentScore(venue)} points</strong></div>
        ${venue.vibe ? `<div class="meta-box"><span>Vibe</span><strong>${venue.vibe}</strong></div>` : ''}
        ${venue.parking ? `<div class="meta-box"><span>Parking</span><strong>${venue.parking}</strong></div>` : ''}
      </div>
      ${venueSpecialsMarkup(venue)}
      <div class="detail-note"><strong>Good to know:</strong> Specials can change. Confirm pricing and availability with the venue before visiting.</div>
      <div class="venue-links">
        ${venue.website ? `<a href="${venue.website}" target="_blank" rel="noreferrer">Venue link <span aria-hidden="true">↗</span></a>` : ''}
        <a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noreferrer">View map <span aria-hidden="true">↗</span></a>
      </div>
      <div class="detail-actions">
        <button class="button button-ghost detail-favorite ${isFavorite(venue.id) ? 'active' : ''}" data-detail-favorite="${venue.id}">${isFavorite(venue.id) ? 'Saved' : 'Save'} ${heartIcon()}</button>
        <button class="button button-dark" data-detail-vote="${venue.id}">Upvote this spot ${icon('up')}</button>
      </div>
    </div>`;
  elements.detailModal.showModal();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => elements.toast.classList.remove('show'), 1800);
}

function openSubmit() {
  elements.submitForm.hidden = false;
  elements.submitSuccess.hidden = true;
  const emailField = elements.submitForm.elements.namedItem('email');
  if (emailField && !emailField.value) emailField.value = state.userEmail || '';
  elements.submitModal.showModal();
}

elements.neighborhoods.addEventListener('click', event => {
  const button = event.target.closest('[data-neighborhood]');
  if (!button) return;
  state.neighborhood = button.dataset.neighborhood;
  renderNeighborhoods();
  render();
});

elements.grid.addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) return toggleFavorite(favoriteButton.dataset.favorite);
  const voteButton = event.target.closest('[data-vote]');
  if (voteButton) return vote(voteButton.dataset.id, voteButton.dataset.vote);
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) showDetails(viewButton.dataset.view);
});

elements.detailContent.addEventListener('click', async event => {
  const dealTab = event.target.closest('[data-deal-tab]');
  if (dealTab) {
    elements.detailContent.querySelectorAll('[data-deal-tab]').forEach(tab => {
      const active = tab === dealTab;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    elements.detailContent.querySelectorAll('[data-deal-panel]').forEach(panel => {
      panel.hidden = panel.dataset.dealPanel !== dealTab.dataset.dealTab;
    });
    return;
  }
  const favoriteButton = event.target.closest('[data-detail-favorite]');
  if (favoriteButton) {
    const id = favoriteButton.dataset.detailFavorite;
    if (await toggleFavorite(id)) {
      const saved = isFavorite(id);
      favoriteButton.classList.toggle('active', saved);
      favoriteButton.innerHTML = `${saved ? 'Saved' : 'Save'} ${heartIcon()}`;
    }
    return;
  }
  const button = event.target.closest('[data-detail-vote]');
  if (!button) return;
  if (await vote(button.dataset.detailVote, 'up')) elements.detailModal.close();
});

elements.detailContent.addEventListener('keydown', event => {
  const currentTab = event.target.closest('[data-deal-tab]');
  if (!currentTab || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const tabs = [...elements.detailContent.querySelectorAll('[data-deal-tab]')];
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  const nextTab = tabs[(tabs.indexOf(currentTab) + direction + tabs.length) % tabs.length];
  event.preventDefault();
  nextTab.click();
  nextTab.focus();
});

elements.search.addEventListener('input', event => { state.query = event.target.value; elements.heroSearch.value = state.query; render(); });
elements.heroSearch.addEventListener('input', event => { state.query = event.target.value; elements.search.value = state.query; render(); });
elements.heroSearch.addEventListener('keydown', event => {
  if (event.key === 'Enter') document.querySelector('#listings').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    elements.heroSearch.focus();
  }
});
elements.day.addEventListener('change', event => { state.day = event.target.value; render(); });
elements.sort.addEventListener('change', event => {
  state.sort = event.target.value;
  if (state.sort === 'now') {
    state.day = 'today';
    elements.day.value = 'today';
  }
  render();
});
document.querySelector('#clear-filters').addEventListener('click', resetFilters);
document.querySelector('#empty-clear').addEventListener('click', resetFilters);
elements.accountButton.addEventListener('click', () => state.user ? openDashboard() : openAccount());
document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  showToast(`${nextTheme[0].toUpperCase() + nextTheme.slice(1)} mode on`);
});
document.querySelector('[data-hero-carousel-toggle]').addEventListener('click', event => {
  const heroArt = event.currentTarget.closest('.hero-art');
  const isPaused = heroArt.classList.toggle('is-paused');
  event.currentTarget.setAttribute('aria-pressed', String(isPaused));
  event.currentTarget.setAttribute('aria-label', isPaused ? 'Play featured photos' : 'Pause featured photos');
});
document.querySelectorAll('[data-open-submit]').forEach(button => button.addEventListener('click', openSubmit));
document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));

elements.accountForm.addEventListener('submit', async event => {
  event.preventDefault();
  const username = elements.usernameInput.value.trim().toLowerCase();
  const email = elements.accountEmailInput.value.trim().toLowerCase();
  if (!/^[a-z0-9_]{3,20}$/.test(username)) {
    elements.usernameError.textContent = 'Use 3–20 letters, numbers, or underscores.';
    elements.usernameError.hidden = false;
    return;
  }
  if (!email || !elements.accountEmailInput.validity.valid) {
    elements.usernameError.textContent = 'Enter a valid email address.';
    elements.usernameError.hidden = false;
    return;
  }
  elements.usernameError.hidden = true;
  elements.accountSubmit.disabled = true;
  elements.accountSubmit.textContent = 'Sending link…';
  if (state.pendingAction) localStorage.setItem('sip-city-pending-action', JSON.stringify(state.pendingAction));
  try {
    await db.sendMagicLink(email, username);
    elements.accountForm.hidden = true;
    elements.accountEmailSent.hidden = false;
  } catch (error) {
    console.error(error);
    elements.usernameError.textContent = error.message || 'The sign-in link could not be sent. Please try again.';
    elements.usernameError.hidden = false;
  } finally {
    elements.accountSubmit.disabled = false;
    elements.accountSubmit.innerHTML = 'Email my sign-in link <span aria-hidden="true">→</span>';
  }
});

elements.dashboardFavorites.addEventListener('click', event => {
  const removeButton = event.target.closest('[data-dashboard-remove]');
  if (removeButton) return toggleFavorite(removeButton.dataset.dashboardRemove);
  const viewButton = event.target.closest('[data-dashboard-view]');
  if (viewButton) {
    elements.dashboardModal.close();
    showDetails(viewButton.dataset.dashboardView);
  }
});

elements.signOut.addEventListener('click', async () => {
  const username = state.user;
  try {
    await db.signOut();
    clearAccountState();
    elements.dashboardModal.close();
    showToast(`Signed out of @${username}`);
  } catch (error) {
    console.error(error);
    showToast('Could not sign out. Please try again.');
  }
});

document.querySelector('#dismiss-announcement').addEventListener('click', () => {
  elements.announcementBar.hidden = true;
});

elements.ownerTabs.forEach(tab => tab.addEventListener('click', () => {
  if (isOwner()) showOwnerPanel(tab.dataset.ownerTab);
}));

elements.refreshSubmissions.addEventListener('click', () => loadSubmissionQueue(true));

elements.submissionQueue.addEventListener('click', async event => {
  const button = event.target.closest('[data-submission-action]');
  if (!button || !isOwner()) return;
  const submission = state.submissions.find(item => item.id === button.dataset.submissionId);
  if (!submission) return;
  const action = button.dataset.submissionAction;
  if (action === 'build') {
    buildListingFromSubmission(submission);
    return;
  }
  button.disabled = true;
  try {
    if (action === 'attachment') {
      const signedUrl = await db.getSubmissionFileUrl(submission.attachment_path);
      window.open(signedUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (action === 'reject') {
      const notes = elements.submissionQueue.querySelector(`[data-submission-notes="${submission.id}"]`)?.value.trim() || '';
      const updated = await db.updateSubmissionStatus(submission.id, 'rejected', notes, state.userId);
      replaceSubmission(updated);
      showToast(`${submission.venue_name} rejected`);
      return;
    }
    if (action === 'reopen') {
      const updated = await db.updateSubmissionStatus(submission.id, 'pending', '', state.userId);
      replaceSubmission(updated);
      showToast(`${submission.venue_name} returned to pending`);
    }
  } catch (error) {
    console.error(error);
    showToast(action === 'attachment' ? 'The attachment could not be opened.' : 'The review status could not be saved.');
  } finally {
    button.disabled = false;
  }
});

elements.homepageEditor.addEventListener('submit', async event => {
  event.preventDefault();
  if (!isOwner()) return;
  const fields = elements.homepageEditor.elements;
  const previousContent = { ...siteContent };
  const nextContent = {
    announcementEnabled: fields.namedItem('announcementEnabled').checked,
    announcementText: fields.namedItem('announcementText').value.trim(),
    heroEyebrow: fields.namedItem('heroEyebrow').value.trim(),
    heroTitleMain: fields.namedItem('heroTitleMain').value.trim(),
    heroTitleAccent: fields.namedItem('heroTitleAccent').value.trim(),
    heroDescription: fields.namedItem('heroDescription').value.trim(),
    directoryTitle: fields.namedItem('directoryTitle').value.trim(),
    directoryDescription: fields.namedItem('directoryDescription').value.trim()
  };
  siteContent = nextContent;
  applySiteContent();
  elements.homepageSaveState.textContent = 'Saving…';
  try {
    await db.updateSiteContent(nextContent, state.userId);
    elements.homepageSaveState.textContent = 'Saved to Supabase';
    showToast('Homepage changes saved');
  } catch (error) {
    siteContent = previousContent;
    applySiteContent();
    console.error(error);
    elements.homepageSaveState.textContent = 'Save failed';
    showToast('Homepage changes could not be saved.');
  }
});

document.querySelector('#reset-homepage').addEventListener('click', async () => {
  if (!isOwner()) return;
  fillHomepageEditor();
  siteContent = { ...defaultSiteContent };
  fillHomepageEditor();
  elements.homepageEditor.requestSubmit();
});

elements.listingSelect.addEventListener('change', event => {
  state.pendingSubmissionId = null;
  fillListingEditor(event.target.value);
});
elements.newListing.addEventListener('click', () => {
  state.pendingSubmissionId = null;
  fillListingEditor('__new');
});
elements.deleteListing.addEventListener('click', () => {
  if (!isOwner()) return;
  const venue = venueData.find(item => item.id === elements.listingSelect.value);
  if (!venue) return;
  state.pendingDeleteVenueId = venue.id;
  elements.deleteListingName.textContent = venue.name;
  elements.confirmDeleteListing.disabled = false;
  elements.confirmDeleteListing.textContent = 'Delete listing';
  elements.deleteListingModal.showModal();
});

elements.confirmDeleteListing.addEventListener('click', async () => {
  if (!isOwner()) return;
  const venueId = state.pendingDeleteVenueId;
  const venueIndex = venueData.findIndex(item => item.id === venueId);
  if (venueIndex < 0) {
    elements.deleteListingModal.close();
    return;
  }
  const venueName = venueData[venueIndex].name;
  elements.confirmDeleteListing.disabled = true;
  elements.confirmDeleteListing.textContent = 'Deleting…';
  try {
    await db.deleteVenue(venueId);
    venueData.splice(venueIndex, 1);
    delete state.votes[venueId];
    state.favorites = state.favorites.filter(id => id !== venueId);
    state.pendingDeleteVenueId = null;
    state.pendingSubmissionId = null;
    refreshListingSelect();
    renderNeighborhoods();
    render();
    refreshHeroCarousel();
    renderDashboard();
    elements.deleteListingModal.close();
    elements.listingSaveState.classList.add('saved');
    elements.listingSaveState.textContent = `✓ ${venueName} was deleted`;
    showToast(`${venueName} deleted`);
  } catch (error) {
    console.error(error);
    elements.confirmDeleteListing.disabled = false;
    elements.confirmDeleteListing.textContent = 'Delete listing';
    showToast('The listing could not be deleted. Please try again.');
  }
});

elements.listingEditor.addEventListener('click', event => {
  const tab = event.target.closest('[data-editor-deal-tab]');
  if (tab) activateListingDealTab(tab.dataset.editorDealTab);
});

elements.listingEditor.addEventListener('keydown', event => {
  const currentTab = event.target.closest('[data-editor-deal-tab]');
  if (!currentTab || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const tabs = [...elements.listingEditor.querySelectorAll('[data-editor-deal-tab]')];
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  const nextTab = tabs[(tabs.indexOf(currentTab) + direction + tabs.length) % tabs.length];
  event.preventDefault();
  activateListingDealTab(nextTab.dataset.editorDealTab);
  nextTab.focus();
});

function dealLinesFromField(field) {
  const seen = new Set();
  return field.value.split(/\n/).map(line => line.trim()).filter(line => {
    const key = line.toLowerCase();
    if (!line || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function listingDealData(fields) {
  const drinks = dealLinesFromField(fields.namedItem('drinkDeals'));
  const food = dealLinesFromField(fields.namedItem('foodDeals'));
  const info = dealLinesFromField(fields.namedItem('infoDeals'));
  const foodKeys = new Set(food.map(deal => deal.toLowerCase()));
  const sharedKeys = new Set();
  const deals = [];
  const dealCategories = [];
  drinks.forEach(deal => {
    const key = deal.toLowerCase();
    const category = foodKeys.has(key) ? 'both' : 'drinks';
    if (category === 'both') sharedKeys.add(key);
    deals.push(deal);
    dealCategories.push(category);
  });
  food.forEach(deal => {
    if (sharedKeys.has(deal.toLowerCase())) return;
    deals.push(deal);
    dealCategories.push('food');
  });
  info.forEach(deal => {
    deals.push(deal);
    dealCategories.push('info');
  });
  return { deals, dealCategories, drinks, food };
}

function slugifyVenueName(name) {
  const base = name.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 55) || 'new-venue';
  if (!venueData.some(venue => venue.id === base)) return base;
  return `${base}-${Date.now().toString().slice(-6)}`;
}

elements.listingEditor.addEventListener('submit', async event => {
  event.preventDefault();
  if (!isOwner()) return;
  const fields = elements.listingEditor.elements;
  elements.listingSaveState.classList.remove('saved', 'error');
  const selectedId = fields.namedItem('listingId').value;
  const isNew = selectedId === '__new';
  const submissionId = isNew ? state.pendingSubmissionId : null;
  const name = fields.namedItem('name').value.trim();
  const dealData = listingDealData(fields);
  const days = fields.namedItem('days').value.split(',').map(day => day.trim().toLowerCase()).filter(Boolean);
  const validDays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  if (!days.length || days.some(day => !validDays.includes(day))) {
    elements.listingSaveState.classList.add('error');
    elements.listingSaveState.textContent = 'Use full weekday names separated by commas';
    return;
  }
  if (!dealData.drinks.length && !dealData.food.length) {
    elements.listingSaveState.classList.add('error');
    elements.listingSaveState.textContent = 'Add at least one drink or food special';
    activateListingDealTab('drinks');
    return;
  }
  const existingVenue = venueData.find(item => item.id === selectedId);
  const venue = {
    id: isNew ? slugifyVenueName(name) : selectedId,
    name: fields.namedItem('name').value.trim(),
    neighborhood: fields.namedItem('neighborhood').value.trim(),
    address: fields.namedItem('address').value.trim(),
    website: fields.namedItem('website').value.trim(),
    image: fields.namedItem('image').value.trim(),
    days,
    start: Number(fields.namedItem('start').value),
    time: fields.namedItem('time').value.trim(),
    price: fields.namedItem('price').value,
    baseScore: existingVenue?.baseScore ?? existingVenue?.score ?? 0,
    score: existingVenue?.score ?? 0,
    deals: dealData.deals,
    dealCategories: dealData.dealCategories,
    tags: fields.namedItem('tags').value.split(',').map(tag => tag.trim()).filter(Boolean),
    vibe: fields.namedItem('vibe').value.trim(),
    parking: fields.namedItem('parking').value.trim(),
    schedule: existingVenue?.schedule || [],
    published: fields.namedItem('published').checked
  };
  elements.listingSaveState.classList.remove('saved', 'error');
  elements.listingSaveState.textContent = 'Saving…';
  elements.listingSubmit.disabled = true;
  elements.listingSubmit.textContent = 'Saving…';
  try {
    const savedRow = await db.saveVenue(venue, isNew);
    const savedVenue = mapDatabaseVenue(savedRow, { [venue.id]: venue.score });
    if (isNew) venueData.push(savedVenue);
    else Object.assign(existingVenue, savedVenue);
    refreshListingSelect(savedVenue.id);
    renderNeighborhoods();
    render();
    refreshHeroCarousel();
    if (submissionId) {
      try {
        const updatedSubmission = await db.updateSubmissionStatus(
          submissionId,
          'approved',
          `Published as ${savedVenue.name}`,
          state.userId
        );
        replaceSubmission(updatedSubmission);
        state.pendingSubmissionId = null;
      } catch (reviewError) {
        console.error(reviewError);
        elements.listingSaveState.classList.add('error');
        elements.listingSaveState.textContent = 'Listing saved. Submission status still needs review.';
        elements.listingSubmit.disabled = false;
        elements.listingSubmit.textContent = 'Save listing';
        showToast(`${venue.name} saved, but the submission still needs approval`);
        return;
      }
    }
    elements.listingSaveState.classList.add('saved');
    elements.listingSaveState.textContent = '✓ Changes saved successfully';
    elements.listingSubmit.classList.add('is-saved');
    elements.listingSubmit.textContent = 'Saved ✓';
    const successMessage = submissionId ? `${venue.name} published and submission approved` : `${venue.name} ${isNew ? 'added' : 'updated'}`;
    showToast(successMessage);
    window.setTimeout(() => {
      if (elements.dashboardModal.open) elements.dashboardModal.close();
      elements.listingSubmit.disabled = false;
      elements.listingSubmit.classList.remove('is-saved');
      elements.listingSubmit.textContent = 'Save listing';
    }, 700);
  } catch (error) {
    console.error(error);
    elements.listingSaveState.classList.add('error');
    elements.listingSaveState.textContent = error.message || 'Save failed';
    elements.listingSubmit.disabled = false;
    elements.listingSubmit.textContent = 'Save listing';
    showToast('The listing could not be saved.');
  }
});

document.querySelector('#reset-listing').addEventListener('click', () => {
  if (!isOwner()) return;
  const id = elements.listingSelect.value;
  if (id === '__new' && state.pendingSubmissionId) {
    const submission = state.submissions.find(item => item.id === state.pendingSubmissionId);
    if (submission) {
      buildListingFromSubmission(submission);
      elements.listingSaveState.textContent = `Submission details restored for ${submission.venue_name}.`;
      return;
    }
  }
  fillListingEditor(id);
  elements.listingSaveState.textContent = id === '__new' ? 'New listing cleared' : 'Unsaved changes cleared';
});

elements.uploadInput.addEventListener('change', event => {
  const file = event.target.files?.[0];
  if (file) selectAttachment(file);
});
['dragenter', 'dragover'].forEach(type => elements.uploadBox.addEventListener(type, event => {
  event.preventDefault();
  elements.uploadBox.classList.add('drag-active');
}));
['dragleave', 'drop'].forEach(type => elements.uploadBox.addEventListener(type, event => {
  event.preventDefault();
  elements.uploadBox.classList.remove('drag-active');
}));
elements.uploadBox.addEventListener('drop', event => {
  const file = event.dataTransfer?.files?.[0];
  if (file) selectAttachment(file);
});
elements.removeUpload.addEventListener('click', resetAttachment);

elements.submitForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (!state.user) return openAccount({ type: 'submit' });
  const formData = new FormData(elements.submitForm);
  const submitButton = elements.submitForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = selectedAttachment ? 'Uploading and saving…' : 'Saving…';
  let attachmentPath = null;
  try {
    if (selectedAttachment) attachmentPath = await db.uploadSubmissionFile(state.userId, selectedAttachment);
    await db.createSubmission({
      submitted_by: state.userId,
      venue_name: formData.get('venue').trim(),
      neighborhood: formData.get('neighborhood'),
      details: formData.get('details').trim(),
      source_url: formData.get('source')?.trim() || null,
      contact_email: formData.get('email')?.trim() || state.userEmail || null,
      attachment_path: attachmentPath,
      attachment_name: selectedAttachment?.name || null,
      attachment_type: selectedAttachment?.type || null,
      attachment_size: selectedAttachment?.size || null,
      status: 'pending'
    });
    elements.submitForm.reset();
    resetAttachment();
    elements.submitForm.hidden = true;
    elements.submitSuccess.hidden = false;
  } catch (error) {
    if (attachmentPath) await db.deleteSubmissionFile(attachmentPath).catch(() => {});
    console.error(error);
    elements.uploadError.textContent = error.message || 'Your submission could not be saved. Please try again.';
    elements.uploadError.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send for review <span aria-hidden="true">→</span>';
  }
});

async function loadDatabase() {
  if (!db) {
    showToast('Database connection unavailable. Showing preview data.');
    return;
  }
  try {
    const [rows, contentRow, scoreRows] = await Promise.all([
      db.getVenues(),
      db.getSiteContent(),
      db.getVenueScores()
    ]);
    const scoreById = Object.fromEntries(scoreRows.map(row => [row.venue_id, row.score]));
    if (rows.length) {
      venueData.splice(0, venueData.length, ...rows.map(row => mapDatabaseVenue(row, scoreById)));
      refreshHeroCarousel();
    }
    if (contentRow) siteContent = mapDatabaseContent(contentRow);
    applySiteContent();
    refreshListingSelect();
    renderNeighborhoods();
    render();
    const session = await db.getSession();
    await hydrateSession(session);
    db.onAuthStateChange(sessionValue => window.setTimeout(() => hydrateSession(sessionValue, true), 0));
  } catch (error) {
    console.error(error);
    showToast('Live data could not load. Showing preview data.');
  }
}

refreshListingSelect();
setTheme(document.documentElement.dataset.theme || 'light');
applySiteContent();
updateAccountUI();
renderNeighborhoods();
render();
loadDatabase();
