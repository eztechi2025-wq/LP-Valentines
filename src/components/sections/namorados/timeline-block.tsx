"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { namoradosData } from "@/content/namorados";

export function TimelineBlock() {
  const timeline = namoradosData.timeline;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16">
      {/* Título da Seção */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Nossa <span className="text-pink-500 neon-glow-pink">História</span>
        </h2>
        <p className="text-sm text-zinc-400 max-w-sm mx-auto">
          Uma jornada de amor, cumplicidade e sonhos construídos ano após ano.
        </p>
      </div>

      {/* Conteúdo da Timeline */}
      <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-8 sm:pl-10 space-y-12 py-4">
        {timeline.map((item, idx) => {
          const isNoivado = item.date.includes("2025");
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Marcador de Círculo com Linha Neon no Hover */}
              <span className={`absolute -left-[45px] sm:-left-[53px] top-0 w-8 h-8 rounded-full border border-zinc-700 bg-[#121212] flex items-center justify-center z-10 transition-colors duration-300 ${isNoivado ? "border-yellow-500/50" : "border-pink-500/50"}`}>
                <Calendar className={`w-3.5 h-3.5 ${isNoivado ? "text-yellow-400" : "text-pink-400"}`} />
              </span>

              {/* Card de Informações */}
              <div className={`rounded-2xl overflow-hidden border border-white/5 bg-black/40 wrapped-glass p-5 sm:p-6 transition-all duration-300 hover:border-pink-500/20 hover:bg-white/[0.04]`}>
                {/* Data e Título */}
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <span className={`text-xs font-bold tracking-wider uppercase ${isNoivado ? "text-yellow-400" : "text-pink-400"}`}>
                    {item.date}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>

                {/* Imagem Real */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-zinc-800 bg-[#121212]/50 flex items-center justify-center p-2 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain transition-transform duration-500 hover:scale-102"
                    priority={idx === 0}
                  />
                </div>

                {/* Descrição */}
                <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
