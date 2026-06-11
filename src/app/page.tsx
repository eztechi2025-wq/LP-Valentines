"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Heart, Calendar, Image as ImageIcon, Sparkles, ChevronRight, ChevronDown, BookOpen } from "lucide-react";

import { OpeningHero } from "@/components/sections/namorados/opening-hero";
import { SpotifyPlayer } from "@/components/sections/namorados/spotify-player";
import { WrappedStats } from "@/components/sections/namorados/wrapped-stats";
import { MessageCards } from "@/components/sections/namorados/message-cards";

import "@/styles/namorados.css";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="theme-wrapped bg-wrapped-gradient-1 min-h-screen relative overflow-x-hidden">
      {/* 1. Tela de Abertura */}
      <div id="opening-hero" className="w-full">
        <OpeningHero onStartClick={() => scrollToSection("player-section")} />
      </div>

      {/* 2. Player Estilo Spotify */}
      <div 
        id="player-section" 
        className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 relative"
      >
        <SpotifyPlayer />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <button 
            onClick={() => scrollToSection("messages-section")}
            className="flex flex-col items-center gap-1.5 text-[10px] font-bold text-pink-400 uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Ver Nossas Cartas</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3. Mensagens Afetivas (Stories) */}
      <div 
        id="messages-section" 
        className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 relative"
      >
        <MessageCards />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <button 
            onClick={() => scrollToSection("stats-section")}
            className="flex flex-col items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Ver Nossas Estatísticas</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* 4. Estatísticas de Relacionamento (Wrapped Cards) */}
      <div 
        id="stats-section" 
        className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 relative"
      >
        <WrappedStats />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <button 
            onClick={() => scrollToSection("explore-section")}
            className="flex flex-col items-center gap-1.5 text-[10px] font-bold text-pink-400 uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Explorar Mais Memórias</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* 5. Menu de Navegação Premium (Botões para outras rotas) */}
      <div 
        id="explore-section" 
        className="w-full min-h-screen flex flex-col justify-center items-center py-16 relative"
      >
        <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-10">
            <span className="text-pink-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Explorar Mais Memórias
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Nossos Outros Cantinhos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1: Linha do Tempo */}
            <Link href="/linha-do-tempo" className="group">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 h-full wrapped-glass border border-white/5 hover:border-pink-500/30 flex flex-col justify-between transition-all duration-300 bg-[#121212]/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                    Nossa Linha do Tempo
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    Veja os marcos mais importantes e as datas que mudaram a nossa história desde 2021.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-pink-400 font-bold uppercase tracking-widest mt-6">
                  <span>Visualizar linha</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Galeria de Fotos */}
            <Link href="/galeria" className="group">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 h-full wrapped-glass border border-white/5 hover:border-purple-500/30 flex flex-col justify-between transition-all duration-300 bg-[#121212]/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Mural de Memórias
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    Explore uma galeria fluida e moderna com nossas melhores fotos e momentos felizes.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-purple-400 font-bold uppercase tracking-widest mt-6">
                  <span>Abrir mural</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Card 3: Dedicatória Especial Noivado */}
            <Link href="/noivado" className="group">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 h-full wrapped-glass border border-white/5 hover:border-yellow-500/30 flex flex-col justify-between transition-all duration-300 bg-[#121212]/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Especial: Nosso Noivado
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    Uma página exclusiva com a nossa história e fotos do pedido inesquecível no Santuário de Aparecida.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-yellow-400 font-bold uppercase tracking-widest mt-6">
                  <span>Ver página especial</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Sabedoria & Reflexões */}
            <Link href="/reflexoes" className="group">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 h-full wrapped-glass border border-white/5 hover:border-green-500/30 flex flex-col justify-between transition-all duration-300 bg-[#121212]/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    Sabedoria & Reflexões
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    O amor sob a perspectiva das Escrituras Sagradas e do pensamento de filósofos e sociólogos renomados.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-green-400 font-bold uppercase tracking-widest mt-6">
                  <span>Ler reflexões</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* Encerramento da Experiência */}
        <footer className="w-full border-t border-white/5 py-8 text-center text-[10px] text-zinc-600 font-bold tracking-widest uppercase mt-12 bg-black/20">
          Feito com ❤️ por Itamar para Thamires • 2026
        </footer>
      </div>

      {/* Floating Side Dot Navigation */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {[
          { id: "opening-hero", label: "Abertura" },
          { id: "player-section", label: "Nossa Música" },
          { id: "messages-section", label: "Declaração" },
          { id: "stats-section", label: "Estatísticas" },
          { id: "explore-section", label: "Menu" },
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group flex items-center justify-end gap-2 text-right cursor-pointer"
            aria-label={`Ir para a seção ${sec.label}`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-white uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-md">
              {sec.label}
            </span>
            <div className="w-2.5 h-2.5 rounded-full border border-white/30 bg-white/10 group-hover:bg-pink-500 group-hover:border-pink-400 group-hover:scale-125 transition-all duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
}
