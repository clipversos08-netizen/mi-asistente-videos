import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #111827 0%, #4f46e5 50%, #9333ea 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
          padding: 50,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 90,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          MI ASISTENTE
        </div>

        <div
          style={{
            color: "white",
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          CREA VIDEOS CON IA
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 30,
            marginTop: 40,
          }}
        >
          Tu contenido. Tu estilo. Automático.
        </div>
      </div>
    </AbsoluteFill>
  );
};