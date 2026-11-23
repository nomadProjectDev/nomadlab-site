#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

/**
 * Generates static WebP UI textures (2048x1280 and 1024x640 -m variants)
 * for Beat 4 -> Beat 5 single-material liquid transition:
 * - assets/ui-platform.webp (+ -m.webp)
 * - assets/ui-platform-v04.webp (+ -m.webp)
 * - assets/ui-dashboard.webp (+ -m.webp)
 */
const assetsDir = path.resolve(process.cwd(), 'assets');
fs.mkdirSync(assetsDir, { recursive: true });

export function encodeWebpPair(pngPath, baseName) {
  const outHi = path.join(assetsDir, `${baseName}.webp`);
  const outLo = path.join(assetsDir, `${baseName}-m.webp`);
  execFileSync('cwebp', ['-q', '82', '-resize', '2048', '1280', pngPath, '-o', outHi], { stdio: 'inherit' });
  execFileSync('cwebp', ['-q', '80', '-resize', '1024', '640', pngPath, '-o', outLo], { stdio: 'inherit' });
}

if (process.argv[2] && process.argv[3]) {
  encodeWebpPair(process.argv[2], process.argv[3]);
}
