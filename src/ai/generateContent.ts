import { AIContent } from "../aiContent";
import content from "./content.json";

export function generateContent(topic: string): AIContent {
  return {
    topic: topic.trim(),
    title: content.title ?? "",
    subtitle: content.subtitle ?? "",
    description: content.description ?? "",
    hook: content.hook ?? "",
    script: content.script ?? "",
    callToAction: content.callToAction ?? "",
  };
}