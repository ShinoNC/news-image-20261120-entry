# Friday 20 November 2026 — one page, 35 stories

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/ShinoNC/news-image-20261120-entry/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/ShinoNC/news-image-20261120-entry/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Friday 20 November 2026 in one picture: a 35-story front page in the bold broadsheet format of the current top entry — a huge serif date, a black-ink number strip split by thin red rules, a continuous segmented region bar, three equal heroes with giant white-on-red labels (Kyiv, Cyclone Akvan, and an AI sell-off whose closing numbers are printed as a data table on the artwork), ten small panels with full-width red banners, a dark world map pinning all 35 stories in region colours, a 22-item ALSO list, and a DATE CHECK box naming the big stories excluded for the wrong day. Every story happened, or was first reported, on Friday 20 November 2026; every panel carries its source, and the numbers are the verified Friday figures (6 killed in Kyiv, 372,000 evacuated, Taiex −6.2%, Kospi −5.2%, Nikkei −5.1%, Hang Seng −1.9%).

## How it is made

`compose-v3.py` (PIL, deterministic — two runs produce byte-identical output) draws the page from verified story text and illustrated panel art; `check-v3.py` verifies every text fit, every WCAG contrast pair, and the map pin layout. `main.ts` copies the finished `entry.png` into the output directory. No network access is needed at build time or at run time.

<sub>Entered on [make.fun](https://make.fun/?ref=1qjvtr9y&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
