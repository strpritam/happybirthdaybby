import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StarField } from "./StarField";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";

type Moment = {
  src: string;
  kicker: string;
  title: string;
  body: string;
};

const moments: Moment[] = [
  {
    src: g1,
    kicker: "growth begins",
    title: "your eyes",
    body:
      "Your eyes in this videocall my love see it through my eyes how beautiful it is tumhe kbii smjh hi nhi aata kitni to sundar hai bt tum smjhti nhi so im saying so take it it issss uss din tumhe dekhte hi ss le liya cuz it was really imagine that time",

 
   
    
  },
  {
    src: g2,
    kicker: "roots deepen",
    title: "The most imagine gurl",
    body:
      "How beautiful you were looking in this dress mylove and on this day you make effors to wear it for me  hooo i love you",
  },
  {
    src: g3,
    kicker: "spring arrives",
    title: "Visited temple of love",
    body:
      "On this day you visited Prem mandir and you are looking so beautiful my lady ik uss time thoda idhr udhr ho gya tha apna nut see god done everything right for you these day you have to believe mylove",
  },
  {
    src: g4,
    kicker: "petals unfold",
    title: "Video calls",
    body:
    "pta hai ye video call kitna relaxing hota hai nn kuch bolo na bolo just seeing each other anytime it is very well mylove and see howwwwwww gorgeous u r looking in this image your eyes and with that bindi make it look more bold seee how beautiful you are bchaaa",
  },
  {
    src: g5,
    kicker: "in full bloom",
    title: "Those Sleeps",
    body:
    "see how beautifully you were sleeping bby you look toooo cute while sleeping isliye mujhe nind nhi aati jldi tumhe dekhta hu sote to alg hi sukoon milta hai like this sleeping on video calls is great when we are on it not feel too much to say hope we sleep like this till graduation after that we plan smthing else",
  },
  {
    src: g6,
    kicker: "seasons turn",
    title: "On the Roking mood",
    body:
     "see how beautifully you were sleeping bby you look toooo cute while sleeping isliye mujhe nind nhi aati jldi tumhe dekhta hu sote to alg hi sukoon milta hai like this sleeping on video calls is great when we are on it not feel too much to say hope we sleep like this till graduation after that we plan smthing else",
    },
  {
    src: g7,
    kicker: "branches reach higher",
    title: "Drying hair with me",
    body:
      "Pta hai jb bhi tum hair wash krti ho nnn i eager to see you cuz uss time tum aur achhi lgti ho and bhinge hairs hooo bcha ",
    },
  {
    src: g8,
    kicker: "abundant harvest",
    title: "My weakness",
    body:
    "OOOh baby your neck is tooo hot to control whenever i see it like this yk my hungers increases see nn yrrr how beautiful its lookin smjhti nhi bchaa",
    },
  {
    src: g9,
    kicker: "eternal growth",
    title: "Sleeping Lord",
    body:
      "People have seen many thing but see baby how cutely you are sleeping standing on vc mtlb wah itna bda talent leke bhi padhai krni pd rhi hai hope you sleep like this till graduation after that we plan smthing else hahahhahah",
    },
  {
    src: g10,
    kicker: "love's legacy",
    title: "The crazy Look",
    body:
     "My god mylove how beautiful you are looking in this image totally in new form like a model schi baat rha phla feeling yhi aaya model wala mtlb shi hai yrr ye shirt bahot shi lg rha tumare pe and ye setup lga ke to aur high kr diya hai aapne i love you bby love cutiee gurl",
  },
];

export function SceneLovePlant({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);
  const isLast = index === moments.length - 1;
  const moment = moments[index];

  const goNext = () => {
    if (isLast) onNext();
    else setIndex((i) => i + 1);
  };

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-16 md:py-20">
      <StarField count={70} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto mb-10 max-w-4xl text-center"
      >
        <p className="font-script mb-2 text-2xl" style={{ color: "oklch(0.85 0.09 25)" }}>
          our story, page by page
        </p>
        <h2 className="font-display text-4xl font-semibold text-glow md:text-6xl">
          <span className="shimmer-text">How Our Love Grew</span>
        </h2>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
          >
            {/* Big photo frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gold opacity-20 blur-3xl" />
              <div
                className="relative rounded-[1.75rem] p-3 shadow-glow ring-1 ring-primary/40"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.14 85), oklch(0.55 0.12 60))",
                }}
              >
                <div className="overflow-hidden rounded-[1.4rem] ring-1 ring-black/20">
                  <img
                    src={moment.src}
                    alt={moment.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="pointer-events-none absolute -right-3 -top-3 text-3xl heartbeat">
                  💖
                </div>
              </div>
            </motion.div>

            {/* Sliding text panel */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative"
            >
              <p
                className="font-script mb-3 text-2xl"
                style={{ color: "oklch(0.85 0.09 25)" }}
              >
                {moment.kicker}
              </p>
              <h3 className="font-display mb-5 text-3xl font-semibold text-glow md:text-5xl">
                <span className="shimmer-text">{moment.title}</span>
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                {moment.body}
              </p>

              <div className="mt-6 flex items-center gap-2">
                {moments.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-gold" : "w-3 bg-primary/30"
                    }`}
                  />
                ))}
                <span className="ml-3 text-sm text-muted-foreground">
                  {index + 1} / {moments.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: index === 0 ? 1 : 1.05 }}
            whileTap={{ scale: index === 0 ? 1 : 0.95 }}
            onClick={goPrev}
            disabled={index === 0}
            className="rounded-full border border-primary/40 px-6 py-3 font-display text-base text-foreground/90 transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← Previous
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={goNext}
            className="rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold text-primary-foreground shadow-glow"
          >
            {isLast ? "💌 Open my letter" : "Next page →"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
