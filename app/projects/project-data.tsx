export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "IA conversationnelle / Conversational AI",
    year: 2026,
    description:
      "Agent conversationnel bâti sur Google Multimodal Live API et DialogFlow CX, capable de répondre à des questions d'assurance de dommages aux particuliers. Réalisé en Python. — Conversational agent built on Google Multimodal Live API and DialogFlow CX for personal property & casualty insurance questions. Built in Python.",
    url: "https://github.com/maben221",
  },
  {
    title: "Plugin web de comparaison de prix / Price-comparison web plugin",
    year: 2023,
    description:
      "Extension de navigateur (Tampermonkey) pour comparer les prix des jeux vidéo à travers différentes plateformes et proposer des alternatives moins dispendieuses. Réalisée en JavaScript. — Browser extension to compare video game prices across platforms and suggest cheaper alternatives. Built in JavaScript.",
    url: "https://github.com/maben221",
  },
  {
    title: "Projet de design IoT — Détection de lemmings / IoT design project — Lemming detection",
    year: 2023,
    description:
      "Conception d'un système de détection de lemmings soutenu par une solution IdO, incluant la recherche de solutions matérielles et le calcul des coûts logiciels. Rapport d'équipe final noté 92 %. — Design of a lemming-detection system supported by an IoT solution, including hardware research and software cost analysis. Final team report graded 92%.",
    url: "https://github.com/maben221",
  },
];
