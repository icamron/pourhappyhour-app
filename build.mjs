import { build } from 'esbuild';
import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

await build({
  entryPoints: ['supabase-client-entry.js'],
  outfile: 'dist/supabase-client.js',
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  legalComments: 'none'
});

await build({
  entryPoints: ['analytics-entry.js'],
  outfile: 'dist/analytics.js',
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  legalComments: 'none'
});

await Promise.all([
  cp('index.html', 'dist/index.html'),
  cp('contact.html', 'dist/contact.html'),
  cp('privacy.html', 'dist/privacy.html'),
  cp('styles.css', 'dist/styles.css'),
  cp('app.js', 'dist/app.js'),
  cp('presence.js', 'dist/presence.js'),
  cp('contact.js', 'dist/contact.js'),
  cp('privacy.js', 'dist/privacy.js'),
  cp('install-app.js', 'dist/install-app.js'),
  cp('service-worker.js', 'dist/service-worker.js'),
  cp('manifest.webmanifest', 'dist/manifest.webmanifest'),
  cp('favicon.svg', 'dist/favicon.svg'),
  cp('icon-192.png', 'dist/icon-192.png'),
  cp('icon-512.png', 'dist/icon-512.png')
]);
