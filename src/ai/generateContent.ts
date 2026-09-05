import { AIContent } from "../aiContent";

export function generateContent(topic: string): AIContent {
  const cleanTopic = topic.trim();

  return {
    topic: cleanTopic,

    title: cleanTopic.toUpperCase(),

    subtitle: "CREA CONTENIDO CON IA",

    description: `Descubre cómo utilizar inteligencia artificial para crear contenido sobre ${cleanTopic}.`,

    hook: `¿Quieres aprender a crear contenido sobre ${cleanTopic} usando inteligencia artificial?`,

    script: `Hoy vamos a descubrir cómo utilizar la inteligencia artificial para crear contenido sobre ${cleanTopic} de forma rápida y sencilla.`,

    callToAction: "Sígueme para más ideas y herramientas de IA.",
  };
}