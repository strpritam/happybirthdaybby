import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SceneHero } from "@/components/birthday/SceneHero";
import { SceneCake } from "@/components/birthday/SceneCake";
import { SceneCelebrate } from "@/components/birthday/SceneCelebrate";
import { SceneMemories } from "@/components/birthday/SceneMemories";
import { SceneLovePlant } from "@/components/birthday/SceneLovePlant";
import { SceneLetter } from "@/components/birthday/SceneLetter";
import { SceneMusic } from "@/components/birthday/SceneMusic";
import { SceneFinale } from "@/components/birthday/SceneFinale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Love — A Surprise Just For You" },
      {
        name: "description",
        content:
          "An interactive starry-midnight birthday journey: cake, candles, memories, a love tree, and a letter from the heart.",
      },
      { property: "og:title", content: "Happy Birthday, My Love" },
      { property: "og:description", content: "Open this for a magical birthday surprise made just for you." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAME = "My Love";

const SCENES = ["hero", "cake", "celebrate", "memories", "plant", "letter", "music", "finale"] as const;
type Scene = (typeof SCENES)[number];

function Index() {
  const [scene, setScene] = useState<Scene>("hero");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scene]);

  const next = (s: Scene) => () => setScene(s);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {scene === "hero" && <SceneHero onNext={next("cake")} />}
          {scene === "cake" && <SceneCake name={NAME} onBlow={next("celebrate")} />}
          {scene === "celebrate" && <SceneCelebrate onNext={next("memories")} />}
          {scene === "memories" && <SceneMemories onNext={next("plant")} />}
          {scene === "plant" && <SceneLovePlant onNext={next("letter")} />}
          {scene === "letter" && <SceneLetter name={NAME} onNext={next("music")} />}
          {scene === "music" && <SceneMusic name={NAME} onNext={next("finale")} />}
          {scene === "finale" && <SceneFinale onRestart={next("hero")} />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
