import React from "react";
import { WORKFLOW_STEPS } from "../data/toolsData";
import { Brain, Mic, Film, Code, Share2, ArrowRight } from "lucide-react";

export const WorkflowSteps: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return <Brain className="w-5 h-5 text-indigo-600" />;
      case "mic":
        return <Mic className="w-5 h-5 text-purple-600" />;
      case "film":
        return <Film className="w-5 h-5 text-blue-600" />;
      case "code":
        return <Code className="w-5 h-5 text-emerald-600" />;
      case "share":
        return <Share2 className="w-5 h-5 text-amber-600" />;
      default:
        return <Brain className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Metodologia 5 Passos</span>
            <span aria-hidden="true">·</span>
            <span>Da Ideia à Publicação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como Funciona o Sistema na Prática
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Um fluxo linear, sem retrabalho ou indecisão criativa. Cada etapa entrega o insumo exato para a próxima.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between hover:bg-white hover:shadow-sm hover:border-slate-300 transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-slate-900 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  {step.tool}
                </span>

                <h4 className="text-sm font-bold text-slate-900 mt-2.5 leading-snug">
                  {step.title}
                </h4>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
