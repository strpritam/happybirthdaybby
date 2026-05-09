import { motion } from "framer-motion";
import { StarField } from "./StarField";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m5 from "@/assets/m5.jpg";
import m6 from "@/assets/m6.jpg";
import m7 from "@/assets/m7.jpg";
import m11 from "@/assets/m11.jpg";
import m13 from "@/assets/m13.jpg";
import m14 from "@/assets/m14.jpg";

const memories = [
  { src: m1, quote: "this is the the one of our favorite moments The Mall" },
  { src: m2, quote: "In this image see how beautiful you are looking mylove" },
  { src: m3, quote: "Oh my god this mirror image haha remember here we selected a necklace and lost it when we come to take it" },
  { src: m5, quote: "Here you be like mera bnda hai oooh i like these thing which you do without let me know" },
  { src: m6, quote: "For the first time we clicked image like this and it not only image i will hold this hand forever" },
  { src: m7, quote: "This image is sooo perfect image of our overall journey and we have tuned in it without even decided " },
  { src: m11, quote: "Ohhhh my cutieee gurll how lovely you are looking " },
  { src: m13, quote: "the next day mall ride on this day we visited haunted house and you feared but still trust on me and explored hope you keep it up in everything as you are doin" },
  { src: m14, quote: "How cutee you are looking mylove yk mai tumhe dekh rha tha cuz nzre hatti hi nhi thi and this much only for now " },
];

export function SceneMemories({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20">
      <StarField count={60} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="font-script mb-2 text-2xl" style={{ color: "oklch(0.85 0.09 25)" }}>our story so far</p>
        <h2 className="font-display text-5xl font-semibold text-glow md:text-6xl">
          <span className="shimmer-text">Our Memories</span>
        </h2>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((m, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            className="group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-primary/20"
          >
            <img
              src={m.src}
              alt={m.quote}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/95 via-background/70 to-transparent p-5">
              <p className="font-display text-lg italic text-glow md:text-xl" style={{ color: "oklch(0.92 0.09 92)" }}>
                "{m.quote}"
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="relative z-10 mt-16 text-center">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold text-primary-foreground shadow-glow"
        >
          🌱 See our love grow
        </motion.button>
      </div>
    </section>
  );
}
