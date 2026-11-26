import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sometimes I Google the answer to your question, then pretend the thinking dots did the thinking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
