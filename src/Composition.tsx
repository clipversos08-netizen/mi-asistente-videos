
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 20, 40],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const textOpacity = interpolate(
    frame,
    [20, 45, 70],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #24126b 0%, #7c2de2 100%)",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${0.9 + opacity * 0.1})`,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          MI ASISTENTE
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            fontWeight: "bold",
            opacity: textOpacity,
          }}
        >
          CREA VIDEOS CON IA
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 22,
            opacity: textOpacity * 0.8,
          }}
        >
          Tu contenido. Tu estilo. Automático.
        </div>
      </div>
    </AbsoluteFill>
  );
};