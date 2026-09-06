import { openai } from "./openai";
import { AIContent } from "../aiContent";
import { writeFile } from "node:fs/promises";
import { topic } from "./topic";
export async function generateAIContent(
  topic: string
): Promise<AIContent> {
  const response = await openai.responses.create({
    model: "gpt-5.6-luna",
    input: `Crea contenido para un video corto sobre este tema: ${topic}.

Devuelve únicamente un JSON válido con estos campos:
topic, title, subtitle, description, hook, script, callToAction.

El contenido debe estar en español.`,
  });

  const content = JSON.parse(response.output_text) as AIContent;

await writeFile(
  "src/ai/content.json",
  JSON.stringify(content, null, 2),
  "utf-8"
);

return content;
}
generateAIContent(topic)
  .then((content) => {
    console.log(JSON.stringify(content, null, 2));
  })
  .catch((error) => {
    console.error(error);
  })