import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StarField } from "./StarField";

export function SceneLetter({ name, onNext }: { name: string; onNext: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      <StarField count={70} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-10 text-center"
      >
        <p className="font-script mb-2 text-2xl" style={{ color: "oklch(0.85 0.09 25)" }}>a little secret</p>
        <h2 className="font-display text-5xl font-semibold text-glow md:text-6xl">
          <span className="shimmer-text">For you, only you</span>
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6, rotateY: 90 }}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen(true)}
              className="group relative mx-auto block aspect-[5/3] w-full max-w-md cursor-pointer"
            >
              <div className="absolute inset-0 rounded-xl shadow-glow" style={{ background: "linear-gradient(135deg, oklch(0.78 0.16 18), oklch(0.65 0.18 18))" }} />
              <div
                className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-xl transition-transform duration-500 group-hover:rotate-x-180"
                style={{
                  background: "linear-gradient(135deg, oklch(0.85 0.14 20), oklch(0.7 0.18 18))",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="heartbeat flex h-16 w-16 items-center justify-center rounded-full bg-card text-3xl shadow-glow ring-2 ring-primary/60">
                  💌
                </div>
              </div>
              <p className="font-script absolute inset-x-0 bottom-4 text-center text-2xl" style={{ color: "oklch(0.96 0.02 90)" }}>
                tap to open
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative rounded-2xl p-8 shadow-glow ring-1 ring-primary/30 md:p-12"
              style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 90), oklch(0.88 0.06 80))" }}
            >
              <div className="font-display space-y-5 text-base leading-relaxed md:text-lg" style={{ color: "oklch(0.2 0.05 270)" }}>
                <p className="font-script text-3xl md:text-4xl" style={{ color: "oklch(0.45 0.18 18)" }}>
                  My dearest {name},
                </p>
                <p>
                  Happy birthday mylove  may this birthday change your life completely and fill with happiness and if anyhow sadness arrives I'll be there to make you feel better you know these days i miss you too much like mera mnn krta hai abhi aa jau tumare pass and give you all love and care you deserve i don't know when we'll be together but if anyhow this possible  ..........god that would be craziest thing happen in our life which will give love and peace both at same time bahot kuch likhna chahta hu but abii tumse milne ki feelings aisi hai ki koe word hi nhi bn rha hope you also understand this yk ye maine phle se hi soch rkha tha ki we'll meet on 8th May cuz we both know the importance of that day and uske baad  2nd time milne me 4 saal nikl gye itna late kyu kr diya........bchaa pta nhi Is this a real love or not but i feel really nice and peaceful from inside since we are connected i mean i can see changes in me and these are all cuz of you mylove thankyou for everything you did in my life ykw hindi pe aate hai.. hmesha tumhe miss krta hu tumare bare me sochta rehta hu kisi bhi wqt kbi kbi to unexpected situations me   ye aisa hai nn i likeeee very much ki I've someone jiske bare me mai soch skta hu manifest krr skta hu omg it feeling like magic  to express this all 
You are the most amazing girl I've ever met i like everything in you 
                </p>
                <p>
                  your way of telling things jb tum thodi bby  trike se baate krti ho mujhe bahot pyara lgta hai your voice baby trust you have got the amazing voice and i love listening you without tired for second
                </p>
                <p>
                  your harkteee  jo bhi tum krti ho bed se sote sote gir jana kbii bhi aachank se dance krne lgna aur wo cartoon wale dance  everything you do is like movie for me jisse mai bore nhi ho skta kbhi bhi,
                </p>
                <p className="font-script pt-2 text-2xl md:text-3xl" style={{ color: "oklch(0.45 0.18 18)" }}>
                  Happy Birthday MyLove Forever yours, I love You ♡
                </p>
              </div>
              <div className="pointer-events-none absolute -right-4 -top-4 text-4xl heartbeat">💖</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {open && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="relative z-10 mt-12 rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold text-primary-foreground shadow-glow"
        >
          ✨ One more thing
        </motion.button>
      )}
    </section>
  );
}
