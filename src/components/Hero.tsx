import React from "react";
import { ArrowDown, CheckCircle2, Play, Users } from "lucide-react";

interface HeroProps {
  onScrollToVideo: () => void;
  onScrollToConversion: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToVideo,
  onScrollToConversion
}) => {
  return (
    <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden bg-white">
      {/* Subtle ambient lighting with soft red/rose and indigo hint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.05) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at 80% 25%, rgba(244, 63, 94, 0.04) 0%, rgba(255, 255, 255, 0) 50%)"
        }}
      />

      {/* Subtle fine dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Kicker with subtle red indicator */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider text-slate-500 uppercase mb-4">
          <span className="inline-flex items-center gap-1.5 text-red-600 bg-red-50 border border-red-200/70 px-2.5 py-0.5 rounded-full font-extrabold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            Aula Gratuita
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-800 font-extrabold">Edição Audiovisual com IA</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Workflow Completo</span>
        </div>

        {/* Main Headline with subtle red gradient touch on key outcome */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.12] text-balance max-w-4xl mx-auto">
          Como Editar Vídeos Virais com IA em Escala{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
            sem Edição Manual
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Descubra o fluxo prático e as ferramentas certas para criar conteúdos de alta retenção,
          automatizando roteirização, voz, geração de cenas e sincronização de cortes em minutos.
        </p>

        {/* Trust points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
            Comunidade Gratuita
          </span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
            Prompt Mestre Incluso
          </span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
            Repositório GitHub Aberto
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onScrollToVideo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border border-slate-800"
          >
            <Play className="w-4 h-4 fill-current text-red-500" />
            <span>Assistir à Aula</span>
          </button>

          <button
            onClick={onScrollToConversion}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200 cursor-pointer"
          >
            <Users className="w-4 h-4 text-slate-600" />
            <span>Acessar Comunidade & Mentoria</span>
          </button>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={onScrollToVideo}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
          >
            <span>Assista ao vídeo da aula logo abaixo</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-slate-400 group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
