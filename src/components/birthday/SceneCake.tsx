import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StarField } from "./StarField";

export function SceneCake({ name, onBlow }: { name: string; onBlow: () => void }) {
  const [blown, setBlown] = useState(false);

  const handleBlow = () => {
    setBlown(true);
    setTimeout(onBlow, 1400);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16">
      <StarField count={80} />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display relative z-10 mb-2 text-center text-4xl font-semibold text-glow md:text-5xl"
      >
        Make a wish
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-script relative z-10 mb-10 text-2xl"
        style={{ color: "oklch(0.85 0.09 25)" }}
      >
        for {name}
      </motion.p>

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="relative z-10"
      >
        {/* Candles */}
        <div className="absolute -top-24 left-1/2 flex -translate-x-1/2 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative flex flex-col items-center">
              <AnimatePresence>
                {!blown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="relative mb-1"
                  >
                    <div className="absolute inset-0 -m-3 rounded-full bg-gold opacity-60 blur-xl" />
                    <div
                      className="flame relative h-8 w-5 rounded-full"
                      style={{
                        background:
                          "radial-gradient(ellipse at center bottom, oklch(0.95 0.15 90), oklch(0.7 0.2 50) 60%, transparent 80%)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {blown && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0], y: [-5, -50] }}
                  transition={{ duration: 1.5 }}
                  className="absolute -top-2 text-2xl"
                >
                  💨
                </motion.div>
              )}
              <div className="h-16 w-2.5 rounded-sm bg-gradient-to-b from-rose-soft to-accent shadow-soft" style={{ background: "linear-gradient(to bottom, oklch(0.85 0.09 25), oklch(0.72 0.16 18))" }} />
            </div>
          ))}
        </div>

        {/* Cake tiers */}
        <div className="relative">
          <div className="mx-auto h-32 w-72 rounded-t-2xl bg-gradient-to-b shadow-glow" style={{ background: "linear-gradient(to bottom, oklch(0.92 0.05 90), oklch(0.75 0.08 60))" }}>
            <div className="flex h-full items-center justify-center px-4 text-center">
              <span className="font-script text-4xl text-primary-foreground" style={{ color: "oklch(0.25 0.1 25)" }}>
                {name}
              </span>
            </div>
          </div>
          <div className="mx-auto -mt-2 h-4 w-72 rounded-full bg-rose" style={{ background: "linear-gradient(to bottom, oklch(0.78 0.16 18), oklch(0.65 0.18 18))" }} />
          <div className="mx-auto h-24 w-96 rounded-b-3xl shadow-soft" style={{ background: "linear-gradient(to bottom, oklch(0.88 0.06 80), oklch(0.65 0.1 50))" }}>
            <div className="flex h-full items-end justify-around px-6 pb-4">
              {["🌹", "✨", "🌹", "✨", "🌹"].map((e, i) => (
                <span key={i} className="text-xl">{e}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: blown ? 0 : 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBlow}
        disabled={blown}
        className="relative z-10 mt-16 overflow-hidden rounded-full bg-rose px-10 py-4 font-display text-lg font-semibold text-foreground shadow-glow"
        style={{ background: "var(--gradient-rose)" }}
      >
        💨 Blow the candles
      </motion.button>
    </section>
  );
}
