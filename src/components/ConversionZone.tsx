import React from "react";
import {
  MessageCircle,
  Send,
  Users,
  Compass,
  Check,
  ArrowUpRight
} from "lucide-react";

interface ConversionZoneProps {
  whatsappLink: string;
  telegramLink: string;
  onOpenMentoriaModal: () => void;
}

export const ConversionZone: React.FC<ConversionZoneProps> = ({
  whatsappLink,
  telegramLink,
  onOpenMentoriaModal
}) => {
  return (
    <section id="conversao" className="py-16 sm:py-20 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-red-500 block">
            CONECTE-SE E AVANCE
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quer aprender ainda mais?
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-amber-100/90 font-medium leading-relaxed bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl">
              A criação de vídeos com IA é apenas uma das possibilidades. Existem diversas ferramentas,
              estratégias e oportunidades que você pode explorar.
            </p>
          </div>
        </div>

        {/* Side-by-Side Cards (Exactly matching screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-md lg:max-w-none mx-auto">
          {/* CARD 1: COMUNIDADE GRATUITA */}
          <div className="rounded-2xl border border-slate-800/90 bg-[#0B111E] p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-slate-700 transition-all">
            <div>
              {/* Top Tag & Icon */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  COMUNIDADE GRATUITA
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                  <Users className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white tracking-tight">
                Comunidade Oficial
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                Escolha sua plataforma preferida para acompanhar novas ferramentas de IA,
                análises em primeira mão e tirar dúvidas com outros criadores.
              </p>

              {/* Checklist */}
              <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Avisos de novas ferramentas e atualizações em tempo real</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prompts extras e dicas rápidas de workflow</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso 100% gratuito sem mensalidade</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3 text-center sm:text-left">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                ACESSE O GRUPO GRATUITO:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/30 border border-emerald-500/60 hover:bg-emerald-900/40 hover:border-emerald-400 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>GRUPO NO WHATSAPP</span>
                </a>

                {/* Telegram Button */}
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/30 border border-cyan-500/60 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all shadow-xs"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>CANAL NO TELEGRAM</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: PROGRAMA AVANÇADO (MENTORIA EXCLUSIVA) */}
          <div className="rounded-2xl border border-slate-800/90 bg-[#0B111E] p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-slate-700 transition-all">
            <div>
              {/* Top Tag & Icon */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    PROGRAMA AVANÇADO
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-500/30">
                    Vagas Limitadas
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Compass className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white tracking-tight">
                Mentoria Exclusiva
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                Orientação aprofundada para quem deseja implementar uma esteira de produção
                audiovisual de alto padrão com IA e acelerar projetos.
              </p>

              {/* Checklist */}
              <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Acompanhamento e direcionamento direto</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Workflows avançados e modelos proprietários</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Otimização de tempo e escala de produção</span>
                </div>
              </div>
            </div>

            {/* Bottom Action: Solid Amber CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <button
                onClick={onOpenMentoriaModal}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-[#F5B544] hover:bg-[#E8A530] active:bg-[#D99520] transition-all shadow-lg hover:shadow-amber-500/20 cursor-pointer"
              >
                <span>QUERO CONHECER A MENTORIA</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
