"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import { GalleryGrid } from "@/components/sections/namorados/gallery-grid";

import "@/styles/namorados.css";

export default function GaleriaPage() {
  return (
    <div className="theme-wrapped bg-wrapped-gradient-1 min-h-screen text-white flex flex-col justify-between">
      {/* Cabeçalho de Navegação */}
      <header className="w-full max-w-4xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider p-2 rounded-full bg-white/5 border border-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Link>
        
        <span className="flex items-center gap-1.5 text-xs font-bold text-purple-500 uppercase tracking-widest">
          <ImageIcon className="w-4 h-4 text-purple-400" />
          <span>Nossos Registros</span>
        </span>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full z-10 flex flex-col items-center justify-center">
        <GalleryGrid />
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
          href="/noivado" 
          className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-102 active:scale-95 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border border-pink-400/30"
        >
          <span>Nosso Noivado</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Rodapé */}
      <footer className="w-full py-8 text-center text-[10px] text-zinc-600 font-bold tracking-widest uppercase bg-black/20 z-10 border-t border-white/5">
        Thamires & Itamar • Colecionando Momentos
      </footer>
    </div>
  );
}
