import camila from "../assets/img/camilass92.jpeg";
import pedro from "../assets/img/pedrito.jpeg";
import luiz from "../assets/img/light.lui.jpeg";

export const whatsappUrl =
  "https://api.whatsapp.com/message/45PJON3HBJM5J1?autoload=1&app_absent=0";

export const navigation = [
  ["home", "Início"],
  ["about", "Sobre mim"],
  ["methodology", "As aulas"],
  ["tools", "Ferramentas"],
  ["bonus", "Bônus"],
  ["testimonials", "Depoimentos"],
  ["faq", "Dúvidas"],
];

export const faqs = [
  {
    id: "contract",
    question: "Tempo de contrato",
    answer:
      "Os contratos têm duração de 6 meses e podem ser renovados mediante acordo entre as partes.",
  },
  {
    id: "cancellation",
    question: "Cancelamento",
    answer:
      "O cancelamento deve ser comunicado com 30 dias de antecedência, sem cobrança de multa adicional.",
  },
  {
    id: "rescheduling",
    question: "Remarcação de aulas",
    answer:
      "As solicitações de remarcação devem ser feitas com pelo menos 24 horas de antecedência. O reagendamento será realizado de acordo com a disponibilidade na agenda.",
  },
  {
    id: "duration",
    question: "Duração do curso",
    answer:
      "O tempo necessário para concluir o curso depende dos objetivos, do nível inicial e do ritmo de aprendizagem de cada aluno.",
  },
  {
    id: "payment",
    question: "Formas de pagamento",
    answer:
      "O pagamento é mensal e pode ser realizado via PIX ou boleto bancário. Também emito nota fiscal referente aos serviços prestados.",
  },
];

export const skills = [
  {
    id: "speaking",
    name: "Speaking",
    label: "Falar",
    icon: "chat",
    title: "Sua voz também em inglês.",
    text: "Conversas conectadas aos seus interesses, com espaço para tentar, errar e construir confiança. A comunicação vem em primeiro lugar.",
    example: "Na prática: conversar sobre uma série que você adora.",
  },
  {
    id: "listening",
    name: "Listening",
    label: "Ouvir",
    icon: "headphones",
    title: "Treine o ouvido para a vida real.",
    text: "Músicas, vídeos e diferentes formas de falar ajudam você a reconhecer palavras e entender o inglês em contexto.",
    example: "Na prática: explorar a letra da sua música favorita.",
  },
  {
    id: "reading",
    name: "Reading",
    label: "Ler",
    icon: "book",
    title: "Um novo mundo em cada leitura.",
    text: "Textos e atividades de acordo com o seu momento, para ampliar o vocabulário e desenvolver a compreensão com propósito.",
    example:
      "Na prática: descobrir as ideias de um texto e conversar sobre elas.",
  },
  {
    id: "writing",
    name: "Writing",
    label: "Escrever",
    icon: "pen",
    title: "Transforme suas ideias em palavras.",
    text: "A escrita faz parte do aprendizado desde o início, com atividades que ajudam você a organizar ideias e se expressar em inglês.",
    example: "Na prática: escrever uma mensagem sobre os seus planos.",
  },
];

export const tools = [
  {
    icon: "video",
    title: "Nosso ponto de encontro",
    text: "Aulas online pelo Google Meet.",
    names: "Google Meet",
  },
  {
    icon: "headphones",
    title: "Inglês que dá play",
    text: "Músicas e conversas para treinar o listening.",
    names: "LingoClip · TED Talks · Storyline Online",
  },
  {
    icon: "globe",
    title: "Além da sala de aula",
    text: "Atividades extras para continuar praticando.",
    names: "Wordwall · elllo",
  },
  {
    icon: "game",
    title: "Aprender também é brincar",
    text: "Jogos que deixam a prática mais leve.",
    names: "Wordwall · Baamboozle",
  },
];

export const bonuses = [
  {
    icon: "book",
    title: "Material digital",
    text: "Os materiais de estudo sempre por perto.",
  },
  {
    icon: "chat",
    title: "Suporte no WhatsApp",
    text: "Um espaço para suas dúvidas durante o caminho.",
  },
  {
    icon: "spark",
    title: "Sua toolbox de estudos",
    text: "Indicações de apps e sites para praticar mais.",
  },
];

export const testimonials = [
  {
    name: "@camilass92",
    image: camila,
    text: "Estou fazendo aulas com a Rayssa e estou adorando. Ela é muito flexível. Ouve muito as demandas do aluno e sempre trás novidades pras aulas Você vê o cuidado no preparo com as aulas. Além do respeito à sua trajetória no aprendizado. Super recomendo.",
  },
  {
    name: "@_pedrito_s2",
    image: pedro,
    text: "Há algum tempo tenho aulas com a teacher Rayssa, sempre muito atenciosa, extremamente inovdora, sempre trazendo a humanidade e simplicidade além é claro de um magnífico domínio da língua, amooo as aulas dela.",
  },
  {
    name: "@light.lui",
    image: luiz,
    text: "Fiz aula com a Rayssa e foi incrível demais!!! Sempre tive problemas com o inglês e era quase impossível não entender o que a prof explicava, tornou tudo muitooo mais fácil! Recomendo muito.",
  },
];
