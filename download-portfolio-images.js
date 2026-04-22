#!/usr/bin/env node

/**
 * Script para importar imagens do portfólio antigo
 * Uso: node download-portfolio-images.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// URLs dos projetos do portfólio antigo
const projects = [
  {
    id: 1,
    title: "Tegra Incorporadora",
    url: "https://leofmiranda.myportfolio.com/tegra-incorporadora",
    images: [
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/9932e68d-5756-4bd2-9ecb-da86b3f4607b_rw_600.png",
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/14171f29-ac7a-4b4a-b0fb-9cafedd45774_rw_1200.png",
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/1fb4abfc-cdb2-437e-8eef-ecc1cf98a381_rw_600.png",
    ],
  },
  {
    id: 2,
    title: "Bradesco",
    url: "https://leofmiranda.myportfolio.com/bradesco",
    images: [
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/aeb46b62-a92a-441e-ab7b-46a3c9a760de_rw_1200.jpg",
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/6f3eb942-8a2d-4f15-9d83-1bb99ef13439_rw_1200.jpg",
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/b515e512-eb6c-4e3c-9455-163ec55e632c_rw_1200.jpg",
    ],
  },
  {
    id: 3,
    title: "Fuleco",
    url: "https://leofmiranda.myportfolio.com/fuleco",
    images: [
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/92dca861-7102-4210-9133-d5192f46bbd8_rw_600.png",
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/26b237d8-f191-4ffa-be6a-8ca5ddaa9403_rw_600.png",
      "https://cdn.myportfolio.com/c6816ca1-fc49-462b-888e-eb467bdceea6/e147d245-216b-49a2-8c8e-b6eac01daf2a_rw_1200.png",
    ],
  },
];

// Criar diretório se não existir
const imagesDir = path.join(__dirname, "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Função para baixar arquivo
function downloadFile(url, destination) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve(destination);
        });
      })
      .on("error", (err) => {
        fs.unlink(destination, () => {}); // Delete the file
        reject(err);
      });
  });
}

// Função principal
async function downloadPortfolioImages() {
  console.log("🚀 Iniciando download de imagens do portfólio...\n");

  for (const project of projects) {
    console.log(`📁 Projeto: ${project.title}`);

    const projectDir = path.join(imagesDir, `project-${project.id}`);
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }

    for (let i = 0; i < project.images.length; i++) {
      const imageUrl = project.images[i];
      const ext = imageUrl.split(".").pop().split("?")[0];
      const filename = `${i + 1}.${ext}`;
      const filepath = path.join(projectDir, filename);

      try {
        console.log(`  ⬇️  Baixando ${filename}...`);
        await downloadFile(imageUrl, filepath);
        console.log(`  ✅ Salvo em: public/images/project-${project.id}/${filename}`);
      } catch (error) {
        console.error(`  ❌ Erro ao baixar ${filename}:`, error.message);
      }
    }

    console.log("");
  }

  console.log("✨ Download concluído!\n");
  console.log(
    "📝 Próximas ações:\n" +
      "1. Atualize data/projects.ts com os caminhos locais das imagens\n" +
      "2. Exemplo: src: '/images/project-1/1.png' (ao invés da URL do picsum)\n" +
      "3. Images: ['/images/project-1/2.png', '/images/project-1/3.png']"
  );
}

downloadPortfolioImages().catch(console.error);
