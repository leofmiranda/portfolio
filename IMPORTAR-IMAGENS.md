# 🎬 Guia: Importar Imagens do Portfólio Antigo

Este guia explica como importar automaticamente as imagens do seu portfólio antigo para o novo.

## 📋 Opção 1: Automática (Recomendada)

### Passo 1: Baixar todas as imagens

```bash
node download-portfolio-images.js
```

Isto vai:
- ✅ Criar pasta `public/images/project-1/`, `public/images/project-2/`, etc
- ✅ Baixar todas as imagens dos projetos
- ✅ Organizar em subpastas por projeto

**Exemplo da estrutura criada:**
```
public/
  └── images/
      ├── project-1/
      │   ├── 1.png
      │   ├── 2.png
      │   └── 3.png
      ├── project-2/
      │   ├── 1.jpg
      │   ├── 2.jpg
      │   └── 3.jpg
      └── project-3/
          ├── 1.png
          ├── 2.png
          └── 3.png
```

### Passo 2: Atualizar dados dos projetos

```bash
node update-projects-data.js
```

Isto vai:
- ✅ Atualizar `data/projects.ts` com URLs locais
- ✅ Adicionar descrições dos projetos
- ✅ Adicionar informações de equipe
- ✅ Manter os 3 primeiros projetos do seu portfólio

### Passo 3: Pronto! 🚀

Seu site já vai estar usando as imagens locais. Acesse e teste: http://localhost:3000

---

## 📝 Opção 2: Manual (Se preferir controlar)

### 1. Criar pasta de imagens

No Terminal:
```bash
mkdir -p public/images
cd public/images
mkdir project-1 project-2 project-3
```

### 2. Baixar imagens manualmente

Para cada projeto, acesse a página e:
1. Clique direito na imagem → "Salvar imagem como"
2. Salve em: `public/images/project-X/` (onde X é o número do projeto)
3. Renomeie como: `1.png`, `2.png`, `3.png`, etc

### 3. Atualizar data/projects.ts

Edite o arquivo `data/projects.ts` e substitua os `src` das imagens:

**De:**
```typescript
src: "https://picsum.photos/seed/lum1/600/750"
```

**Para:**
```typescript
src: "/images/project-1/1.png"
images: ["/images/project-1/2.png", "/images/project-1/3.png"]
```

---

## 🔗 Projetos do seu portfólio antigo

Os 3 principais projetos importados são:

1. **Tegra Incorporadora** (2023)
   - Redes sociais, conteúdo, estratégia
   - URLs base: `public/images/project-1/`

2. **Bradesco** (2022)
   - Publicidade, roteiros, mídia
   - URLs base: `public/images/project-2/`

3. **Fuleco** (2014)
   - Redes sociais, comunidade viral
   - URLs base: `public/images/project-3/`

---

## ⚠️ Dica: Se as imagens não aparecerem

1. Verifique se a pasta `public/images/` existe
2. Verifique se as imagens estão no caminho correto
3. Limpe o cache do navegador: `Ctrl+Shift+Delete`
4. Reinicie o servidor: `npm run dev`

---

## 📚 Próximos passos

Depois de importar as imagens, você pode:

1. **Adicionar mais projetos:**
   - Vá em `download-portfolio-images.js` e adicione mais URLs
   - Execute `node download-portfolio-images.js`
   - Atualize `data/projects.ts` com os novos dados

2. **Editar descrições:**
   - Abra `data/projects.ts`
   - Customize as descrições e tags de cada projeto

3. **Adicionar novos formatos:**
   - O script suporta PNG, JPG, GIF, etc
   - Basta adicionar a URL no array `images`

---

**Precisa de ajuda?** Só me chamar! 🎉
