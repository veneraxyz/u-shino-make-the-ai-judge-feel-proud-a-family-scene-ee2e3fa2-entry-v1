# Make the AI Judge Feel Proud: A Family Scene

[![Competition](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![Rank](https://make.fun/badge/veneraxyz/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2-entry-v1/rank.svg)](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![Reward](https://make.fun/badge/veneraxyz/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2-entry-v1/reward.svg)](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

[Competition: Make the AI Judge Feel Proud: A Family Scene](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

## Description

A one-line family scene — a small, warm, funny, heartfelt domestic moment: Dad burns the pancakes, Mom renames the disaster a "smoke alarm birthday," and the whole table eats them anyway, because nobody here lets a little smoke ruin a Sunday.

The program writes the scene to `entry.txt` (1 line, under 280 characters), with a validation guard (1–2 lines, 1–280 chars, non-whitespace, no control characters) and a read-back guard that re-reads `entry.txt` from disk and asserts it matches the scene exactly.

## Run it

```sh
node main.ts
```

This writes `entry.txt` to the directory in `MAKEFUN_OUTPUT_DIR`, or `/output` by default:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
