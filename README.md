# Landing Page — Edição Audiovisual com IA

Landing page moderna focada em conversão para produção e edição de vídeos curtos (Reels, Shorts, TikTok) com Inteligência Artificial.

## 🚀 Como Hospedar no GitHub (GitHub Pages) em 2 Minutos

Como você já criou o repositório no GitHub, siga estes passos simples para subir o código:

### 1. Conectar e Subir o Código
No terminal da sua máquina (dentro da pasta do projeto):

```bash
# 1. Inicializar o git (caso ainda não esteja inicializado)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "feat: landing page de conversão pronta para produção"

# 4. Definir a branch principal como main
git branch -M main

# 5. Conectar com o seu repositório do GitHub (troque pelo link do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 6. Enviar para o GitHub
git push -u origin main
```

---

### 2. Ativar o GitHub Pages no seu Repositório

1. Abra o seu repositório no GitHub pelo navegador.
2. Clique na aba **Settings** (Configurações) no topo.
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment** > **Source**, selecione: **GitHub Actions**.
5. Pronto! O workflow configurado em `.github/workflows/deploy.yml` fará o build e publicará seu site automaticamente em poucos segundos. O link do seu site estará disponível na própria página de Pages (ex: `https://seu-usuario.github.io/seu-repositorio/`).

---

## 🛠️ Tecnologias Utilizadas
- **React 19 & TypeScript**
- **Vite 6** (configurado com caminho relativo `./` para rodar perfeitamente no GitHub Pages)
- **Tailwind CSS v4**
- **Lenis Smooth Scroll** (rolagem fluida e suave)
- **YouTube Embed** (player oficial de alta performance integrado)
