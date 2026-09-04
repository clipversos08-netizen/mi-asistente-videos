import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  // Animación general de entrada
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.85, 1], {
    extrapolateRight: "clamp",
  });

  // Entrada del título
  const titleOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [5, 25], [40, 0], {
    extrapolateRight: "clamp",
  });

  // Entrada del subtítulo
  const subtitleOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const subtitleY = interpolate(frame, [25, 45], [30, 0], {
    extrapolateRight: "clamp",
  });

  // Entrada del texto final
  const textOpacity = interpolate(frame, [45, 65], [0, 1], {
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
        {/* TÍTULO */}
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: 2,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          MI ASISTENTE
        </div>

        {/* SUBTÍTULO */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            marginTop: 25,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          CREA VIDEOS CON IA
        </div>

        {/* TEXTO FINAL */}
        <div
          style={{
            fontSize: 26,
            marginTop: 35,
            opacity: textOpacity,
          }}
        >
          Tu contenido. Tu estilo. Automático.
        </div>
      </div>
    </AbsoluteFill>
  );
};