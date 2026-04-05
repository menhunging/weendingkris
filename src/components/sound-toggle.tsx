"use client";

import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/privet.mp3";

export function SoundToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const topOffset = "calc(env(safe-area-inset-top, 0px) + 1rem)";

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const timeoutId = window.setTimeout(() => {
      setShowHint(false);
    }, 4200);

    return () => {
      window.clearTimeout(timeoutId);
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  async function handleToggle() {
    const audio = audioRef.current;
    setShowHint(false);

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  return (
    <>
      <div
        className={`pointer-events-none fixed right-20 top-6 z-40 rounded-full border border-white/70 bg-white/88 px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#8b3951] shadow-[0_10px_30px_rgba(102,33,54,0.1)] backdrop-blur transition-all duration-700 ${
          showHint
            ? "translate-x-0 opacity-100"
            : "translate-x-3 opacity-0"
        }`}
        style={{ top: topOffset }}
      >
        нажми на сердечко
      </div>

      <button
        type="button"
        onClick={handleToggle}
        className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center text-white outline-none transition hover:scale-[1.03] focus:outline-none"
        aria-label={isPlaying ? "Выключить музыку" : "Включить музыку"}
        style={{ top: topOffset }}
      >
        <span className="absolute left-1/2 top-1 h-8 w-8 -translate-x-[85%] rounded-full bg-[#8b3951] shadow-[0_16px_40px_rgba(102,33,54,0.22)]" />
        <span className="absolute left-1/2 top-1 h-8 w-8 -translate-x-[15%] rounded-full bg-[#8b3951] shadow-[0_16px_40px_rgba(102,33,54,0.22)]" />
        <span className="absolute left-1/2 top-[0.9rem] h-8 w-8 -translate-x-1/2 rotate-45 bg-[#8b3951] shadow-[0_16px_40px_rgba(102,33,54,0.22)]" />
        {isPlaying ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="relative top-[-2px] z-10 h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
            <path d="M15 9.5a4 4 0 0 1 0 5" />
            <path d="M17.5 7a7.5 7.5 0 0 1 0 10" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="relative top-[-2px] z-10 h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
            <path d="m15 9 5 6" />
            <path d="m20 9-5 6" />
          </svg>
        )}
      </button>
    </>
  );
}
