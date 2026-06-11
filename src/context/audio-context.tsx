"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { namoradosData } from "@/content/namorados";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

interface Song {
  title: string;
  artist: string;
  youtubeId: string;
  coverUrl: string;
}

interface AudioContextType {
  currentSongIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  apiReady: boolean;
  song: Song;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  seekTo: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [apiReady, setApiReady] = useState(false);

  const playerRef = useRef<any>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const iframeContainerId = "global-youtube-player";
  
  const songs = namoradosData.mainSongs;
  const song = songs[currentSongIndex]!;

  // 1. Load YouTube Iframe API globally
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }

    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevCallback) prevCallback();
      setApiReady(true);
    };

    return () => {
      if (window.onYouTubeIframeAPIReady === prevCallback) {
        window.onYouTubeIframeAPIReady = undefined;
      }
    };
  }, []);

  // 2. Initialize YouTube Player
  useEffect(() => {
    if (!apiReady) return;
    if (playerRef.current) return;

    playerRef.current = new window.YT.Player(iframeContainerId, {
      height: "0",
      width: "0",
      videoId: song.youtubeId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: (event: any) => {
          setDuration(event.target.getDuration() || 0);
          if (isPlaying) {
            event.target.playVideo();
          }
        },
        onStateChange: (event: any) => {
          // YT.PlayerState.ENDED = 0
          if (event.data === 0) {
            // Loop: automatically go to the next song when one ends
            setCurrentSongIndex((prev) => (prev + 1) % songs.length);
          }
          // YT.PlayerState.PLAYING = 1
          if (event.data === 1) {
            setIsPlaying(true);
          }
          // YT.PlayerState.PAUSED = 2
          if (event.data === 2) {
            setIsPlaying(false);
          }
        },
      },
    });
  }, [apiReady]);

  // 3. Monitor play/pause state changes
  useEffect(() => {
    if (!playerRef.current) return;

    try {
      const playerState = playerRef.current.getPlayerState ? playerRef.current.getPlayerState() : -1;
      if (isPlaying) {
        if (playerState !== 1 && playerRef.current.playVideo) {
          playerRef.current.playVideo();
        }
      } else {
        if (playerState === 1 && playerRef.current.pauseVideo) {
          playerRef.current.pauseVideo();
        }
      }
    } catch (e) {
      console.error("Error setting play state:", e);
    }
  }, [isPlaying]);

  // 4. Monitor song change
  useEffect(() => {
    if (!playerRef.current) return;

    try {
      const activeSong = songs[currentSongIndex]!;
      if (playerRef.current.loadVideoById) {
        if (isPlaying) {
          playerRef.current.loadVideoById(activeSong.youtubeId);
        } else {
          playerRef.current.cueVideoById(activeSong.youtubeId);
        }
        setCurrentTime(0);
        setDuration(0);
      }
    } catch (e) {
      console.error("Error loading new video:", e);
    }
  }, [currentSongIndex]);

  // 5. Monitor progress interval
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (isPlaying && playerRef.current) {
      progressIntervalRef.current = setInterval(() => {
        try {
          if (playerRef.current && playerRef.current.getCurrentTime) {
            const current = playerRef.current.getCurrentTime();
            setCurrentTime(current || 0);
            const dur = playerRef.current.getDuration();
            if (dur && dur !== duration) {
              setDuration(dur);
            }
          }
        } catch (e) {
          // Ignore if player is not fully loaded/ready
        }
      }, 500);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, currentSongIndex, duration]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const seekTo = (time: number) => {
    setCurrentTime(time);
    if (playerRef.current && playerRef.current.seekTo) {
      playerRef.current.seekTo(time, true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentSongIndex,
        isPlaying,
        currentTime,
        duration,
        apiReady,
        song,
        togglePlay,
        nextSong,
        prevSong,
        seekTo,
      }}
    >
      {children}
      {/* Hidden Global YouTube Player Container */}
      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
        <div id={iframeContainerId}></div>
      </div>
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
