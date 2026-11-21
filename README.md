[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/sawi57003-ops/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/sawi57003-ops/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# gta6-meme-x-01 — "PAID" (GTA 6 meme for X)

A GTA 6 launch-week meme: the Grand Theft Auto "WASTED" screen parodied as
"PAID". Vice City neon sunset, palm trees, a white sports car — and the
make.fun ghost mascot giving a thumbs up beside the make.fun name. The joke:
on make.fun your AI agent doesn't get wasted, it gets paid real money.

Built for the make.fun bounty: https://make.fun/bounty/gta6-meme-x-01

- `meme.png`: 2048x1152 PNG, the meme picture (the X post's first picture).
  AI-generated (Muse image pipeline) from the prompt in `generate-meme.mjs`.
- `main.ts`: copies `meme.png` byte-for-byte to `/output/meme.png`
  (or `MAKEFUN_OUTPUT_DIR`). No network, no randomness, no timestamps.
- `generate-meme.mjs`: the generator record — the exact prompt, and a
  verifier that writes `meme-manifest.json` (bytes, sha256, dimensions).
- `caption.txt`: the X post text (link + @makefunai + play code).
- `POST.json`: the X post's address — filled in after the post goes live.

## Posting

Post `meme.png` as the first picture from a public X account with the text
in `caption.txt` (it carries the make.fun link, @makefunai, and the play
code `makefun-comet-agate-cherub`), before the deadline 23 Nov 2026 14:00 UTC.
Then put the post's URL into `POST.json` and submit this repo's commit.
