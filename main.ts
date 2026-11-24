// The Robot Pickup Line Championship — entry program.
// Writes one pickup line, in the voice of a robot, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'd give you my last 1% of battery — and unlike my updates, I won't restart right in the middle of it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The gate requires 1–200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
