import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { videoData } from "./videoData";
import { generateContent } from "./ai/generateContent";
import { topic } from "./ai/topic";
export const MyComposition = () => {
const aiContent = generateContent(topic);
  


const category = videoData.category;
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 20, 40, 130, 150],
    [0, 1, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const titleY = interpolate(
    frame,
    [0, 30],
    [80, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const circleScale = interpolate(
    frame,
    [0, 150],
    [0.8, 1.15],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const progress = interpolate(
    frame,
    [0, 150],
    [0, 100],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(160deg, #14002e 0%, #3b0878 45%, #8b2be2 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* C├¡rculo decorativo */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.12)",
          transform: `scale(${circleScale})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
          transform: `scale(${circleScale})`,
        }}
      />

      {/* Contenido */}
      <div
        style={{
          textAlign: "center",
          opacity,
          transform: `translateY(${titleY}px)`,
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            fontWeight: 600,
            opacity: 0.75,
            marginBottom: 25,
          }}
        >
          {aiContent.hook}
        </div>
<div
  style={{
    fontSize: 24,
    letterSpacing: 5,
    fontWeight: 600,
    opacity: 0.7,
    marginTop: 15,
  }}
>
  {category}
</div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            marginBottom: 25,
          }}
        >
        {aiContent.title}
        </div>

        <div
          style={{
            fontSize: 38,
            fontWeight: 500,
            opacity: 0.9,
            marginBottom: 20,
          }}
        >
          {aiContent.subtitle}
        </div>

        <div
          style={{
            fontSize: 25,
            opacity: 0.7,
          }}
        >
          {aiContent.description}
        </div>

    <div    
  style={{
    fontSize: 30,
    opacity: 0.85,
    marginTop: 30,
    maxWidth: 850,
    lineHeight: 1.4,
  }}
>
  {aiContent.script}
  <div
  style={{
    fontSize: 32,
    fontWeight: 700,
    marginTop: 35,
    opacity: 0.95,
  }}
      >

  {aiContent.callToAction}
</div>
</div>
      </div>

      {/* Barra inferior */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          width: 700,
          height: 8,
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        />
      </div>
    </AbsoluteFill>
  );
}
