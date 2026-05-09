import { motion } from "framer-motion";
import heroImg from "@/assets/her-photo.jpg.jpg";
import { StarField } from "./StarField";

export function SceneHero({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16">
      <StarField count={120} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 mb-10"
      >
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gold opacity-30 blur-3xl drift" />
          <img
            src={heroImg}
            alt="My love"
            width={1024}
            height={1280}
            className="relative h-64 w-64 rounded-full object-cover shadow-glow ring-4 ring-primary/40 md:h-80 md:w-80"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-display relative z-10 text-center text-6xl font-semibold leading-none text-glow md:text-8xl lg:text-9xl"
      >
        <span className="shimmer-text">Happy</span>
        <br />
        <motion.span
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block shimmer-text italic"
        >
          Birthday
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="font-script relative z-10 mt-6 text-3xl text-rose-soft text-glow-rose md:text-4xl"
        style={{ color: "oklch(0.85 0.09 25)" }}
      >
        my love ♡
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative z-10 mt-12 overflow-hidden rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold tracking-wide text-primary-foreground shadow-glow transition-all"
      >
        ✨ Begin the surprise ✨
      </motion.button>
    </section>
  );
}
