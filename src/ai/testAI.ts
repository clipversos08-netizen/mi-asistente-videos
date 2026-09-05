/// <reference types="node" />
import { generateAIContent } from "./generateAIContent";

generateAIContent("5 herramientas de inteligencia artificial")
  .then((content) => {
    process.stdout.write(JSON.stringify(content, null, 2) + "\n");
  })
  .catch((error: unknown) => {
    process.stderr.write(
  `ERROR: ${error instanceof Error ? error.message : String(error)}\n`
);
  })