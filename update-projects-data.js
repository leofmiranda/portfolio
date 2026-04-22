#!/usr/bin/env node

/**
 * Script para atualizar projects.ts com as imagens locais
 * Uso: node update-projects-data.js
 */

const fs = require("fs");
const path = require("path");

const projectsData = [
  {
    id: 1,
    title: "Tegra Incorporadora",
    category: "Social Media / Content Strategy",
    year: 2023,
    tags: ["Social Media", "Strategy", "Content"],
    src: "/images/project-1/1.png",
    description:
      "Desenvolvimento estratégico de conteúdos para redes sociais (Instagram, LinkedIn, Facebook, TikTok e Pinterest) com planejamento tático, produção e relatórios analíticos.",
    images: [
      "/images/project-1/2.png",
      "/images/project-1/3.png",
    ],
    team: [
      { name: "Leonardo Miranda", role: "Social Media Strategist" },
      { name: "Designer", role: "Visual Design" },
    ],
  },
  {
    id: 2,
    title: "Bradesco",
    category: "Advertising / Media",
    year: 2022,
    tags: ["Advertising", "Media", "Broadcast"],
    src: "/images/project-2/1.jpg",
    description:
      "Roteiros, direcionais e peças publicitárias online/offline para campanhas de promoção de produtos. Desenvolvimento de merch para o Programa do Faustão e materiais para mídia de diversos formatos.",
    images: [
      "/images/project-2/2.jpg",
      "/images/project-2/3.jpg",
    ],
    team: [
      { name: "Leonardo Miranda", role: "Copywriter" },
      { name: "Art Director", role: "Visual Direction" },
    ],
  },
  {
    id: 3,
    title: "Fuleco",
    category: "Social Media Management",
    year: 2014,
    tags: ["Social Media", "Community", "Viral"],
    src: "/images/project-3/1.png",
    description:
      "Gerenciamento de redes sociais do mascote oficial da Copa do Mundo 2014. Produção de conteúdo para Facebook e Twitter, atingindo mais de 3 milhões de fãs durante o evento.",
    images: [
      "/images/project-3/2.png",
      "/images/project-3/3.png",
    ],
    team: [{ name: "Leonardo Miranda", role: "Social Media Manager" }],
  },
  {
    id: 4,
    title: "Procter & Gamble Health",
    category: "Copywriting / Campaign",
    year: 2023,
    tags: ["Copywriting", "Healthcare", "Campaign"],
    src: "https://picsum.photos/seed/pghealth/600/750",
    description: "Desenvolvimento de campanhas publicitárias para produtos de saúde.",
    images: ["https://picsum.photos/seed/pghealth1/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Copywriter" }],
  },
  {
    id: 5,
    title: "Scania",
    category: "B2B Marketing",
    year: 2023,
    tags: ["B2B", "Marketing", "Industrial"],
    src: "https://picsum.photos/seed/scania/600/750",
    description: "Estratégia de marketing B2B e desenvolvimento de conteúdo.",
    images: ["https://picsum.photos/seed/scania1/800/600"],
    team: [{ name: "Leonardo Miranda", role: "Marketing Manager" }],
  },
];

const projectsFile = path.join(__dirname, "data", "projects.ts");

const tsContent = `export interface Project {
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
${projectsData
  .map(
    (p) => `  {
    id: ${p.id},
    title: "${p.title}",
    category: "${p.category}",
    year: ${p.year},
    tags: [${p.tags.map((t) => `"${t}"`).join(", ")}],
    src: "${p.src}",
    description: "${p.description}",
    images: [${p.images.map((i) => `"${i}"`).join(", ")}],
    team: [${p.team
      .map(
        (t) =>
          `{ name: "${t.name}", role: "${t.role}" }`
      )
      .join(", ")}],
  }`
  )
  .join(",\n")}
];
`;

try {
  fs.writeFileSync(projectsFile, tsContent, "utf-8");
  console.log("✅ projects.ts atualizado com sucesso!\n");
  console.log("📍 Caminho: data/projects.ts");
  console.log(`📊 ${projectsData.length} projetos configurados`);
} catch (error) {
  console.error("❌ Erro ao atualizar projects.ts:", error.message);
  process.exit(1);
}
