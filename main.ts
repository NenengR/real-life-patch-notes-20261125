// Real Life Patch Notes: The Comedy Changelog
// Writes one funny real-life patch note to /output/entry.txt (UTF-8).
// Entry: one line, 115 chars, within the 1-160 gate. Revised: wording kept identical.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "Patch 1.0.1: fixed bug where Monday arrived twice a week. Known issue: coffee still required to boot human. No ETA.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
