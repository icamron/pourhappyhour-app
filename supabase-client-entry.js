import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://iupzfndxixcntbqvdrrd.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_LB-J22qaFStOL2y8RkLj8g_J81Djl83';

const client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

function unwrap(result) {
  if (result.error) throw result.error;
  return result.data;
}

window.SipCityDb = {
  async getSession() {
    const data = unwrap(await client.auth.getSession());
    return data.session;
  },

  onAuthStateChange(callback) {
    return client.auth.onAuthStateChange((_event, session) => callback(session));
  },

  async signInAnonymously() {
    const data = unwrap(await client.auth.signInAnonymously());
    return data.session;
  },

  async sendMagicLink(email, username) {
    return unwrap(await client.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}${window.location.pathname}`,
        data: { username }
      }
    }));
  },

  async signOut() {
    return unwrap(await client.auth.signOut());
  },

  async getVenues() {
    return unwrap(await client.from('venues').select('*').order('name'));
  },

  async getSiteContent() {
    return unwrap(await client.from('site_content').select('*').eq('id', 'home').single());
  },

  async getVenueScores() {
    return unwrap(await client.rpc('get_venue_scores'));
  },

  async getProfile(userId) {
    return unwrap(await client.from('profiles').select('id, username, role').eq('id', userId).single());
  },

  async getVotes(userId) {
    return unwrap(await client.from('votes').select('venue_id, value').eq('user_id', userId));
  },

  async setVote(userId, venueId, value) {
    if (value === 0) {
      return unwrap(await client.from('votes').delete().eq('user_id', userId).eq('venue_id', venueId));
    }
    return unwrap(await client.from('votes').upsert({
      user_id: userId,
      venue_id: venueId,
      value
    }, { onConflict: 'user_id,venue_id' }));
  },

  async getFavorites(userId) {
    return unwrap(await client.from('favorites').select('venue_id').eq('user_id', userId).order('created_at', { ascending: false }));
  },

  async setFavorite(userId, venueId, saved) {
    if (!saved) {
      return unwrap(await client.from('favorites').delete().eq('user_id', userId).eq('venue_id', venueId));
    }
    return unwrap(await client.from('favorites').insert({ user_id: userId, venue_id: venueId }));
  },

  async updateSiteContent(content, userId) {
    return unwrap(await client.from('site_content').update({
      announcement_enabled: content.announcementEnabled,
      announcement_text: content.announcementText,
      hero_eyebrow: content.heroEyebrow,
      hero_title_main: content.heroTitleMain,
      hero_title_accent: content.heroTitleAccent,
      hero_description: content.heroDescription,
      directory_title: content.directoryTitle,
      directory_description: content.directoryDescription,
      updated_by: userId
    }).eq('id', 'home').select('*').single());
  },

  async saveVenue(venue, isNew) {
    const record = {
      id: venue.id,
      name: venue.name,
      neighborhood: venue.neighborhood,
      address: venue.address,
      website: venue.website || null,
      image_url: venue.image,
      days: venue.days,
      start_hour: venue.start,
      time_label: venue.time,
      price_level: venue.price,
      base_score: venue.baseScore ?? venue.score ?? 0,
      deals: venue.deals.map((text, index) => JSON.stringify({
        text,
        category: venue.dealCategories?.[index] || 'info'
      })),
      tags: venue.tags,
      vibe: venue.vibe,
      parking: venue.parking,
      schedule: venue.schedule || [],
      daily_specials: venue.dailySpecials || [],
      published: venue.published !== false
    };
    const query = isNew
      ? client.from('venues').insert(record)
      : client.from('venues').update(record).eq('id', venue.id);
    return unwrap(await query.select('*').single());
  },

  async deleteVenue(venueId) {
    return unwrap(await client.from('venues').delete().eq('id', venueId).select('id').single());
  },

  async uploadSubmissionFile(userId, file) {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const path = `${userId}/${crypto.randomUUID()}/${safeName}`;
    const data = unwrap(await client.storage.from('submission-files').upload(path, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type
    }));
    return data.path;
  },

  async deleteSubmissionFile(path) {
    return unwrap(await client.storage.from('submission-files').remove([path]));
  },

  async createSubmission(submission) {
    return unwrap(await client.from('submissions').insert(submission).select('id, status').single());
  },

  async getSubmissions() {
    return unwrap(await client.from('submissions').select('*').order('created_at', { ascending: false }));
  },

  async updateSubmissionStatus(submissionId, status, reviewNotes, reviewerId) {
    const review = status === 'pending'
      ? { status, review_notes: null, reviewed_by: null, reviewed_at: null }
      : {
          status,
          review_notes: reviewNotes || null,
          reviewed_by: reviewerId,
          reviewed_at: new Date().toISOString()
        };
    return unwrap(await client.from('submissions').update(review).eq('id', submissionId).select('*').single());
  },

  async getSubmissionFileUrl(path) {
    const data = unwrap(await client.storage.from('submission-files').createSignedUrl(path, 300));
    return data.signedUrl;
  }
};
