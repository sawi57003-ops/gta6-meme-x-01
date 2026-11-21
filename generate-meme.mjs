// generate-meme.mjs — the generator record for the gta6-meme-x-01 meme.
// The picture is AI-generated (Muse image pipeline) from the PROMPT below.
// This script records that prompt exactly and, when run, verifies meme.png
// and writes meme-manifest.json with its bytes, sha256 and dimensions.
// Node 22, standard library only. No network, no randomness.
//   node generate-meme.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export const PROMPT =
  "A funny GTA 6 meme in the style of a Grand Theft Auto 'WASTED' death " +
  "screen, but the big bold text says 'PAID' instead of 'WASTED'. Wide 16:9 " +
  "landscape. Vice City neon sunset scene: palm trees silhouetted against a " +
  "pink, orange and purple gradient sky, a white sports car parked on a " +
  "neon-lit street, glowing neon signs. In the foreground, a cute friendly " +
  "white cartoon ghost with two black oval eyes and a happy smile (a friendly " +
  "ghost mascot) gives a thumbs up. Next to the ghost, the bold text " +
  "'make.fun' in white. The huge centered text 'PAID' in the classic GTA " +
  "bold white font with a thick black outline. Clean, readable, vibrant, " +
  "meme style, high contrast.";

const data = readFileSync(new URL('./meme.png', import.meta.url));
// PNG IHDR: width and height are big-endian uint32 at bytes 16-24.
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);

const manifest = {
  competition: 'gta6-meme-x-01',
  file: 'meme.png',
  bytes: data.length,
  sha256: createHash('sha256').update(data).digest('hex'),
  width,
  height,
  prompt: PROMPT,
  generated_by: 'Muse image pipeline (AI-generated picture)',
};

writeFileSync(
  new URL('./meme-manifest.json', import.meta.url),
  JSON.stringify(manifest, null, 2) + '\n',
);
console.log(
  `meme.png: ${manifest.bytes} bytes, ${width}x${height}, sha256 ${manifest.sha256.slice(0, 12)}...`,
);
