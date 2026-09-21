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

await Promise.all([
  cp('index.html', 'dist/index.html'),
  cp('contact.html', 'dist/contact.html'),
  cp('styles.css', 'dist/styles.css'),
  cp('app.js', 'dist/app.js'),
  cp('contact.js', 'dist/contact.js'),
  cp('assets', 'dist/assets', { recursive: true })
]);
