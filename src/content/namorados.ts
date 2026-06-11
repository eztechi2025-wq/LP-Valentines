export interface Song {
  title: string;
  artist: string;
  youtubeId: string;
  coverUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface NamoradosData {
  coupleNames: {
    first: string;
    second: string;
  };
  startDate: string; // YYYY-MM-DD
  engagementDate: string; // YYYY-MM-DD
  mainSongs: Song[];
  stats: StatItem[];
  timeline: TimelineItem[];
  messages: string[];
  gallery: GalleryItem[];
}

export const namoradosData: NamoradosData = {
  coupleNames: {
    first: "Itamar",
    second: "Thamires",
  },
  startDate: "2021-01-17",
  engagementDate: "2025-11-29",
  mainSongs: [
    {
      title: "O Que Combina é Você",
      artist: "Zé Henrique & Gabriel",
      youtubeId: "Duz7pbWgttI",
      coverUrl: "/images/namorados/capa-combina-voce.jpg",
    },
    {
      title: "No céu dos braços teus",
      artist: "Di Paullo & Paulino (El Condor Pasa)",
      youtubeId: "d-15ZhbRvXQ",
      coverUrl: "/images/namorados/capa-no-ceu.jpg",
    },
  ],
  stats: [
    { value: "5+ Anos", label: "História Juntos", description: "Construindo sonhos lado a lado" },
    { value: "15.8K+", label: "Mensagens & Áudios", description: "Compartilhando o dia a dia" },
    { value: "Infinitos", label: "Planos & Sonhos", description: "Construindo nosso futuro juntos" },
    { value: "99.9%", label: "De Sintonia Pura", description: "Maior do que 99% dos casais no mundo" },
  ],
  timeline: [
    {
      date: "17/01/2021",
      title: "O Início de Tudo",
      description: "O dia em que decidimos dar o passo mais bonito e oficializamos nosso namoro. Ali começava a nossa melhor história.",
      image: "/images/namorados/namoro.png",
    },
    {
      date: "29/11/2025",
      title: "O Pedido de Noivado",
      description: "No Santuário Nacional de Aparecida, diante de Nossa Senhora, dissemos o 'sim' mais importante das nossas vidas rumo ao altar.",
      image: "/images/namorados/noivado.png",
    },
    {
      date: "Hoje",
      title: "Nossa Retrospectiva",
      description: "Cada dia que passa confirma que fomos feitos um para o outro. Prontos para os próximos capítulos do nosso amor!",
      image: "/images/namorados/hoje.jpg",
    },
  ],
  messages: [
    "Thamires, você é a minha melhor retrospectiva de todos os anos.",
    "Desde as conversas de madrugada até cada momento que tornou o nosso amor ainda mais forte...",
    "Cada segundo ao seu lado é como ouvir a nossa música favorita pela primeira vez.",
    "Prometo te amar e te escolher todos os dias, em cada novo capítulo da nossa história.",
  ],
  gallery: [
    { src: "/images/namorados/galeria-1.png", alt: "Thamires e Itamar em Ubatuba", caption: "Nossos rodeios" },
    { src: "/images/namorados/galeria-2.png", alt: "Nossa cumplicidade de sempre", caption: "Parceiros em todas as loucuras e conquistas" },
    { src: "/images/namorados/galeria-3.png", alt: "Noivado em Aparecida", caption: "Não vejo a hora de estarmos assim todas as noites" },
    { src: "/images/namorados/galeria-4.png", alt: "Sorrisos de domingo", caption: "A paz de estar com a melhor companhia do mundo" },
  ],
};
