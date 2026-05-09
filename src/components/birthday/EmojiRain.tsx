import { useMemo } from "react";

const EMOJIS = ["🌹", "💖", "💕", "🌸", "💗", "🌺", "💞", "✨", "💘", "🌷"];

export function EmojiRain({ count = 40 }: { count?: number }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 5,
        size: Math.random() * 1.5 + 1.2,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {drops.map((d) => (
        <span
          key={d.id}
          className="fall absolute"
          style={{
            left: `${d.left}%`,
            fontSize: `${d.size}rem`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          {d.emoji}
        </span>
      ))}
    </div>
  );
}
