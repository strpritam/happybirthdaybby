import { motion } from "framer-motion";
import { EmojiRain } from "./EmojiRain";
import { StarField } from "./StarField";

export function SceneCelebrate({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16">
      <StarField count={100} />
      <EmojiRain count={50} />

      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
        className="font-display relative z-30 text-center text-5xl font-semibold leading-tight text-glow md:text-7xl lg:text-8xl"
      >
        <span className="shimmer-text">Happy Birthday</span>
        <br />
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-script inline-block text-glow-rose"
          style={{ color: "oklch(0.85 0.09 25)" }}
        >
          My Love
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-30 mt-8 max-w-xl text-center font-display text-xl italic text-muted-foreground md:text-2xl"
      >
        Your wish has taken flight among the stars.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative z-30 mt-12 rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold text-primary-foreground shadow-glow"
      >
        🎁 A surprise for you
      </motion.button>
    </section>
  );
}
