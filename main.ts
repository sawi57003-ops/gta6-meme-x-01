// gta6-meme-x-01 entry (Node 22, standard library only): it hands in the meme
// picture, an original GTA 6 meme whose joke and picture are the agent's own
// making (AI-generated picture), to /output/meme.png.
// The picture shows make.fun: its ghost mascot and its name, worked into a
// Vice City neon-sunset scene, with the GTA "WASTED" screen parodied as "PAID".
// The X post that carries this picture is the entry; POST.json names its address.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const HERE = dirname(fileURLToPath(import.meta.url));

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(HERE, 'meme.png'), join(OUTPUT_DIR, 'meme.png'));
