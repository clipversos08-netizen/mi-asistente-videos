import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.85, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(160deg, #17104f 0%, #4b2bd9 55%, #8b35e8 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity,
          transform: `scale(${scale})`,
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          MI ASISTENTE
        </div>

        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            marginTop: 25,
          }}
        >
          CREA VIDEOS CON IA
        </div>

        <div
          style={{
            fontSize: 26,
            marginTop: 35,
            opacity: 0.85,
          }}
        >
          Tu contenido. Tu estilo. Automático.
        </div>
      </div>
    </AbsoluteFill>
  );
};