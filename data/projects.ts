export interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  tags: string[];
  src: string;
  images?: string[];
  description?: string;
  team?: { name: string; role: string }[];
  href?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tegra Incorporadora",
    category: "Social Media / Content Strategy",
    year: 2023,
    tags: ["Social Media", "Strategy", "Content"],
    src: "https://picsum.photos/seed/tegra/1200/800",
    description: "Desenvolvimento estratégico de conteúdos para redes sociais (Instagram, LinkedIn, Facebook, TikTok e Pinterest) com planejamento tático, produção e relatórios analíticos.",
    images: ["https://picsum.photos/seed/tegra1/800/600", "https://picsum.photos/seed/tegra2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Social Media Strategist" }, { name: "Designer", role: "Visual Design" }],
  },
  {
    id: 2,
    title: "Casa Vertical",
    category: "Brand Strategy",
    year: 2024,
    tags: ["Branding", "Strategy", "Design"],
    src: "https://picsum.photos/seed/casavertical/1200/800",
    description: "Estratégia de marca e desenvolvimento de identidade visual para projeto de arquitetura sustentável.",
    images: ["https://picsum.photos/seed/casavertical1/800/600", "https://picsum.photos/seed/casavertical2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Brand Strategist" }],
  },
  {
    id: 3,
    title: "Fuleco",
    category: "Social Media Management",
    year: 2014,
    tags: ["Social Media", "Community", "Viral"],
    src: "https://picsum.photos/seed/fuleco/1200/800",
    description: "Gerenciamento de redes sociais do mascote oficial da Copa do Mundo 2014. Produção de conteúdo para Facebook e Twitter, atingindo mais de 3 milhões de fãs durante o evento.",
    images: ["https://picsum.photos/seed/fuleco1/800/600", "https://picsum.photos/seed/fuleco2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Social Media Manager" }],
  },
  {
    id: 4,
    title: "Volvo",
    category: "B2B Marketing",
    year: 2023,
    tags: ["B2B", "Automotive", "Campaign"],
    src: "https://picsum.photos/seed/volvo/1200/800",
    description: "Campanha de marketing B2B para divisão de caminhões e soluções de mobilidade.",
    images: ["https://picsum.photos/seed/volvo1/800/600", "https://picsum.photos/seed/volvo2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Marketing Manager" }],
  },
  {
    id: 5,
    title: "Bradesco",
    category: "Advertising / Media",
    year: 2022,
    tags: ["Advertising", "Media", "Broadcast"],
    src: "https://picsum.photos/seed/bradesco/1200/800",
    description: "Roteiros, direcionais e peças publicitárias online/offline para campanhas de promoção de produtos. Desenvolvimento de merch para o Programa do Faustão e materiais para mídia de diversos formatos.",
    images: ["https://picsum.photos/seed/bradesco1/800/600", "https://picsum.photos/seed/bradesco2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Copywriter" }, { name: "Art Director", role: "Visual Direction" }],
  },
  {
    id: 6,
    title: "Under Armour",
    category: "Sports Marketing",
    year: 2021,
    tags: ["Sports", "Marketing", "Digital"],
    src: "https://picsum.photos/seed/underarmour/1200/800",
    description: "Campanha de marketing para lançamento de nova linha de produtos esportivos no mercado brasileiro.",
    images: ["https://picsum.photos/seed/underarmour1/800/600", "https://picsum.photos/seed/underarmour2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Creative Director" }],
  },
  {
    id: 7,
    title: "Scania",
    category: "B2B Marketing",
    year: 2023,
    tags: ["B2B", "Marketing", "Industrial"],
    src: "https://picsum.photos/seed/scania/1200/800",
    description: "Estratégia de marketing B2B e desenvolvimento de conteúdo para soluções de transporte.",
    images: ["https://picsum.photos/seed/scania1/800/600", "https://picsum.photos/seed/scania2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Marketing Manager" }],
  },
  {
    id: 8,
    title: "Tishman Speyer",
    category: "Real Estate Marketing",
    year: 2024,
    tags: ["Real Estate", "Luxury", "Development"],
    src: "https://picsum.photos/seed/tishmanspeyer/1200/800",
    description: "Estratégia de marketing para portfolio de empreendimentos imobiliários premium.",
    images: ["https://picsum.photos/seed/tishmanspeyer1/800/600", "https://picsum.photos/seed/tishmanspeyer2/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Marketing Strategist" }],
  }
];
