import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/toolsData";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Perguntas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Dúvidas Comuns Sobre o Método
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tudo o que você precisa saber sobre o repositório, as ferramentas de IA, a comunidade e a mentoria.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-900" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
