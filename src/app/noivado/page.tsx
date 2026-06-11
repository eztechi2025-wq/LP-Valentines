"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Heart, Sparkles, MapPin } from "lucide-react";
import { namoradosData } from "@/content/namorados";

import "@/styles/namorados.css";

export default function NoivadoPage() {
  const start = new Date(namoradosData.startDate + "T00:00:00");
  const engagement = new Date(namoradosData.engagementDate + "T00:00:00");
  
  // Calcular diferença de tempo entre o início e o noivado
  const diffTime = Math.abs(engagement.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const years = Math.floor(diffDays / 365);
  const remainingDays = diffDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  return (
    <div className="theme-wrapped bg-wrapped-gradient-noivado min-h-screen text-white flex flex-col justify-between">
      {/* Cabeçalho de Navegação */}
      <header className="w-full max-w-4xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider p-2 rounded-full bg-white/5 border border-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Link>
        
        <span className="flex items-center gap-1.5 text-xs font-bold text-yellow-500 uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
          <span>O Grande Sim</span>
        </span>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-8 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center mb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Nosso <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Noivado</span>
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 font-semibold mb-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Santuário Nacional de Nossa Senhora da Aparecida, SP</span>
          </div>
          <span className="text-sm font-bold text-yellow-400/90 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
            29 de Novembro de 2025
          </span>
        </motion.div>

        {/* Foto de Destaque do Noivado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden border border-yellow-500/20 bg-zinc-900 shadow-2xl mb-8 group"
        >
          <Image
            src="/images/namorados/noivado.png"
            alt="Nosso Noivado em Aparecida"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-pink-500 fill-current" />
              <span>O dia mais feliz da nossa vida</span>
            </span>
          </div>
        </motion.div>

        {/* Mensagem e Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full rounded-2xl p-6 sm:p-8 wrapped-glass border border-white/5 text-center mb-8 bg-[#121212]/40"
        >
          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-medium mb-6 italic">
            "Foi sob o manto e as bênçãos de Nossa Senhora da Aparecida que confirmamos nosso amor e demos o passo mais bonito em direção ao altar. Depois de {years} anos, {months} meses e {days} dias de namoro, começamos uma nova contagem regressiva... a do nosso eterno felizes para sempre."
          </p>

          <div className="border-t border-white/5 pt-6 grid grid-cols-3 gap-2 text-center">
            <div className="bg-black/30 rounded-xl p-3">
              <span className="text-2xl font-extrabold text-yellow-400 block">{years} Anos</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">de Namoro</span>
            </div>
            <div className="bg-black/30 rounded-xl p-3">
              <span className="text-2xl font-extrabold text-yellow-400 block">{months} Meses</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">adicionais</span>
            </div>
            <div className="bg-black/30 rounded-xl p-3">
              <span className="text-2xl font-extrabold text-yellow-400 block">{days} Dias</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">de cumplicidade</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Navegação Inferior de Seções */}
      <div className="w-full max-w-lg mx-auto px-6 pb-12 flex flex-col sm:flex-row gap-4 items-center justify-center z-10">
        <Link 
          href="/" 
          className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-white/5 border border-white/5 text-zinc-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
        <Link 
          href="/reflexoes" 
          className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-102 active:scale-95 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border border-emerald-400/30"
        >
          <span>Ler Reflexões</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Rodapé */}
      <footer className="w-full py-8 text-center text-[10px] text-zinc-600 font-bold tracking-widest uppercase bg-black/20 z-10 border-t border-white/5">
        Thamires & Itamar • Rumo ao Altar
      </footer>
    </div>
  );
}
