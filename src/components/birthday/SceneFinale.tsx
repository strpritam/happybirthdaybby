import { motion } from "framer-motion";
import { StarField } from "./StarField";
import { EmojiRain } from "./EmojiRain";
import heroImg from "@/assets/her-hero.jpg";

const quotes = [
  "May your year bloom like a garden you didn't plant — full of unexpected, lovely things.",
  "You were the best plot twist of my life which i want to live again and again , stay as you are always and lovve me  cuz i'm not going for any backstep i always love you (i'm not only saying this i will miss i always will) and make you feel what you deserve ",
  "You know its hard to believe we are together on your birthday yrr miss you so much and i hope we will meet soon and celebrate your next birthday together and make it more special than this one.",

];

export function SceneFinale({ onRestart }: { onRestart: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20">
      <StarField count={140} />
      <EmojiRain count={30} />

      <div className="relative z-30 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto mb-10 h-48 w-48 md:h-56 md:w-56"
        >
          <div className="absolute -inset-4 rounded-full bg-gold opacity-40 blur-3xl drift" />
          <img
            src={heroImg}
            alt="My love"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative h-full w-full rounded-full object-cover shadow-glow ring-4 ring-primary/50"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-semibold text-glow md:text-7xl"
        >
          <span className="shimmer-text">Happy Birthday Miss</span>
          <br />
          <span className="font-script italic" style={{ color: "oklch(0.85 0.09 25)" }}>For you This year is going to be crazy</span>
        </motion.h2>

        <div className="mt-12 space-y-8">
          {quotes.map((q, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="font-display mx-auto max-w-2xl text-xl italic text-muted-foreground md:text-2xl"
            >
              "{q}"
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <p className="font-script text-4xl text-glow-rose md:text-6xl" style={{ color: "oklch(0.85 0.09 25)" }}>
            I love you, always ♡
          </p>
          <p className="font-script text-4xl text-glow-rose md:text-6xl" style={{ color: "oklch(0.85 0.09 25)" }}>
            Your Boy, Pritt
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="mt-14 rounded-full border border-primary/40 bg-card px-8 py-3 font-display text-base text-foreground shadow-soft transition-colors hover:bg-secondary"
        >
          ↺ Replay the magic
        </motion.button>
      </div>
    </section>
  );
}
