// news-image-20261118 entry (Node 22, standard library only).
// The image beside this file, entry.png, sums up the world news of
// Wednesday 18 November 2026: the US strike on Iran's Qeshm Island and
// Iran's retaliation against Bahrain and Kuwait lead, with the Crimea
// bridge attack, the Xi-Putin meeting in Shenzhen, the Alaska Senate
// result, the FOMC minutes and gold's fall, the US measles milestone,
// Congo's Ebola outbreak, UK inflation and Cyclone Xavier.
// This program copies entry.png to /output/entry.png, byte for byte,
// so both grader runs produce identical output with no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), destination);
