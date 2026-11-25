import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const SCENE =
  "Dad burnt the pancakes again, so Mom declared it a \"smoke alarm birthday\" and we ate them anyway — blackened, lopsided, and gone in five minutes, because nobody at this table has ever let a little smoke ruin a Sunday.";

function validateScene(scene: string): void {
  const lines = scene.split("\n").filter((line) => line.trim().length > 0);
  if (lines.length < 1 || lines.length > 2) {
    throw new Error(`scene must be 1-2 lines, got ${lines.length}`);
  }
  if (scene.length < 1 || scene.length > 280) {
    throw new Error(`scene must be 1-280 chars, got ${scene.length}`);
  }
  if (scene.trim().length === 0) {
    throw new Error("scene must not be blank");
  }
  for (let i = 0; i < scene.length; i++) {
    const code = scene.charCodeAt(i);
    if (code < 0x20 && scene[i] !== "\n" && scene[i] !== "\t") {
      throw new Error(`scene contains control character U+${code.toString(16).padStart(4, "0")} at index ${i}`);
    }
  }
}

function main(): void {
  validateScene(SCENE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, SCENE, "utf8");
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== SCENE) {
    throw new Error("read-back guard failed: entry.txt does not match the scene exactly");
  }
}

main();
