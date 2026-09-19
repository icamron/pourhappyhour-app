# Sip City Orlando

GitHub- and Vercel-ready source for the Orlando happy-hour app.

## Deploy with GitHub and Vercel

1. Create a new GitHub repository.
2. Upload every file and folder from this package to the repository root.
3. In Vercel, choose **Add New > Project** and import the GitHub repository.
4. Keep the build settings supplied by `vercel.json`:
   - Build command: `npm run build`
   - Install command: `npm ci`
   - Output directory: `dist`
5. Deploy the project.

No Vercel environment variables are required for this version. The app uses the existing Supabase project through its public browser-safe publishable key.

## Keep the deployment private

Before sharing the Vercel URL, open the project in Vercel and go to **Settings > Deployment Protection**. Choose **All Deployments** with **Vercel Authentication** so only authorized Vercel users can open it.

## Finish Supabase authentication

After Vercel gives you the final URL:

1. Open Supabase.
2. Go to **Authentication > URL Configuration**.
3. Set the Site URL to the production Vercel URL.
4. Add the Vercel URL to Redirect URLs. Add the custom domain too if you connect one later.

This allows account sign-in links to return users to the Vercel version of the app.

## Main files

- `index.html`: page structure
- `styles.css`: light mode, dark mode, mobile design, and carousel styles
- `app.js`: listings, filters, votes, favorites, dashboard, and owner tools
- `supabase-client-entry.js`: Supabase connection and database actions
- `build.mjs`: creates the Vercel-ready `dist` folder
- `supabase/`: database schema and seed/update SQL
- `tests/`: core interaction tests

## Test locally

```bash
npm ci
npm test
npm run build
```
