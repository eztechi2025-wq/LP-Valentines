"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock, Calendar, MessageSquare, Compass, Activity, Sparkles } from "lucide-react";
import { namoradosData } from "@/content/namorados";

export function WrappedStats() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(namoradosData.startDate + "T00:00:00");
      const now = new Date();
      const difference = now.getTime() - start.getTime();

      if (difference <= 0) return;

      // Cálculo simples de tempo corrido
      let seconds = Math.floor(difference / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      // Calcular Anos, Meses e Dias de forma mais exata
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let calcDays = now.getDate() - start.getDate();

      if (calcDays < 0) {
        months -= 1;
        // Obter número de dias no mês anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        calcDays += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setTimeElapsed({
        years,
        months,
        days: calcDays,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const iconMap = [
    <Calendar key="cal" className="w-6 h-6 text-pink-400" />,
    <MessageSquare key="msg" className="w-6 h-6 text-purple-400" />,
    <Sparkles key="spark" className="w-6 h-6 text-green-400" />,
    <Activity key="act" className="w-6 h-6 text-yellow-400" />,
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
      {/* Título da Seção */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Nossa <span className="text-pink-500 neon-glow-pink">Retrospectiva do Amor</span>
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          Os números que explicam a nossa sintonia e provam que fomos feitos um para o outro.
        </p>
      </div>

      {/* Contador de Tempo Real */}
      <div className="w-full rounded-3xl p-6 sm:p-8 wrapped-glass neon-border-pink mb-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-zinc-400 text-xs tracking-wider uppercase font-bold mb-4">
          <Clock className="w-4 h-4 text-pink-500 animate-spin" style={{ animationDuration: "10s" }} />
          <span>Contador de Amor em Tempo Real</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Tempo compartilhado desde {new Date(namoradosData.startDate + "T00:00:00").toLocaleDateString('pt-BR')}
        </h3>

        {/* Blocos do Contador */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 w-full">
          {[
            { label: "Anos", value: timeElapsed.years },
            { label: "Meses", value: timeElapsed.months },
            { label: "Dias", value: timeElapsed.days },
            { label: "Horas", value: timeElapsed.hours },
            { label: "Minutos", value: timeElapsed.minutes },
            { label: "Segundos", value: timeElapsed.seconds },
          ].map((item, idx) => (
            <div key={idx} className="bg-black/40 rounded-xl p-3 border border-white/5 flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-pink-400 tracking-tight leading-none mb-1">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid de Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {namoradosData.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-2xl p-6 wrapped-glass hover:bg-white/[0.08] transition-all duration-300 border border-white/10 hover:border-pink-500/30 flex items-start gap-4"
          >
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              {iconMap[idx % iconMap.length]}
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none block mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-pink-300 tracking-wide block mb-2">
                {stat.label}
              </span>
              {stat.description && (
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {stat.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
