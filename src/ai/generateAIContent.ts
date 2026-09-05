import { openai } from "./openai";
import { AIContent } from "../aiContent";

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

  return JSON.parse(response.output_text) as AIContent;
}