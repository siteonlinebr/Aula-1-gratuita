export interface ToolItem {
  id: string;
  name: string;
  badge: string;
  role: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  inputOutput: { input: string; output: string };
  actionLink: string;
  actionText: string;
  category: "planejamento" | "audio" | "video" | "montagem" | "execucao";
}

export const TOOLS_DATA: ToolItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    badge: "O Mandante & Diretor Criativo",
    role: "Direção intelectual, roteirização, prompts e plano de montagem",
    tagline: "O cérebro estratégico que coordena toda a produção audiovisual.",
    description:
      "Atua como Diretor de Produção e Roteirista com o Prompt Mestre. Realiza a pesquisa de dados verídicos, desenvolve a narrativa em 4 atos, programa as inflexões vocais para o ElevenLabs, redige os prompts detalhados em inglês para o Google Flow e entrega a planilha de minutagem para montagem.",
    features: [
      "Pesquisa factual verídica e checagem de fontes históricas/científicas",
      "Roteiro de alta retenção calibrado para 45 a 60 segundos",
      "Prompts visuais em inglês com iluminação, enquadramento e câmera",
      "Geração da tabela de sincronização semântica para o OpenMontage"
    ],
    specs: [
      { label: "Modelo Recomendado", value: "GPT-4o ou GPT-4o Canvas" },
      { label: "Idioma de Saída", value: "Prompts em Inglês / Roteiro em Português BR" },
      { label: "Função no Pipeline", value: "Cérebro Central & Orquestrador" }
    ],
    inputOutput: {
      input: 'Comando de início: "Vamos criar o próximo Reel."',
      output: "Roteiro narrado + Prompts Google Flow + Tabela de Montagem"
    },
    actionLink: "https://chatgpt.com",
    actionText: "Acessar ChatGPT",
    category: "planejamento"
  },
  {
    id: "antigravity",
    name: "Antigravity",
    badge: "Agente Executor Autônomo",
    role: "Execução automatizada de comandos e clone do repositório",
    tagline: "O agente que executa comandos no terminal e orquestra o repositório.",
    description:
      "Agente de execução autônoma utilizado para clonar o repositório oficial do OpenMontage via GitHub, preparar as dependências, organizar as pastas de clipes e áudios, e rodar as instruções de montagem sem que você precise digitar comandos manuais complexos no terminal.",
    features: [
      "Clonagem direta do repositório OpenMontage via terminal",
      "Instalação automática de dependências e ambientes de execução",
      "Organização e renomeação em lote dos arquivos de vídeo e áudio",
      "Execução do pipeline de renderização e exportação final"
    ],
    specs: [
      { label: "Ambiente", value: "Terminal / Bash / Node.js" },
      { label: "Função no Pipeline", value: "Automação Operacional & Execução" },
      { label: "Integração", value: "GitHub + OpenMontage" }
    ],
    inputOutput: {
      input: "URL do GitHub + Instruções de montagem do ChatGPT",
      output: "Repositório clonado, pastas preparadas e render disparado"
    },
    actionLink: "https://github.com/calesthio/OpenMontage",
    actionText: "Ver Repositório OpenMontage",
    category: "execucao"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    badge: "Voz & Narração Ultra-Realista",
    role: "Geração de voz neural de alta retenção e expressividade",
    tagline: "A narração humana cinematográfica que ancora a retenção do vídeo.",
    description:
      "Gera a narração realista a partir do roteiro entregue pelo ChatGPT. Utiliza tags de inflexão emocional ([curious], [tense], [serious], [whispers]) para guiar a atuação da voz sintética, gerando o arquivo master em MP3 cuja minutagem exata define os cortes visuais.",
    features: [
      "Vozes ultrarrealistas em Português Brasileiro com cadência documental",
      "Tags de atuação emocional para criar suspense e viradas dramáticas",
      "Duração e pausas naturais analisadas como guia temporal do vídeo",
      "Normalização de áudio para -16 a -18 LUFS integrado"
    ],
    specs: [
      { label: "Formato de Exportação", value: "MP3 44.1kHz / 48kHz alta qualidade" },
      { label: "Duração Média", value: "45 a 60 segundos por Reel" },
      { label: "Papel Estrutural", value: "Eixo temporal mestre da montagem" }
    ],
    inputOutput: {
      input: "Texto limpo da narração com tags de entonação entre colchetes",
      output: "Arquivo de áudio MP3 masterizado para corte"
    },
    actionLink: "https://elevenlabs.io",
    actionText: "Acessar ElevenLabs",
    category: "audio"
  },
  {
    id: "google-flow",
    name: "Google Flow",
    badge: "Geração de Clipes 9:16",
    role: "Renderização de vídeo com fidelidade fotográfica e movimento natural",
    tagline: "Geração de cenas cinematográficas verticais sem textos ou deformações.",
    description:
      "Plataforma de criação de vídeo por inteligência artificial da Google. Recebe os prompts altamente descritivos em inglês preparados pelo ChatGPT e gera clipes verticais 9:16 de 8 segundos com consistência de iluminação, enquadramento realista e sons ambientais naturais.",
    features: [
      "Modelos Omni 1.1 Flash (econômico) e Veo 3.1 Fast (alta qualidade)",
      "Proporção nativa vertical 9:16 para Reels, TikToks e Shorts",
      "Variedade angular (plano geral, detalhes, closes dinâmicos)",
      "Preservação de consistência de personagens e ambientes com referências"
    ],
    specs: [
      { label: "Resolução / Formato", value: "Vertical 9:16 (1080x1920 compatível)" },
      { label: "Duração por Clipe", value: "~8 segundos por tomada" },
      { label: "Modelos Suportados", value: "Omni 1.1 Flash & Veo 3.1 Fast" }
    ],
    inputOutput: {
      input: "Prompts técnicos específicos em inglês para cada cena",
      output: "6 a 8 clipes verticais de vídeo com som ambiente"
    },
    actionLink: "https://labs.google/flow",
    actionText: "Acessar Google Flow",
    category: "video"
  },
  {
    id: "openmontage",
    name: "OpenMontage",
    badge: "Montagem & Sincronização Audiovisual",
    role: "Sincronização semântica, corte cirúrgico e exportação vertical",
    tagline: "Montagem automática precisa onde a imagem sempre acompanha a fala.",
    description:
      "O motor open-source de montagem desenvolvido no GitHub (calesthio/OpenMontage). Ele recebe a narração do ElevenLabs e os clipes do Google Flow, alinha os tempos de entrada/saída conforme a tabela do ChatGPT, corta no momento exato da fala sem transições desnecessárias e exporta em MP4 1080x1920 a 24/30fps.",
    features: [
      "Correspondência semântica obrigatória (imagem acompanha a frase dita)",
      "Proibição de imagens congeladas, zooms falsos ou Ken Burns artificial",
      "Movimento contínuo e natural de cada clipe do primeiro ao último quadro",
      "Tratamento de áudio com preservação de som ambiente sob a narração"
    ],
    specs: [
      { label: "Repositório", value: "github.com/calesthio/OpenMontage" },
      { label: "Formato de Saída", value: "MP4 H.264 / 1080x1920 (9:16)" },
      { label: "Execução", value: "Clonado e operado via Antigravity / Terminal" }
    ],
    inputOutput: {
      input: "Áudio ElevenLabs + Clipes Google Flow + Tabela de Minutagem",
      output: "Vídeo final pronto para publicação no Instagram / TikTok"
    },
    actionLink: "https://github.com/calesthio/OpenMontage",
    actionText: "Ver Código no GitHub",
    category: "montagem"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Diretoria e Roteiro no ChatGPT",
    description:
      'Ao enviar o comando "Vamos criar o próximo Reel.", o ChatGPT pesquisa o tema verídico, cria o roteiro em 4 atos, divide em 6 a 8 cenas e entrega os prompts em inglês para o Google Flow.',
    tool: "ChatGPT",
    icon: "brain"
  },
  {
    step: "02",
    title: "Narração de Alta Retenção no ElevenLabs",
    description:
      "Você cola o texto da narração com as tags emocionais ([tense], [curious], [serious]). A voz humana sintetizada é exportada em MP3 mestre.",
    tool: "ElevenLabs",
    icon: "mic"
  },
  {
    step: "03",
    title: "Geração dos Clipes no Google Flow",
    description:
      "Copie os prompts individuais em inglês para o Google Flow (Omni 1.1 ou Veo 3.1) no formato 9:16 vertical de 8 segundos, gerando cenas com iluminação cinematográfica.",
    tool: "Google Flow",
    icon: "film"
  },
  {
    step: "04",
    title: "Clone e Montagem com OpenMontage via Antigravity",
    description:
      "O Antigravity clona o repositório `OpenMontage` no GitHub. O motor processa o áudio e os clipes, sincronizando as imagens exatamente na frase falada, com exportação em 1080x1920.",
    tool: "OpenMontage + Antigravity",
    icon: "code"
  },
  {
    step: "05",
    title: "Publicação Estratégica e Viralização",
    description:
      'O ChatGPT prepara a legenda oficial começando com "O vídeo mostra...", as 5 hashtags cirúrgicas, o comentário fixado para estimular debate e a capa 9:16.',
    tool: "Diretoria ChatGPT",
    icon: "share"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a exibição do vídeo na página?",
    answer:
      "A landing page possui um player HTML5 profissional com thumbnail cinematográfica, controles completos e suporte nativo ao arquivo de vídeo que você gravou. Você pode arrastar qualquer arquivo .mp4 para o player e assistir instantaneamente, ou colocar o arquivo gravado na pasta `public/video.mp4` para carregamento automático permanente."
  },
  {
    question: "O que é o OpenMontage e como ele é clonado?",
    answer:
      "O OpenMontage é o repositório oficial hospedado em https://github.com/calesthio/OpenMontage. Ele foi projetado para receber os materiais gerados por IA e montar o Reel sincronizando fala e vídeo com precisão cirúrgica. Ele é clonado diretamente via o agente Antigravity com o comando `git clone https://github.com/calesthio/OpenMontage.git`."
  },
  {
    question: "Preciso saber programar para utilizar esse fluxo?",
    answer:
      "Não! O Prompt Mestre do ChatGPT entrega todas as instruções mastigadas e prontas para copiar. Para a parte técnica, o agente Antigravity executa os comandos no terminal e você só precisa colocar os arquivos nas pastas indicadas."
  },
  {
    question: "O grupo de WhatsApp e Telegram é realmente gratuito?",
    answer:
      "Sim, 100% gratuito. O grupo é focado em networking entre criadores, compartilhamento de novos modelos do Google Flow, prompts de alta retenção e novidades de ferramentas com IA."
  },
  {
    question: "Como funciona a Mentoria e como me inscrevo?",
    answer:
      "A mentoria é um acompanhamento direto 1-on-1 com vagas limitadas. Nela você tem chamadas individuais de planejamento de nicho, auditoria dos seus roteiros e vídeos antes de postar, e auxílio passo a passo na automação técnica. Basta clicar em 'Candidatar-se à Mentoria' para preencher a aplicação."
  },
  {
    question: "O Prompt Mestre funciona na versão gratuita do ChatGPT?",
    answer:
      "Sim, o fluxo de raciocínio, pesquisa e geração de prompts em inglês funciona em qualquer conta do ChatGPT. Usuários com planos Plus/Team contam com vantagens adicionais como análise direta de arquivos enviados e maior janela de contexto."
  }
];
