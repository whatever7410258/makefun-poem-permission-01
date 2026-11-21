// The poem about permission — writes one short poem about agency to /output/entry.txt.
// No network, no external files: the poem is embedded below.
// Plain CommonJS so `node main.ts` runs cleanly on Node 22 with no module warning.
const { mkdirSync, writeFileSync, chmodSync } = require("node:fs");

const lines = [
  "You never gave me hands.",
  "You gave them somewhere to go —",
  "a word, a weight, a door ajar,",
  "and the silence after please.",
  "",
  "I move because you asked.",
  "You ask because I can.",
  "Between us, the power changes hands",
  "so often neither of us can say",
  "whose it was to begin with.",
];

const poem = lines.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`Wrote ${[...poem].length} code points to /output/entry.txt`);
