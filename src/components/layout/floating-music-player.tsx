"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Pause, SkipForward } from "lucide-react";
import { useAudio } from "@/context/audio-context";
import { motion, AnimatePresence } from "motion/react";

export function FloatingMusicPlayer() {
  const { isPlaying, song, togglePlay, nextSong } = useAudio();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-50 select-none hidden sm:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        layout
        className="rounded-full flex items-center gap-3 p-1.5 bg-black/60 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer transition-colors hover:border-pink-500/30 overflow-hidden"
        style={{
          boxShadow: isPlaying ? "0 0 20px rgba(236,72,153,0.15)" : "0 4px 12px rgba(0,0,0,0.5)"
        }}
        onClick={() => {
          if (!isHovered) {
            togglePlay();
          }
        }}
      >
        {/* Cover Art Disc */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
          <div className={`w-full h-full relative ${isPlaying ? "rotate-disk" : "rotate-disk rotate-disk-paused"}`}>
            <Image
              src={song.coverUrl}
              alt={song.title}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          {/* Center hole */}
          <div className="absolute inset-0 m-auto w-2 h-2 bg-black rounded-full border border-zinc-700 flex items-center justify-center">
            <div className={`w-0.5 h-0.5 rounded-full ${isPlaying ? "bg-pink-500 animate-pulse" : "bg-zinc-600"}`}></div>
          </div>
        </div>

        {/* Text and controls (Shown when hovered) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-3 pr-3 overflow-hidden whitespace-nowrap"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-white truncate max-w-[120px]">
                  {song.title}
                </span>
                <span className="text-[8px] text-pink-400 font-semibold truncate max-w-[120px]">
                  {song.artist}
                </span>
              </div>

              {/* Mini controls */}
              <div className="flex items-center gap-1.5 border-l border-white/10 pl-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="p-1 hover:text-pink-400 text-zinc-300 transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pausar" : "Tocar"}
                >
                  {isPlaying ? (
                    <Pause className="w-3 h-3 fill-current text-white" />
                  ) : (
                    <Play className="w-3 h-3 fill-current text-white ml-0.5" />
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSong();
                  }}
                  className="p-1 hover:text-pink-400 text-zinc-300 transition-colors cursor-pointer"
                  aria-label="Próxima"
                >
                  <SkipForward className="w-3 h-3 fill-current text-white" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small playing visualizer (Shown when not hovered and playing) */}
        {!isHovered && isPlaying && (
          <div className="mini-music-bar-container music-bar-active pr-3">
            <div className="mini-music-bar"></div>
            <div className="mini-music-bar"></div>
            <div className="mini-music-bar"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
