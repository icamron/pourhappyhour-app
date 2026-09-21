# Pour Happy

A mobile-friendly Orlando happy-hour directory backed by Supabase.

## Features

- Search, day, neighborhood, and sort filters
- Venue detail modals with separate drink and food specials
- Optional day-specific specials with a highlighted Today view
- Supabase accounts, private favorites, and voting
- Owner dashboard, quick editing, and a moderated submission queue
- Responsive mobile layout and accessible dialog interactions
- Light and dark modes
- Multi-window schedules for accurate Happening Now results

## Run locally

```bash
npm install
npm test
npm run build
```

Serve this folder with any static server, such as `python3 -m http.server 4173`.

## Supabase

Run `supabase/setup.sql` once in Supabase Dashboard > SQL Editor before using accounts, favorites, votes, submissions, or owner editing.

For an existing Pour Happy database, run `supabase/add-daily-specials.sql` once. It adds the optional `daily_specials` field and converts Lamp & Shade into the first weekday-special example. Listings without daily specials continue using the simpler Drinks and Food editor.

### Reviewed four-area venue import

`supabase/import-goldenbuzz-areas.sql` adds 43 merged venues from Altamonte, Baldwin Park, Maitland, and Winter Park. It is idempotent, so it can be run again without deleting votes or favorites.

The supporting reviewed snapshot is in `data/goldenbuzz-areas-2026-09-19.json`. GoldenBuzz's terms prohibit reproducing its text, graphics, and images without permission, so the import contains normalized factual fields only. Source photos and menu artwork are not copied. Listings without an approved photo use Pourh's neutral placeholder.

### Reviewed Vesper venue import

`supabase/import-vesper-daily-specials.sql` adds 19 new venues from Downtown Orlando, Mills, Lake Eola, Winter Park, and Altamonte after excluding seven listings already in Pour Happy. College Park, Maitland, and South Downtown did not return matching venues on the source page during the September 21, 2026 review.

The import uses the same readable schedule format as the rest of the app, including labels such as `Mon - Fri 3PM - 6PM`. Fourteen reviewed interior or venue photos use direct high-resolution image URLs, matching the existing listing workflow. Listings without a confidently matched, clear photo keep the standard placeholder.

## Anonymous voting

Voting can use a hidden Supabase anonymous session, so visitors can upvote or downvote without creating a visible account. Enable **Anonymous Sign-Ins** in Supabase Authentication settings, then run `supabase/enable-anonymous-voting.sql`. The existing `(user_id, venue_id)` primary key keeps one active vote per visitor and venue. Favorites and the personal dashboard remain available only to regular email accounts.
