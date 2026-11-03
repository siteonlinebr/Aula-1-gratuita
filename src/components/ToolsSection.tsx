import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Mic,
  Video,
  FolderGit2,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  Terminal
} from "lucide-react";

interface ToolsSectionProps {
  githubRepoUrl: string;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({
  githubRepoUrl
}) => {
  const [filter, setFilter] = useState<"all" | "chatgpt" | "openmontage">("all");
  const [copiedClone, setCopiedClone] = useState(false);

  const cloneCommand = `git clone ${githubRepoUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2500);
  };

  const tools = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      role: "O Mandante & Direção Criativa",
      category: "chatgpt",
      tagline: "Cria as instruções completas, pesquisa fatos verídicos e estrutura os prompts.",
      description:
        "O cérebro que comanda toda a esteira. Responsável por sugerir temas com gancho inicial forte, escrever o roteiro em 4 atos, calibrar as tags de emoção para a voz e redigir prompts cinematográficos em inglês para o Google Flow.",
      features: [
        "Pesquisa factual e verificação de fontes",
        "Roteiro de 45 a 60 segundos com alta retenção",
        "Prompts visuais em inglês para o Google Flow",
        "Tabela de minutagem para corte"
      ],
      link: "https://chatgpt.com",
      linkText: "Acessar ChatGPT"
    },
    {
      id: "antigravity",
      name: "Antigravity",
      role: "Agente Executor Autônomo",
      category: "other",
      tagline: "Agente inteligente para executar comandos e clonar o repositório.",
      description:
        "Atua diretamente no terminal executando os passos operacionais sem complicação. Clona o repositório oficial do OpenMontage via GitHub, prepara as dependências e roda as instruções de sincronização.",
      features: [
        "Clonagem direta do repositório OpenMontage",
        "Instalação automática de dependências",
        "Organização de arquivos de áudio e clipes",
        "Execução dos comandos de render"
      ],
      link: githubRepoUrl,
      linkText: "Ver Integração no GitHub"
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      role: "Narração Ultra-Realista",
      category: "other",
      tagline: "Voz humana sintetizada com expressividade e inflexões emocionais.",
      description:
        "Converte o roteiro do ChatGPT em um arquivo MP3 masterizado. Utiliza tags como [curious], [tense] e [serious] para orientar a entonação da voz, servindo de guia temporal mestre para toda a montagem.",
      features: [
        "Vozes naturais em Português Brasileiro",
        "Inflexões emocionais de suspense e curiosidade",
        "Áudio mestre com pausas naturais",
        "Normalização sonora pronta para publicação"
      ],
      link: "https://elevenlabs.io",
      linkText: "Acessar ElevenLabs"
    },
    {
      id: "google-flow",
      name: "Google Flow",
      role: "Geração de Clipes 9:16",
      category: "other",
      tagline: "Renderização de vídeos cinematográficos verticais sem textos ou distorções.",
      description:
        "Recebe os prompts em inglês gerados pelo ChatGPT e cria os clipes verticais de 8 segundos em alta definição. Utiliza os modelos Omni 1.1 Flash e Veo 3.1 com iluminação realista e som ambiente natural.",
      features: [
        "Formato vertical 9:16 para Reels e Shorts",
        "Modelos Omni 1.1 Flash e Veo 3.1 Fast",
        "Variedade de ângulos e planos de câmera",
        "Geração de som ambiente natural integrado"
      ],
      link: "https://labs.google/flow",
      linkText: "Acessar Google Flow"
    },
    {
      id: "openmontage",
      name: "OpenMontage (GitHub)",
      role: "Montagem & Sincronização Automática",
      category: "openmontage",
      tagline: "O motor de código aberto que sincroniza a fala com as imagens no corte exato.",
      description:
        "O repositório oficial que você clona via Antigravity. Recebe o áudio da narração e os clipes gerados, aplica a tabela de sincronização do ChatGPT e renderiza o vídeo vertical final em 1080x1920 a 30fps sem transições artificiais.",
      features: [
        "Sincronização semântica (imagem acompanha a fala)",
        "Movimento contínuo natural sem cortes estáticos",
        "Exportação vertical MP4 1080x1920",
        "Clonável via Antigravity ou Terminal"
      ],
      link: githubRepoUrl,
      linkText: "Repositório no GitHub"
    }
  ];

  const filteredTools =
    filter === "all"
      ? tools
      : tools.filter((t) => (filter === "chatgpt" ? t.id === "chatgpt" : t.id === "openmontage"));

  const getToolIcon = (id: string) => {
    switch (id) {
      case "chatgpt":
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case "antigravity":
        return <Layers className="w-5 h-5 text-amber-600" />;
      case "elevenlabs":
        return <Mic className="w-5 h-5 text-purple-600" />;
      case "google-flow":
        return <Video className="w-5 h-5 text-blue-600" />;
      case "openmontage":
        return <FolderGit2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div id="ferramentas" className="pt-6 pb-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified Filters as requested: Todas as Ferramentas, ChatGPT e OpenMontage */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              filter === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200"
            }`}
          >
            Todas as Ferramentas
          </button>

          <button
            onClick={() => setFilter("chatgpt")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              filter === "chatgpt"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200"
            }`}
          >
            ChatGPT (O Mandante)
          </button>

          <button
            onClick={() => setFilter("openmontage")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              filter === "openmontage"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200"
            }`}
          >
            OpenMontage (GitHub)
          </button>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all bg-white shadow-xs hover:shadow-md ${
                tool.id === "openmontage"
                  ? "border-emerald-300 md:col-span-2 bg-gradient-to-br from-white to-emerald-50/20"
                  : "border-slate-200"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      {getToolIcon(tool.id)}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900">
                        {tool.name}
                      </h4>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                        {tool.role}
                      </span>
                    </div>
                  </div>

                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                    title={tool.linkText}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  {tool.description}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {tool.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-[11px] font-medium text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Special Terminal Clone Box for OpenMontage */}
                {tool.id === "openmontage" && (
                  <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs my-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-slate-800">
                    <div className="flex items-center gap-2 overflow-x-auto">
                      <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-emerald-300 font-bold select-all">
                        {cloneCommand}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyClone}
                      className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-slate-300 hover:text-white transition-colors text-[11px] self-start sm:self-auto cursor-pointer"
                    >
                      {copiedClone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Comando</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {tool.tagline}
                </span>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-emerald-600 flex items-center gap-1 transition-colors"
                >
                  <span>{tool.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
