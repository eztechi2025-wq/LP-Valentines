"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { namoradosData } from "@/content/namorados";

export function MessageCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const messages = namoradosData.messages;
  const slideDuration = 6000; // 6 segundos por mensagem

  // Efeito para o temporizador automático estilo Stories
  useEffect(() => {
    setProgress(0);
    const interval = 100; // Atualiza a cada 100ms
    const step = (interval / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <section className="w-full max-w-lg mx-auto px-6 py-12 flex flex-col items-center">
      {/* Container dos Cards no Estilo Stories */}
      <div className="w-full aspect-[4/5] rounded-3xl p-8 wrapped-glass neon-border-pink relative overflow-hidden flex flex-col justify-between select-none bg-wrapped-gradient-2">
        {/* Barras de Progresso no Topo */}
        <div className="absolute top-4 left-6 right-6 flex gap-1.5 z-20">
          {messages.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 transition-all ease-linear"
                style={{
                  width:
                    index === currentIndex
                      ? `${progress}%`
                      : index < currentIndex
                      ? "100%"
                      : "0%",
                  transitionDuration: index === currentIndex ? "100ms" : "0s",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Ícone de Aspas Superior */}
        <div className="pt-6">
          <Quote className="w-10 h-10 text-pink-500/40 rotate-180" />
        </div>

        {/* Conteúdo Central - Frases */}
        <div className="flex-1 flex items-center justify-center py-6 relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-white text-lg sm:text-xl font-medium text-center leading-relaxed tracking-wide italic"
            >
              "{messages[currentIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Rodapé do Card */}
        <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-widest border-t border-white/5 pt-4">
          <span>Para Thamires</span>
          <span>Card {currentIndex + 1} de {messages.length}</span>
        </div>

        {/* Áreas de Toque Invisíveis para Navegação Lateral */}
        <div className="absolute inset-y-0 left-0 w-1/4 z-10 cursor-pointer" onClick={handlePrev}></div>
        <div className="absolute inset-y-0 right-0 w-1/4 z-10 cursor-pointer" onClick={handleNext}></div>
      </div>

      {/* Botões de Controles Visuais Abaixo */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
          aria-label="Mensagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
          aria-label="Próxima mensagem"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
