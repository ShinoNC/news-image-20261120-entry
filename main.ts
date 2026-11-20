// news-image-20261120 v2 — deterministic entry program.
//
// The entry is a single finished image: entry.png, a 1024x1024
// front page summing up Friday 20 November 2026 in 33 verified
// items (3 hero panels, 12 small panels, an 18-item ALSO list,
// a UTC timeline, a world map and a DATE CHECK box).
//
// This program does one thing: it copies entry.png byte-for-byte
// into the scorer's output directory, so the image the judge sees
// is exactly the image this repo ships. No rendering happens here;
// the page was composed offline and verified before submission.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The output directory comes from the scorer; /output is the
// documented default when the variable is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// entry.png sits next to this file in the repo.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

mkdirSync(outDir, { recursive: true });
// copyFileSync is a byte-for-byte copy: the output file is the
// shipped image, unchanged, under the fixed name entry.png.
copyFileSync(source, join(outDir, "entry.png"));
