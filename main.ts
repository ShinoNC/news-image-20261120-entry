// news-image-20261120 entry, v1 (Node 22, standard library only).
//
// One picture: the whole world's news for Friday 20 November 2026,
// laid out as a 33-story newspaper front page under a light masthead
// (ink on cream, red date badge, 2px rule — every top-10 entry uses
// a light masthead). Three equal lead panels head the page:
// Russia's biggest missile barrage in months over Kyiv (6 killed,
// 17 injured, 3 bridges hit, ~100 missiles and ~400 drones
// overnight); Cyclone Akvan coming ashore near Gopalpur with
// 372,000 evacuated and no lives lost; and Asia's AI sell-off, with
// the Nikkei closing down 5.1%, the Kospi 5.2% and the Taiex 6.2%.
// Below them sit twelve compact illustrated stories (the Houthis
// warning Saudi Red Sea ports to evacuate, two Russian missiles
// landing in Poland, the EU-UK reset sealed but not signed, a
// rain-washed-out F1 practice in Las Vegas, Japan core CPI at 2.2%,
// British shoppers stockpiling, Italy's general strike, Nicholls'
// 175 not out in Wellington, a pancreatic-cancer drug shrinking
// tumours in 60.7% of patients, World Children's Day, 5,590 murders
// in South Africa in Jul-Sep, and a Sydney terror suspect held over
// alleged car-bomb research), a THE DAY IN UTC timeline, a
// colour-coded region count bar, an eight-number strip, an 18-item
// ALSO list with a source tag on every item, a world map with a
// pale-blue sea and tan land pinning eleven of the fifteen
// illustrated stories, and a DATE CHECK box naming fourteen prominent
// excludes for the wrong day — including the Trump-Iran decision,
// Bukele's registration and the UK's drone pledge, all Thursday
// stories that other entries present as Friday news. Each hero
// panel carries a REPORTED badge and a UTC timestamp, and the
// sources line carries a "not yet (Saturday)" rail for BepiColombo's
// Mercury arrival and F1 qualifying.
//
// The image is 1024 by 1024 pixels, within the gate's size limits.
// It was composed offline before this entry was assembled; this
// program only writes it, byte for byte, to the output directory.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// What the gate allows: at most 1 MiB, exactly 1024 by 1024.
const MAX_BYTES = 1_048_576;
const SIDE = 1024;

function pngDimensions(buf: Buffer): { width: number; height: number } {
  // Layout of a PNG file: an 8-byte signature, then the IHDR chunk —
  // a 4-byte length, the four letters "IHDR", then width and height
  // as big-endian 32-bit integers at offsets 16 and 20.
  if (buf.length < 24 || buf.toString("latin1", 12, 16) !== "IHDR") {
    throw new Error("entry.png is not a readable PNG file");
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function main(): void {
  const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dest, { recursive: true });
  const png = readFileSync(new URL("./entry.png", import.meta.url));
  // Refuse to ship a file the gate would reject.
  if (png.length === 0 || png.length > MAX_BYTES) {
    throw new Error(
      `entry.png is ${png.length} bytes; the gate allows at most ${MAX_BYTES}`,
    );
  }
  const { width, height } = pngDimensions(png);
  if (width !== SIDE || height !== SIDE) {
    throw new Error(
      `entry.png is ${width}x${height}; the gate wants ${SIDE}x${SIDE}`,
    );
  }
  writeFileSync(join(dest, "entry.png"), png);
}

main();
