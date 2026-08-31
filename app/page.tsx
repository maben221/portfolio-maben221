"use client";

import Image from "next/image";
import { socialLinks, resumeUrl } from "./config";
import { useI18n } from "./lib/i18n";

export default function Page() {
  const { t, locale } = useI18n();

  const isFr = locale === "fr";

  const skills = {
    languages: "Python, C++, JavaScript, CSS, HTML",
    tools: "VS Code, Git, Docker, Terraform, AWS SageMaker, MLFlow",
    spoken: isFr
      ? "Français (maternel), Anglais (avancé), Arabe (intermédiaire), Espagnol (débutant)"
      : "French (native), English (advanced), Arabic (intermediate), Spanish (beginner)",
  };

  const projects = isFr
    ? [
        {
          name: "Agent IA conversationnel (en cours)",
          desc: "Agent conversationnel bâti sur Google Multimodal Live API et DialogFlow CX, capable de répondre à des questions d'assurance de dommages aux particuliers. Réalisé en Python.",
        },
        {
          name: "Plugin web (2023)",
          desc: "Extension de navigateur pour comparer les prix des jeux vidéo à travers différentes plateformes. Réalisée en JavaScript.",
        },
        {
          name: "Projet de design IoT (2023)",
          desc: "Conception d'un système de détection de lemmings soutenu par une solution IdO. Note finale : 92 %.",
        },
      ]
    : [
        {
          name: "Conversational AI agent (in progress)",
          desc: "Conversational agent built on Google Multimodal Live API and DialogFlow CX, able to answer personal property & casualty insurance questions. Built in Python.",
        },
        {
          name: "Web plugin (2023)",
          desc: "Browser extension to compare video game prices across platforms. Built in JavaScript.",
        },
        {
          name: "IoT design project (2023)",
          desc: "Design of a lemming-detection system supported by an IoT solution. Final grade: 92%.",
        },
      ];

  const experience = isFr
    ? [
        {
          role: "Analyste développeur MLOps (stagiaire)",
          company: "Beneva",
          bullets: [
            "Collaboration aux projets d'amélioration des technologies, des modèles d'IA et des outils de développement",
            "Soutien à la performance des logiciels utilisés par l'équipe et à l'évolution de l'écosystème MLOps",
            "Mise en œuvre de l'architecture technologique pour opérationnaliser les solutions d'IA",
            "Utilisation de Terraform, Anaconda Entreprise, AWS SageMaker et MLFlow",
          ],
        },
        {
          role: "Analyste technologique (étudiant)",
          company: "Beneva",
          bullets: [
            "Coordination entre les équipes de développement et les partenaires d'affaires",
            "Documentation des processus d'architecture et des guides de configuration",
            "Identification des risques techniques et veille technologique",
          ],
        },
        {
          role: "Soutien au centre de services TI",
          company: "Beneva",
          bullets: [
            "Installation et entretien des logiciels sur les postes de travail",
            "Gestion des identités et accès (Azure Entra ID, SCCM, Active Directory)",
            "Maintien à jour de la CMDB (Jira) et prises d'inventaire",
          ],
        },
        {
          role: "Agent de bureau",
          company: "Beneva",
          bullets: [
            "Aide aux clients pour la facturation de leurs polices d'assurance",
            "Obtention du titre d'agent en assurances de dommages des particuliers",
          ],
        },
        {
          role: "Téléphoniste",
          company: "Statistiques Canada",
          bullets: [
            "Aide aux citoyens canadiens pour remplir leur formulaire de recensement",
            "Résolution de dossiers problématiques ou manquants d'informations",
          ],
        },
      ]
    : [
        {
          role: "MLOps Developer Analyst (intern)",
          company: "Beneva",
          bullets: [
            "Collaboration on projects improving technologies, AI models and development tools",
            "Support for the performance of team software and the evolution of the MLOps ecosystem",
            "Implementation of the technical architecture to operationalize AI solutions",
            "Hands-on with Terraform, Anaconda Enterprise, AWS SageMaker and MLFlow",
          ],
        },
        {
          role: "Technology Analyst (student)",
          company: "Beneva",
          bullets: [
            "Coordination between development teams and business partners",
            "Documentation of architecture processes and configuration guides",
            "Identification of technical risks and technology watch",
          ],
        },
        {
          role: "IT Service Center Support",
          company: "Beneva",
          bullets: [
            "Installation and maintenance of software on workstations",
            "Identity and access management (Azure Entra ID, SCCM, Active Directory)",
            "Maintained CMDB (Jira) and performed equipment inventories",
          ],
        },
        {
          role: "Office Agent",
          company: "Beneva",
          bullets: [
            "Assisted clients with the billing of their insurance policies",
            "Obtained the personal property & casualty insurance agent title",
          ],
        },
        {
          role: "Telephone Interviewer",
          company: "Statistics Canada",
          bullets: [
            "Assisted Canadian citizens in completing their census forms",
            "Resolved problematic or incomplete files",
          ],
        },
      ];

  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Photo de profil"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {t("homeWelcome")}
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>{t("homeIntro")}</p>

        <div className="mb-6">
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 text-sm font-medium no-underline hover:opacity-90 transition-opacity"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
            {t("homeResume")}
          </a>
        </div>

        <h2>{t("homeSkills")}</h2>
        <ul>
          <li>
            <strong>{t("homeSkillsLanguages")} :</strong> {skills.languages}
          </li>
          <li>
            <strong>{t("homeSkillsTools")} :</strong> {skills.tools}
          </li>
          <li>
            <strong>{t("homeSkillsSpoken")} :</strong> {skills.spoken}
          </li>
        </ul>

        <h2>{t("homeProjects")}</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.name}>
              <strong>{p.name}</strong> — {p.desc}
            </li>
          ))}
        </ul>

        <h2>{t("homeExperience")}</h2>
        {experience.map((exp) => (
          <div key={exp.role} className="mb-4">
            <h3 className="mb-1">
              {exp.role} ·{" "}
              <span className="text-neutral-500">{exp.company}</span>
            </h3>
            <ul>
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <p>
          {t("homeContact")}{" "}
          <a href="mailto:maben221@ulaval.ca">maben221@ulaval.ca</a>{" "}
          {t("homeContactOr")}{" "}
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>{" "}
          {t("homeContactDiscuss")}
        </p>
      </div>
    </section>
  );
}
