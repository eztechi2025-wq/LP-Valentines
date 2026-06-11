"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Heart, BookOpen, Quote, Sparkles } from "lucide-react";

import "@/styles/namorados.css";

export default function ReflexoesPage() {
  const biblicalQuotes = [
    {
      verse: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
      reference: "1 Coríntios 13:4-7"
    },
    {
      verse: "As muitas águas não podem apagar este amor, nem os rios afogá-lo; ainda que alguém desse todos os bens de sua casa pelo amor, certamente o desprezariam.",
      reference: "Cânticos 8:7"
    },
    {
      verse: "E, sobre tudo isto, revesti-vos do amor, que é o vínculo da perfeição.",
      reference: "Colossenses 3:14"
    },
    {
      verse: "No amor não há medo; ao contrário, o perfeito amor expulsa o medo, porque o medo supõe castigo. Aquele que tem medo não está aperfeiçoado no amor.",
      reference: "1 João 4:18"
    }
  ];

  const philosophicalQuotes = [
    {
      quote: "Ao toque do amor, todos se tornam poetas.",
      author: "Platão",
      title: "Filósofo da Grécia Antiga"
    },
    {
      quote: "O amor é composto por uma única alma habitando dois corpos.",
      author: "Aristóteles",
      title: "Filósofo Grego"
    },
    {
      quote: "O amor maduro diz: 'Preciso de ti porque te amo'. O amor infantil diz: 'Amo-te porque preciso de ti'.",
      author: "Erich Fromm",
      title: "Sociólogo e Psicanalista"
    },
    {
      quote: "O amor não encontra seu sentido no desejo de coisas feitas, mas no compromisso de construir coisas juntos.",
      author: "Zygmunt Bauman",
      title: "Sociólogo de 'Amor Líquido'"
    }
  ];

  return (
    <div className="theme-wrapped bg-wrapped-gradient-2 min-h-screen text-white flex flex-col justify-between">
      {/* Cabeçalho de Navegação */}
      <header className="w-full max-w-4xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider p-2 rounded-full bg-white/5 border border-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Link>
        
        <span className="flex items-center gap-1.5 text-xs font-bold text-green-500 uppercase tracking-widest">
          <BookOpen className="w-4 h-4 text-green-400" />
          <span>Sabedoria do Amor</span>
        </span>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8 flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Sabedoria & <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent neon-glow-green">Reflexões</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Palavras atemporais que descrevem a força, a paciência e a maturidade de amar e ser amado.
          </p>
        </motion.div>

        {/* Grid de Seções */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Coluna 1: O Amor na Bíblia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
              <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
              <h2 className="text-xl font-bold text-white uppercase tracking-wider">Nas Escrituras Sagradas</h2>
            </div>

            {biblicalQuotes.map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl p-6 wrapped-glass border border-white/5 hover:border-green-500/20 transition-all duration-300 hover:bg-white/[0.03] flex flex-col justify-between"
              >
                <p className="text-zinc-200 text-sm leading-relaxed font-medium italic mb-4">
                  "{item.verse}"
                </p>
                <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-green-400 tracking-wide uppercase">
                  <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                  <span>{item.reference}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Coluna 2: O Amor na Filosofia & Sociologia */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
              <Quote className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white uppercase tracking-wider">Filosofia & Sociologia</h2>
            </div>

            {philosophicalQuotes.map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl p-6 wrapped-glass border border-white/5 hover:border-purple-500/20 transition-all duration-300 hover:bg-white/[0.03] flex flex-col justify-between"
              >
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-semibold mb-4 text-left">
                  "{item.quote}"
                </p>
                <div className="text-right">
                  <span className="text-xs font-bold text-purple-400 tracking-wide block uppercase">
                    {item.author}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-semibold block mt-0.5">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dedicatória Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-3xl rounded-3xl p-6 sm:p-8 wrapped-glass border border-white/5 hover:border-pink-500/20 text-center mb-8 bg-[#121212]/40 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-pink-500 to-purple-500"></div>
          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-medium mb-4 italic">
            "Thamires, que a sabedoria destas palavras sagradas e o ensinamento de grandes mentes guiem e inspirem a nossa caminhada juntos. O nosso noivado é o começo de uma vida inteira construindo e vivendo esse amor puro e real. Te amo!"
          </p>
          <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest bg-pink-500/10 px-3 py-1.5 rounded-full border border-pink-500/20">
            Itamar & Thamires
          </span>
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
          href="/linha-do-tempo" 
          className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-102 active:scale-95 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border border-pink-400/30"
        >
          <span>Nossa Linha do Tempo</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Rodapé */}
      <footer className="w-full py-8 text-center text-[10px] text-zinc-600 font-bold tracking-widest uppercase bg-black/20 z-10 border-t border-white/5">
        Thamires & Itamar • Sabedoria Eterna
      </footer>
    </div>
  );
}
