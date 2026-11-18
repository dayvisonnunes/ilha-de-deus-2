import type { AppDB, Report, Stage, TrailEntry } from "./types";
import { IMG } from "./images";

// Conteúdo do site (versão sem nuvem). Os mutirões são definidos pela equipe
// do projeto e ficam fixos aqui; quando um novo mutirão for publicado, ele é
// adicionado neste arquivo.

type SeedReport = Omit<Report, "stage" | "stageAt" | "trail" | "note">;

function step(
  stage: Stage,
  at: string,
  extra: { note?: string; to?: string; protocol?: string } = {},
): TrailEntry {
  return { stage, at, ...extra };
}

/*
 * Trilha de acompanhamento de cada denúncia: o que o projeto fez e quando.
 * Órgão, data e protocolo fazem parte do registro público.
 */
const STEPS: Record<string, { entries: TrailEntry[]; note?: string }> = {
  r1: {
    entries: [
      step("registrado", "2026-01-18T11:20:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-01-19T09:10:00.000Z", {
        note: "Vistoria da equipe confirmou o entulho na via.",
      }),
      step("encaminhado", "2026-01-20T14:30:00.000Z", {
        to: "Autarquia de limpeza urbana — Prefeitura do Recife",
        protocol: "2026.01.014782",
        note: "Pedido formal de remoção do entulho.",
      }),
      step("resolvido_orgao", "2026-01-27T16:10:00.000Z", {
        note: "Equipe da limpeza urbana retirou o entulho. Local segue monitorado.",
      }),
    ],
    note: "Entulho retirado 9 dias após o registro, depois do encaminhamento com protocolo.",
  },
  r2: {
    entries: [
      step("registrado", "2026-02-09T14:02:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-02-10T10:20:00.000Z", {
        note: "Vazamento confirmado no local, com registro fotográfico.",
      }),
      step("encaminhado", "2026-02-12T09:15:00.000Z", {
        to: "Agência estadual de saneamento",
        protocol: "2026.02.008913",
        note: "Denúncia de esgoto a céu aberto desaguando no mangue.",
      }),
      step("sem_retorno", "2026-03-15T08:00:00.000Z", {
        note: "Prazo de 30 dias encerrado sem manifestação do órgão.",
      }),
    ],
    note: "Encaminhado em fev/2026 e cobrado novamente em maio. Sem resposta até hoje.",
  },
  r3: {
    entries: [
      step("registrado", "2026-03-14T09:40:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-03-15T11:00:00.000Z", {
        note: "Vistoria confirmou o acúmulo de lixo atrás do campo.",
      }),
      step("encaminhado", "2026-03-18T10:00:00.000Z", {
        to: "Autarquia de limpeza urbana — Prefeitura do Recife",
        protocol: "2026.03.021004",
        note: "Pedido de limpeza e de novo ponto de coleta no local.",
      }),
      step("resolvido_comunidade", "2026-03-28T11:30:00.000Z", {
        note: "Mutirão da comunidade recolheu o lixo e instalou placa de conscientização.",
      }),
    ],
    note: "Resolvido em mutirão; o pedido de novo ponto de coleta segue sem resposta.",
  },
  r4: {
    entries: [
      step("registrado", "2026-04-02T16:30:00.000Z", {
        note: "Relato recebido com registro de dois moradores.",
      }),
      step("publicado", "2026-04-03T09:00:00.000Z", {
        note: "Mancha registrada em foto no dia seguinte.",
      }),
      step("encaminhado", "2026-04-07T10:20:00.000Z", {
        to: "Agência estadual de meio ambiente",
        protocol: "2026.04.030118",
        note: "Comunicação de possível descarte de óleo por embarcação.",
      }),
      step("sem_retorno", "2026-05-10T08:00:00.000Z", {
        note: "Prazo encerrado sem resposta; o caso segue no relatório do projeto.",
      }),
    ],
    note: "Sem resposta do órgão; o caso continua no relatório de fiscalização.",
  },
  r5: {
    entries: [
      step("registrado", "2026-05-21T10:15:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-05-22T09:30:00.000Z", {
        note: "Vistoria confirmou o corte de vegetação em área de preservação.",
      }),
      step("encaminhado", "2026-05-26T11:00:00.000Z", {
        to: "Secretaria municipal de meio ambiente",
        protocol: "2026.05.027760",
        note: "Solicitação de fiscalização da área de manguezal.",
      }),
      step("sem_retorno", "2026-06-26T08:00:00.000Z", {
        note: "Prazo encerrado sem resposta.",
      }),
    ],
    note: "Caso levado também ao Ministério Público em julho de 2026, sem retorno até agora.",
  },
  r6: {
    entries: [
      step("registrado", "2026-06-11T08:50:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-06-12T10:00:00.000Z", {
        note: "Vistoria da equipe confirmou o avanço do aterro.",
      }),
      step("encaminhado", "2026-06-15T09:40:00.000Z", {
        to: "Secretaria municipal de meio ambiente",
        protocol: "2026.06.033901",
        note: "Denúncia de aterro avançando sobre área alagada.",
      }),
      step("resolvido_orgao", "2026-07-02T15:20:00.000Z", {
        note: "Fiscalização notificou o responsável e o avanço do aterro foi interrompido.",
      }),
    ],
    note: "Avanço do aterro interrompido 17 dias depois do encaminhamento.",
  },
  r7: {
    entries: [
      step("registrado", "2026-07-30T18:05:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-07-31T09:00:00.000Z", {
        note: "Registro fotográfico feito no local.",
      }),
      step("encaminhado", "2026-08-03T10:00:00.000Z", {
        to: "Secretaria municipal de meio ambiente",
        protocol: "2026.07.041223",
        note: "Pedido de fiscalização noturna na beirada do mangue.",
      }),
      step("encaminhado", "2026-09-05T09:30:00.000Z", {
        note: "O órgão respondeu pedindo prazo complementar de 60 dias para a fiscalização.",
      }),
    ],
    note: "Aguardando resposta após o órgão pedir prazo complementar.",
  },
  r8: {
    entries: [
      step("registrado", "2026-08-15T07:20:00.000Z", {
        note: "Relato recebido pelo formulário do site.",
      }),
      step("publicado", "2026-08-16T09:00:00.000Z", {
        note: "Vistoria confirmou o acúmulo de resíduos na foz do canal.",
      }),
      step("resolvido_comunidade", "2026-08-22T11:00:00.000Z", {
        note: "Ação de limpeza com voluntários retirou cerca de 60 sacos de resíduos.",
      }),
    ],
    note: "Limpeza feita em mutirão; o estudo da barreira de contenção segue em andamento.",
  },
};

/** Aplica a trilha registrada à denúncia e define a etapa atual. */
function comRastro(r: SeedReport): Report {
  const h = STEPS[r.id] ?? {
    entries: [step("registrado", r.createdAt, { note: "Relato recebido." })],
  };
  const last = h.entries[h.entries.length - 1];
  return {
    ...r,
    trail: h.entries,
    stage: last.stage,
    stageAt: last.at,
    note: h.note,
  };
}

export function buildSeedDb(): AppDB {
  return {
    reports: [
      {
        id: "r1",
        category: "residuos",
        title: "Entulho despejado na Rua São Marcos",
        description:
          "Grande quantidade de entulho e restos de obra foi despejada na beirada da via, próxima ao canal. Moradores relatam que o descarte ocorreu durante a madrugada.",
        reference: "Rua São Marcos, próximo ao canal",
        lat: -8.08795,
        lng: -34.90512,
        photoUrl: IMG.residuos,
        status: "approved",
        createdAt: "2026-01-18T11:20:00.000Z",
      },
      {
        id: "r2",
        category: "esgoto",
        title: "Esgoto a céu aberto desaguando no mangue",
        description:
          "Um cano com vazamento constante despeja esgoto direto na área de mangue, formando uma poça de odor forte que atinge o rio na maré baixa.",
        reference: "Margem do canal, lado oeste da ilha",
        lat: -8.0851,
        lng: -34.9056,
        status: "approved",
        createdAt: "2026-02-09T14:02:00.000Z",
      },
      {
        id: "r3",
        category: "residuos",
        title: "Acúmulo de lixo doméstico atrás do campo",
        description:
          "Ponto constante de descarte irregular de lixo doméstico atrás do campo de futebol. Cachorros espalham o lixo e atraem vetores.",
        reference: "Campo de futebol da comunidade",
        lat: -8.0886,
        lng: -34.9021,
        status: "approved",
        createdAt: "2026-03-14T09:40:00.000Z",
      },
      {
        id: "r4",
        category: "poluicao",
        title: "Mancha escura na água do canal",
        description:
          "Mancha escura e com cheiro de combustível apareceu na água do canal principal. Possível descarte de óleo por embarcação na madrugada.",
        reference: "Canal principal, trecho central",
        lat: -8.0846,
        lng: -34.9013,
        status: "approved",
        createdAt: "2026-04-02T16:30:00.000Z",
      },
      {
        id: "r5",
        category: "mangue",
        title: "Corte de vegetação de mangue em área de APP",
        description:
          "Vegetação nativa de mangue foi cortada em uma área considerável, provavelmente para ampliação de um aterro. Risco de erosão e perda de berçário da fauna.",
        reference: "Trecho sul do manguezal",
        lat: -8.089,
        lng: -34.9036,
        photoUrl: IMG.mangue,
        status: "approved",
        createdAt: "2026-05-21T10:15:00.000Z",
      },
      {
        id: "r6",
        category: "ocupacao",
        title: "Aterro avançando sobre área alagada",
        description:
          "Novo aterro com resíduos de construção avança sobre a área alagada na porção leste da ilha, reduzindo o espelho d'água que regula as cheias.",
        reference: "Porção leste da ilha",
        lat: -8.0862,
        lng: -34.9007,
        status: "approved",
        createdAt: "2026-06-11T08:50:00.000Z",
      },
      {
        id: "r7",
        category: "residuos",
        title: "Restos de construção na beirada do mangue",
        description:
          "Novo despejo de restos de construção na beirada do mangue, a poucos metros da água. Comunidade pede fiscalização noturna.",
        reference: "Beirada do mangue, acesso oeste",
        lat: -8.088,
        lng: -34.904,
        status: "approved",
        createdAt: "2026-07-30T18:05:00.000Z",
      },
      {
        id: "r8",
        category: "residuos",
        title: "Lixo acumulado na foz do canal",
        description:
          "Materiais plásticos e embalagens se acumulam na foz do canal após as marés altas, vindos do trecho urbano a montante.",
        reference: "Foz do canal, extremo norte",
        lat: -8.0849,
        lng: -34.9029,
        status: "approved",
        createdAt: "2026-08-15T07:20:00.000Z",
      },
      {
        id: "r9",
        category: "queimada",
        title: "Queima de lixo próxima às casas",
        description:
          "Fumaça intensa vinda da queima de lixo e galhadas perto das casas de madeira. Crianças e idosos passam mal com a fumaça.",
        reference: "Viela central, entre as casas",
        lat: -8.0873,
        lng: -34.9012,
        status: "pending",
        createdAt: "2026-09-01T13:10:00.000Z",
      },
      {
        id: "r10",
        category: "residuos",
        title: "Novo ponto de descarte em via de acesso",
        description:
          "Sofás velhos e entulho foram abandonados na via de acesso à comunidade, dificultando a passagem e acumulando água da chuva.",
        reference: "Via de acesso à comunidade",
        lat: -8.0857,
        lng: -34.9038,
        status: "pending",
        createdAt: "2026-09-02T09:25:00.000Z",
      },
    ].map(comRastro),
    events: [
      {
        id: "e1",
        title: "Mutirão de limpeza do canal do Pina",
        description:
          "Mutirão mensal para retirar resíduos das margens do canal e da foz. Material será separado: recicláveis seguem para a associação, orgânicos para compostagem comunitária. Leve luvas, nós oferecemos sacos e lanche coletivo.",
        locationName: "Ponte de acesso à Ilha de Deus",
        date: "2026-09-19",
        startTime: "08:00",
        endTime: "11:30",
        volunteersTarget: 30,
        signupCount: 10,
        proposerName: "Equipe Somos Ilha de Deus",
        status: "approved",
        createdAt: "2026-08-20T10:00:00.000Z",
      },
      {
        id: "e2",
        title: "Plantio de mudas de mangue na margem norte",
        description:
          "Oficina de educação ambiental seguida de plantio de mudas de mangue-vermelho na margem norte, em área antes degradada. Acompanhamento trimestral das mudas pelos moradores.",
        locationName: "Margem norte da ilha",
        date: "2026-10-03",
        startTime: "08:30",
        endTime: "11:00",
        volunteersTarget: 20,
        signupCount: 2,
        proposerName: "Equipe Somos Ilha de Deus",
        status: "approved",
        createdAt: "2026-09-01T09:00:00.000Z",
      },
      {
        id: "e3",
        title: "Roda de conversa: coleta seletiva na escola",
        description:
          "Encontro com pais e alunos para organizar a coleta seletiva dentro da escola da comunidade e criar uma brigada jovem de fiscalização ambiental.",
        locationName: "Escola da comunidade",
        date: "2026-10-10",
        startTime: "14:00",
        endTime: "16:00",
        volunteersTarget: 25,
        signupCount: 0,
        proposerName: "Vicente (morador)",
        proposerContact: "(81) 9 9999-0001",
        status: "pending",
        createdAt: "2026-09-02T15:00:00.000Z",
      },
      {
        id: "e4",
        title: "Mutirão de Limpeza — Alunos Estácio na Ilha de Deus",
        description:
          "Esteja presente com muita determinação para ajudar a comunidade na coleta de resíduos e na conscientização da população recifense, com vídeos e fotos divulgados pela internet acerca da ação.",
        locationName: "Entrada da Ilha de Deus",
        date: "2026-11-18",
        startTime: "08:00",
        endTime: "10:00",
        volunteersTarget: 15,
        signupCount: 0,
        proposerName: "Carlos",
        status: "approved",
        createdAt: "2026-11-17T10:00:00.000Z",
      },
    ],
    news: [],
    photos: [
      {
        id: "ph1",
        title: "Registro da comunidade da Ilha de Deus",
        imageUrl: "/images/galeria-foto-1.jpg",
        author: "Equipe Somos Ilha de Deus",
        status: "approved",
        createdAt: "2026-11-17T11:00:00.000Z",
      },
      {
        id: "ph2",
        title: "Momentos do território",
        imageUrl: "/images/galeria-foto-2.jpg",
        author: "Equipe Somos Ilha de Deus",
        status: "approved",
        createdAt: "2026-11-17T11:05:00.000Z",
      },
      {
        id: "ph3",
        title: "Vivências da Ilha",
        imageUrl: "/images/galeria-foto-3.jpg",
        author: "Equipe Somos Ilha de Deus",
        status: "approved",
        createdAt: "2026-11-17T11:10:00.000Z",
      },
    ],
  };
}
