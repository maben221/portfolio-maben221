import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
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
        Bienvenue sur mon portfolio!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Étudiant en Génie Logiciel à l'Université Laval, passionné par le développement 
          web et les nouvelles technologies.
        </p>
        
        <h2>Compétences techniques</h2>
        <ul>
          <li><strong>Langages :</strong> Python, C++, JavaScript, CSS, HTML</li>
          <li><strong>Outils :</strong> VS Code, Git, Docker</li>
          <li><strong>Langues :</strong> Français (maternel), Anglais (avancé), Espagnol (débutant)</li>
        </ul>

        <h2>Projets récents</h2>
        <ul>
          <li>
            <strong>IA conversationnelle (Début)</strong>: Agent conversationnel instantané
            bâti sur Google Multimodal Live API et DialogFlow CX
            capable de répondre à des questions en matière d'assurance de dommages aux particuliers, réalisé en Python
          </li>
          <li>
            <strong>Plugin web (2023)</strong>: Extension de navigateur pour comparer 
            les prix des jeux vidéo à travers différentes plateformes, réalisé en JavaScript
          </li>
          <li>
            <strong>Projet de design IoT (2023)</strong>: Conception d'un système de détection 
            de lemmings - Note finale: 92%
          </li>
        </ul>

        <h2>Expérience professionnelle</h2>
        <p>
          Actuellement en stage dans l'équipe <strong>MLOps</strong>, je collabore à l'amélioration des <strong>technologies</strong>, 
          des <strong>modèles d’intelligence artificielle</strong>, des langages, des logiciels et des outils de développement. 
          Je veille au bon fonctionnement et à la performance de l’écosystème <strong>MLOps</strong>, et j'assure la mise en œuvre de 
          l’architecture technologique nécessaire pour les solutions d’<strong>intelligence artificielle</strong>. 
          Ce stage me permet de développer des compétences avec <strong>Terraform</strong>, <strong>Anaconda Entreprise</strong>, 
          <strong>AWS Sagemaker</strong>, <strong>MLFlow</strong> et <strong>Python/R/SQL</strong>.
        </p>
        <p>
          Auparavant, j'étais <strong>Soutien au centre de services TI</strong> chez Beneva, 
          où je gérais l'<strong>infrastructure IT</strong>, la <strong>CMDB</strong> et les <strong>accès utilisateurs</strong> via 
          <strong>Azure Entra ID</strong> et <strong>Active Directory</strong>.
        </p>

        <p>
          Contactez-moi via{" "}
          <a href="mailto:maben221@ulaval.ca">maben221@ulaval.ca</a> ou{" "}
          <a href={socialLinks.linkedin} target="_blank">LinkedIn</a> pour discuter 
          d'opportunités de collaboration.
        </p>
      </div>
    </section>
  );
}
