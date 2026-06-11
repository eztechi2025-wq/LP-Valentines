"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, Heart, Maximize2 } from "lucide-react";
import { namoradosData } from "@/content/namorados";

export function GalleryGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const gallery = namoradosData.gallery;

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Mural de <span className="text-pink-500 neon-glow-pink">Memórias</span>
        </h2>
        <p className="text-sm text-zinc-400 max-w-sm mx-auto">
          Alguns dos registros mais felizes que guardamos no coração e agora nesta tela.
        </p>
      </div>

      {/* Grid de Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {gallery.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(idx)}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-[#121212]/50 hover:bg-[#121212]/70 flex items-center justify-center p-3 sm:p-4 shadow-xl"
          >
            {/* Foto Real */}
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            {/* Overlay de Hover Premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center gap-1 text-[10px] text-pink-400 font-bold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-current text-pink-500 animate-pulse" />
                  <span>Nossa Memória</span>
                </span>
                <Maximize2 className="w-4 h-4 text-white/70" />
              </div>
              <p className="text-sm font-semibold text-white truncate">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de Zoom de Foto */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex flex-col justify-center items-center p-4 select-none"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all z-20 cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Container da Imagem no Modal */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl max-h-[70vh] aspect-square rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-black/40 p-4"
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
            >
              <Image
                src={gallery[selectedPhoto]!.src}
                alt={gallery[selectedPhoto]!.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Legenda do Modal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white text-base font-bold mb-1">
                {gallery[selectedPhoto]!.caption}
              </p>
              <p className="text-zinc-400 text-xs font-semibold">
                {gallery[selectedPhoto]!.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
