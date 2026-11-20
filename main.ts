// news-image-20261120, entry v3 — output stage.
//
// The picture itself is composed offline by compose-v3.py (PIL) and
// stored next to this file as entry.png. This program does exactly
// one thing: it copies that file into the output directory the
// harness asks for, so the entry can be scored.
//
// v3 follows the format of the current top entry (samatch-we) as
// closely as the rules allow: a huge serif date, a black-ink number
// strip with red rules, a continuous segmented region bar, three
// equal heroes with giant white-on-red labels, ten small panels with
// full-width red banners, a dark world map with numbered pins in
// region colours, a 22-item ALSO list, and a DATE CHECK box. The
// stories are our own verified Friday news — nothing is copied from
// the reference except the layout grammar.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv;
  }
  return "/output";
}

if (!existsSync(SOURCE)) {
  throw new Error(`entry image not found beside main.ts: ${SOURCE}`);
}

const targetDir = outputDir();
mkdirSync(targetDir, { recursive: true });
copyFileSync(SOURCE, join(targetDir, "entry.png"));
console.log(`entry.png -> ${join(targetDir, "entry.png")}`);
