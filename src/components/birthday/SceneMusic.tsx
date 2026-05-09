import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat } from "lucide-react";
import { StarField } from "./StarField";
import herPhoto from "@/assets/her-hero.jpg";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m5 from "@/assets/m5.jpg";
import m6 from "@/assets/m6.jpg";
import m7 from "@/assets/m7.jpg";
import m11 from "@/assets/m11.jpg";
import m13 from "@/assets/m13.jpg";
import m14 from "@/assets/m14.jpg";
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

// 🎵 Replace `src` with your own audio files (place them in /public/music/ and use "/music/your-song.mp3")
// Replace `cover` with your own album art if you'd like.
const COVERS = [herPhoto, m1, m2, m3, m5, m6, m7, m11, m13, m14, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

type Track = { title: string; artist: string; src: string; cover: string };

const TRACKS: Track[] = Array.from({ length: 22 }, (_, i) => ({
  title: "I Seriously Love you bby",
  artist: "For My Love ♡",
  src: `/music/New recording ${i + 1}.m4a`,
  cover: COVERS[i % COVERS.length],
}));

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${ss}`;
}

export function SceneMusic({ name, onNext }: { name: string; onNext: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const track = TRACKS[idx];

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
  }, [volume]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [playing, idx]);

  const next = () => setIdx((i) => (i + 1) % TRACKS.length);
  const prev = () => setIdx((i) => (i - 1 + TRACKS.length) % TRACKS.length);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-4 py-10 md:px-10">
      <StarField count={60} />

      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={next}
      />

      <div className="relative z-10 mb-6 text-center">
        <p className="font-script text-2xl" style={{ color: "oklch(0.85 0.09 25)" }}>a playlist for you</p>
        <h2 className="font-display text-4xl font-semibold text-glow md:text-5xl">
          <span className="shimmer-text">This is somthing cring so dont laugh ye sb jab tumhe jyada miss krta hu to kr leta hu {name}</span>
        </h2>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* LEFT: Player with spinning CD */}
        <div className="flex flex-col items-center justify-center rounded-3xl p-8 shadow-soft ring-1 ring-primary/20"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.07 272 / 0.8), oklch(0.18 0.06 270 / 0.8))" }}>

          {/* CD */}
          <div className="relative mb-8 aspect-square w-64 md:w-80">
            <motion.div
              className="absolute inset-0 rounded-full shadow-glow"
              style={{
                background: "radial-gradient(circle at center, oklch(0.1 0 0) 0%, oklch(0.18 0.02 270) 30%, oklch(0.08 0 0) 100%)",
              }}
              animate={{ rotate: playing ? 360 : 0 }}
              transition={{ duration: 8, ease: "linear", repeat: playing ? Infinity : 0 }}
            >
              {/* vinyl rings */}
              <div className="absolute inset-4 rounded-full ring-1 ring-white/5" />
              <div className="absolute inset-10 rounded-full ring-1 ring-white/5" />
              <div className="absolute inset-16 rounded-full ring-1 ring-white/5" />
              {/* center photo */}
              <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-primary/60 shadow-glow">
                <img src={track.cover} alt={track.title} className="h-full w-full object-cover" />
              </div>
              {/* center hole */}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background ring-2 ring-primary/60" />
            </motion.div>
          </div>

          {/* Track info */}
          <div className="mb-4 text-center">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">{track.title}</h3>
            <p className="text-sm text-muted-foreground">{track.artist}</p>
          </div>

          {/* Progress */}
          <div className="mb-4 w-full max-w-md">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={progress}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (audioRef.current) audioRef.current.currentTime = v;
                setProgress(v);
              }}
              className="w-full accent-primary"
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>{fmt(progress)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-5">
            <button className="text-muted-foreground hover:text-primary"><Shuffle size={20} /></button>
            <button onClick={prev} className="text-foreground hover:text-primary"><SkipBack size={28} /></button>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              {playing ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
            </button>
            <button onClick={next} className="text-foreground hover:text-primary"><SkipForward size={28} /></button>
            <button className="text-muted-foreground hover:text-primary"><Repeat size={20} /></button>
          </div>

          {/* Volume */}
          <div className="mt-6 flex w-full max-w-xs items-center gap-3">
            <Volume2 size={18} className="text-muted-foreground" />
            <input
              type="range" min={0} max={1} step={0.01} value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>

        {/* RIGHT: Playlist */}
        <div className="flex flex-col rounded-3xl p-6 shadow-soft ring-1 ring-primary/20"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.07 272 / 0.8), oklch(0.18 0.06 270 / 0.8))" }}>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-display text-xl font-semibold">Playlist · {TRACKS.length}</h4>
            <span className="text-xs text-muted-foreground">made with ♡</span>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto pr-1" style={{ maxHeight: "60vh" }}>
            {TRACKS.map((t, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); setPlaying(true); }}
                className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors ${
                  i === idx ? "bg-primary/15 ring-1 ring-primary/40" : "hover:bg-white/5"
                }`}
              >
                <span className="w-5 text-center text-xs text-muted-foreground">{i + 1}</span>
                <img src={t.cover} alt="" className="h-10 w-10 rounded object-cover" />
                <div className="min-w-0 flex-1">
                  <p className={`truncate text-sm ${i === idx ? "text-primary" : ""}`}>{t.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.artist}</p>
                </div>
                <span
                  onClick={(e) => { e.stopPropagation(); setLiked((l) => ({ ...l, [i]: !l[i] })); }}
                  className={`text-base ${liked[i] ? "text-rose-400" : "text-muted-foreground"}`}
                >
                  <Heart size={16} fill={liked[i] ? "currentColor" : "none"} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 text-center">
        <button
          onClick={onNext}
          className="rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Continue ✨
        </button>
      </div>
    </section>
  );
}
