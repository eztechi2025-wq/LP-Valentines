"use client";

import Image from "next/image";
import { Play, Pause, SkipForward, SkipBack, Music } from "lucide-react";
import { useAudio } from "@/context/audio-context";

export function SpotifyPlayer() {
  const {
    isPlaying,
    currentTime,
    duration,
    song,
    togglePlay,
    nextSong,
    prevSong,
    seekTo,
  } = useAudio();

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercent = parseFloat(e.target.value);
    const newTime = (newPercent / 100) * duration;
    seekTo(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const percentProgress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-sm rounded-3xl p-6 wrapped-glass neon-border-pink flex flex-col items-center select-none text-white relative z-10 transition-transform duration-300 hover:scale-[1.02]">
      {/* Capa do Álbum Girando */}
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-[#121212]">
        <div className={`w-full h-full relative ${isPlaying ? "rotate-disk" : "rotate-disk rotate-disk-paused"}`}>
          <Image
            src={song.coverUrl}
            alt={song.title}
            fill
            sizes="192px"
            className="object-cover"
            priority
          />
          {/* Furo central do disco de vinil */}
          <div className="absolute inset-0 m-auto w-10 h-10 bg-[#121212] rounded-full border-4 border-zinc-800 flex items-center justify-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Título & Artista */}
      <div className="w-full text-center mb-6">
        <h3 className="font-semibold text-lg text-white truncate px-2 tracking-wide">
          {song.title}
        </h3>
        <p className="text-sm text-pink-400 font-medium truncate mt-1">
          {song.artist}
        </p>
      </div>

      {/* Espectro Sonoro Animado */}
      <div className="w-full flex justify-center items-center h-8 mb-6">
        <div className={`music-bar-container ${isPlaying ? "music-bar-active" : ""}`}>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
          <div className="music-bar"></div>
        </div>
      </div>

      {/* Barra de Progresso do Spotify */}
      <div className="w-full flex flex-col gap-2 mb-6">
        <input
          type="range"
          min="0"
          max="100"
          value={percentProgress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:h-1.5 transition-all duration-150"
          style={{
            background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${percentProgress}%, #3f3f46 ${percentProgress}%, #3f3f46 100%)`,
          }}
        />
        <div className="w-full flex justify-between text-xs text-zinc-400 font-semibold px-0.5">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controles de Áudio */}
      <div className="w-full flex justify-center items-center gap-8 mb-2">
        <button
          onClick={prevSong}
          className="text-zinc-400 hover:text-white transition-colors duration-150 p-2"
          aria-label="Música anterior"
        >
          <SkipBack className="w-6 h-6 fill-current" />
        </button>

        <button
          onClick={togglePlay}
          className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-150 shadow-lg active:scale-95"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-current text-black" />
          ) : (
            <Play className="w-6 h-6 fill-current text-black ml-1" />
          )}
        </button>

        <button
          onClick={nextSong}
          className="text-zinc-400 hover:text-white transition-colors duration-150 p-2"
          aria-label="Próxima música"
        >
          <SkipForward className="w-6 h-6 fill-current" />
        </button>
      </div>

      <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] mt-4 font-semibold uppercase tracking-wider">
        <Music className="w-3 h-3 text-pink-500 animate-bounce" />
        <span>Nossa Trilha Sonora</span>
      </div>
    </div>
  );
}
