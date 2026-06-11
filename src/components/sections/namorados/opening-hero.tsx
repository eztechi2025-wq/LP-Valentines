"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { namoradosData } from "@/content/namorados";

interface OpeningHeroProps {
  onStartClick: () => void;
}

export function OpeningHero({ onStartClick }: OpeningHeroProps) {
  return (
    <section className="min-h-screen min-h-dvh flex flex-col justify-between items-center text-center px-6 py-12 relative overflow-hidden bg-wrapped-gradient-1">
      {/* Elementos Decorativos Flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] left-[10%] opacity-20 text-pink-500"
        >
          <Heart className="w-12 h-12 fill-current" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[25%] right-[10%] opacity-20 text-pink-500"
        >
          <Heart className="w-16 h-16 fill-current" />
        </motion.div>
        
        <motion.div
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[15%] text-purple-500"
        >
          <Heart className="w-8 h-8 fill-current" />
        </motion.div>
      </div>

      {/* Header Superior - Ano */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 tracking-[0.2em] text-pink-300 uppercase">
          Especial Dia dos Namorados
        </span>
      </motion.div>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col justify-center items-center z-10 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-pink-500 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
          <div className="relative w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center shadow-xl animate-heart-beat">
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Nossa <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent neon-glow-pink">
            Retrospectiva
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-zinc-300 text-base sm:text-lg mb-8 max-w-sm font-medium"
        >
          Um espaço dedicado a contar a trilha sonora e os momentos mais lindos de{" "}
          <strong className="text-white font-semibold">
            {namoradosData.coupleNames.first} & {namoradosData.coupleNames.second}
          </strong>
          .
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartClick}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-sm tracking-widest text-white uppercase shadow-[0_0_25px_rgba(236,72,153,0.5)] border border-pink-400 hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] active:from-pink-600 active:to-purple-700 transition-all duration-300 cursor-pointer"
        >
          Iniciar Experiência
        </motion.button>
      </div>

      {/* Footer Inferior com Instrução */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="z-10"
      >
        <span className="text-[10px] text-zinc-400 tracking-widest uppercase">
          Role ou clique para explorar
        </span>
      </motion.div>
    </section>
  );
}
