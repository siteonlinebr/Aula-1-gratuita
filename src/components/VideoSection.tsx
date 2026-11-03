import React from "react";
import { FileText, ArrowDown, Play } from "lucide-react";

export const VideoSection: React.FC = () => {
  // YouTube video embed for lMv8xCi3vLY
  const youtubeEmbedUrl = "https://www.youtube-nocookie.com/embed/lMv8xCi3vLY?rel=0&modestbranding=1";

  return (
    <section id="masterclass" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header with subtle red accent */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            <span className="inline-flex items-center gap-1.5 text-red-600 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Vídeo Oficial
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Aula Prática</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight text-center">
            Assista à Aula: Como Editar com IA via Repositório do GitHub
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal text-center">
            Acompanhe o método prático que conecta as ferramentas certas à sincronização automática no repositório.
          </p>
        </div>

        {/* Video Player Container with YouTube Embed */}
        <div
          id="main-video-container"
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl transition-all mx-auto"
        >
          <iframe
            src={youtubeEmbedUrl}
            title="Como Editar com IA via Repositório do GitHub — Aula Completa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            className="w-full h-full border-0 rounded-2xl"
          />
        </div>

        {/* Shortcut Banner Directly Below the Video with subtle red accent on hover */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-xs sm:text-sm text-slate-600 font-medium">
            Procurando os arquivos e o prompt citados no vídeo?
          </span>
          <a
            href="#material-apoio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-white bg-white hover:bg-slate-900 border border-slate-300 hover:border-slate-900 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer group"
          >
            <FileText className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-colors" />
            <span>Acessar Materiais (Prompt e Ferramentas)</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-red-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
