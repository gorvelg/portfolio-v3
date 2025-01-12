import thumbnailRollingStones from "@/assets/img/thumbnail-rs.jpg";
import thumbnailRacontines from "@/assets/img/thumbnail-racontines.jpg";
import thumbnailLaMminuterie from "@/assets/img/thumbnail-la-mminuterie.jpg";
import thumbnailDuckyDriver from "@/assets/img/thumbnail-ducky-driver.jpg";
import thumbnailIutask from "@/assets/img/thumbnail-iutask.jpg";
import thumbnailSkyview from "@/assets/img/thumbnail-skyview.jpg";
import thumbnailMpc from "@/assets/img/thumbnail-mpc.jpg";

import bannerLaMminuterie from "@/assets/img/banner-la-mminuterie.jpg";
import bannerDuckyDriver from "@/assets/img/banner-ducky-driver.jpg";
import bannerRollingStones from "@/assets/img/banner-rs.jpg";
import bannerRacontines from "@/assets/img/banner-racontines.jpg";
import bannerIutask from "@/assets/img/banner-iutask.jpg";
import bannerSkyview from "@/assets/img/banner-skyview.jpg";
import bannerMpc from "@/assets/img/banner-mpc.jpg";

// Images de la galerie
import galleryMpc from "@/assets/img/gallery/mpc.jpeg";

export const projects = [
  {
    id: 1,
    title: "Receipt Manager",
    date: "Juillet 2024",
    desc: "Receipt Manager est une application de gestion de tickets de caisse.",
    thumbnail: "https://via.placeholder.com/150",
    stack: ["symfony", "twig", "tailwind", "javascript"],
    sections: {
      overview:
        "Receipt Manager est une application de gestion de tickets de caisse pour deux utilisateurs. Chaque mois, un mail est envoyé aux utilisateurs afin de savoir s'ils doivent remboursé ou être remboursé par l'autre utilisateur.",
      details: `
        <div class="heading-2">
            <i class="fa-solid fa-bullseye"></i>
            Objectifs
        </div>
        <ul>
            <li>Permettre à deux utilisateurs de gérer leurs tickets de caisse.</li>
            <li>Organiser les tickets par date.</li>
            <li>Générer un historique avec la totalité des dépenses pour chaque utilisateur.</li>
            <li>Envoyer un mail mensuel pour le remboursement.</li>
        </ul><br>
        <div class="heading-2">
            <i class="fa-solid fa-stairs"></i>
        Challenge
        </div>
        <ul>
            <li>Création de commandes Symfony, exécuter avec un CRON.</li>
            <li>Utiliser un service mail</li>
            <li>Créer une interface utilisateur simple et intuitive.</li>
            <li>Optimiser le stockage des données en supprimant mensuellement les images stockées sur le serveur.</li>
        </ul>

        `,

      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      website: "https://ticket.guillaume-gorvel.fr",
      github: "https://github.com/gorvelg/receipt-manager",
    },
  },
  {
    id: 2,
    title: "SkyView",
    date: "Mai 2024",
    desc: "Application météo",
    thumbnail: thumbnailSkyview,
    stack: ["symfony", "twig"],
    sections: {
      banner: bannerSkyview,
      overview:
        "Skyview est une application météo qui fournit des prévisions à l'aide d'une API. Les utilisateurs inscrits ont la possibilité de personnaliser l'affichage des données.",
      details: `
      <div class="heading-2">
            <i class="fa-solid fa-bullseye"></i>
            Objectifs
        </div>
        <ul>
            <li>Créer une application météo avec des prévisions en temps réel.</li>
            <li>Intégrer des APIs externes pour obtenir des données précises.</li>
            <li>Permettre aux utilisateurs de personnaliser l'affichage des données.</li>
            <li>Proposer des alertes météo personnalisées.</li>
            <li>Créer une interface de découverte pour les utilisateurs non connectés.</li>
        </ul><br>
        <div class="heading-2">
            <i class="fa-solid fa-stairs"></i>
        Challenge
        </div>
        <ul>
            <li>Intégrer des APIs externes de manière sécurisée.</li>
            <li>Optimiser les données en temps réel avec un système de mise en cache afin de réduire la charge sur les serveurs.</li>
            <li>Proposer une interface utilisateur fluide et intuitive.</li>
            <li>Inciter les utilisateurs à s'inscrire pour accéder à des fonctionnalités étendues.(gestion de lieux favoris, personnalisation des types de données affichées...)</li>
            <li>Envoyer un mail pour l'inscription, mais aussi pour les mots de passe oubliés(avec un systeme de token unique).</li>
        </ul><br>
       `,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/elisegrt/SAE_401",
    },
  },
  {
    id: 3,
    title: "IUTask",
    date: "Janvier 2024",
    desc: "Application de gestion de devoir",
    thumbnail: thumbnailIutask,
    stack: ["symfony", "twig", "tailwind", "javascript"],
    sections: {
      banner: bannerIutask,
      overview:
        "IUTask est une application conçue pour aider les étudiants à organiser et gérer leurs devoirs. Elle permet de créer des rappels, de définir des priorités, et de suivre les tâches en cours.",
      details: `
        <div class="heading-2">
            <i class="fa-solid fa-bullseye"></i>
            Objectifs
        </div>
        <ul>
            <li>Créer une application de gestion de devoirs pour les étudiants.</li>
            <li>Organiser les devoirs par date et par matière.</li>
            <li>Visibilité des devoirs uniquement pour les étudiants du même groupe.</li>
            <li>Permettre aux utilisateurs de créer des rappels et de définir des priorités.</li>
            <li>Créer des notifications pour les tâches à venir.</li>
            <li>Créer une interface utilisateur simple et intuitive.</li>
        </ul><br>
        <div class="heading-2">
            <i class="fa-solid fa-stairs"></i>
        Challenge
        </div>
        <ul>
            <li>Créer un système de rappels et d'alertes pour les tâches à venir.</li>
            <li>Ajout d'un calendrier interactif.</li>
            <li>Création de composants Twig.</li>
        </ul><br>
        `,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/BriqueAuBob/sae301",
    },
  },
  {
    id: 4,
    title: "Ducky Driver",
    date: "Juin 2023",
    desc: "Site de covoiturage pour étudiants",
    thumbnail: thumbnailDuckyDriver,
    stack: ["php", "html", "css", "javascript"],
    sections: {
      banner: bannerDuckyDriver,
      overview:
        "Ducky Driver est un projet universitaire de fin de première année de MMI. C'est un site de covoiturage spécialement conçu pour les étudiants.",
      details: `
        <div class="heading-2">
            <i class="fa-solid fa-bullseye"></i>
            Objectifs
        </div>
        <ul>
            <li>Créer un site de covoiturage pour les étudiants.</li>
            <li>Permettre aux utilisateurs de proposer et de rechercher des trajets.</li>
            <li>Inscription et personnalisation de profil.</li>
        </ul>
        <div class="heading-2">
            <i class="fa-solid fa-stairs"></i>
        Challenge
        </div>
        <ul>
            <li>Créer un système de recherche de trajets.</li>
            <li>Utilisation de Figma pour l'UI Design (wireframe et design system, charte graphique).</li>
            <li>Utilisation de Git pour faciliter la collaboration.</li>
        `,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/Rophyr/sae202",
      website: "https://mmi22f01.sae202.ovh",
    },
  },
  {
    id: 5,
    title: "La MMINUTERIE",
    date: "Mars 2023",
    desc: "Projet universitaire",
    thumbnail: thumbnailLaMminuterie,
    stack: ["php", "html", "css", "javascript"],
    sections: {
      banner: bannerLaMminuterie,
      overview:
        "La MMINUTERIE est un projet universitaire de première année de MMI. Il consistait à manipuler une base de données et à créer un site web dynamique.",
      details: `
        <div class="heading-2">
            <i class="fa-solid fa-bullseye"></i>
            Objectifs
        </div>
        <ul>
            <li>Créer un site web dynamique simple avec une base de données.</li>
            <li>Affichage des données et formulaire de recherche.</li>
            <li>CRUD via un back office sécurisé.</li>
            <li>Accessibilité et Responsive.</li>
        </ul>
        <div class="heading-2">
            <i class="fa-solid fa-stairs"></i>
        Challenge
        </div>
        <ul>
            <li>Réfléchir à la structure des données en créant un dictionnaire, un MCD et un MLD.</li>
            <li>Créer des requêtes SQL en le combinant avec du PHP natif.</li>
            <li>Sécuriser les formulaires avec les outils sanitize de PHP.</li>
            <li>Déployer sur un VPS le site et sa base de données.</li>
        </ul>
        `,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/gorvelg/sae203",
      website: "https://mmi22f01.sae203.ovh",
    },
  },
  {
    id: 6,
    title: "La boîte de Christine",
    date: "Février 2023",
    desc: "Site vitrine",
    thumbnail: thumbnailRacontines,
    stack: ["html", "css", "javascript"],
    sections: {
      banner: bannerRacontines,
      overview: "Ceci est une vue d'ensemble du site La boîte de Christine.",
      details: `
        La boîte de Christine est un site vitrine conçu pour présenter
        les services et produits de Christine. Le design est simple
        mais élégant, mettant en valeur les contenus de manière
        professionnelle.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/gorvelg/racontines",
      website: "http://guillaume-gorvel.fr/racontines",
    },
  },
  {
    id: 7,
    title: "The Rolling Stones",
    date: "Janvier 2023",
    desc: "Projet universitaire",
    thumbnail: thumbnailRollingStones,
    stack: ["php", "html", "css", "jquery"],
    sections: {
      banner: bannerRollingStones,
      overview: "Ceci est une vue d'ensemble du projet The Rolling Stones.",
      details: `
        The Rolling Stones est un projet universitaire dédié à la
        célèbre bande rock. Le site présente l'histoire du groupe,
        leurs albums emblématiques, et les moments marquants
        de leur carrière.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
  },
  {
    id: 8,
    title: "Mesurez pas cher",
    date: "Novembre 2024",
    desc: "Refonte d'un site e-commerce",
    thumbnail: thumbnailMpc,
    stack: ["magento"],
    sections: {
      banner: bannerMpc,
      overview:
        "Après la refonte du site distrame.fr et de sa migration vers Magento (offrant des fonctionnalités de multi-boutique), j'ai été chargé de conduire la refonte complète du site Mesurez pas cher et de l'intégrer à cette nouvelle plateforme.",
      details: `
        <div class="heading-2">
            <i class="fa-solid fa-bullseye"></i>
            Objectifs
        </div>
        <ul>
            <li>Effectuer la <b>migration vers Magento</b> (offrant des fonctionnalités de multi-boutique).</li>
            <li>Création d'un nouveau thème.</li>
            <li>Développement de <b>plusieurs modules</b> (fil d'Ariane sous forme de tag, pastilles promotionnelles).</li>
        </ul><br>
         <div class="heading-2">
            <i class="fa-solid fa-stairs"></i>
        Challenge
        </div>
         Ce projet m'a amené à développer et à implémenter plusieurs modules personnalisés pour répondre aux besoins spécifiques du site et optimiser l'expérience utilisateur.`,
      gallery: [galleryMpc, "https://via.placeholder.com/300"],
      website: "https://mesurezpascher.fr",
    },
  },
];

// Fonction pour trier les projets par date
export const sortedProjects = projects.sort((a, b) => {
  const dateA = new Date(
    a.date.split(" ")[1],
    getMonthIndex(a.date.split(" ")[0])
  );
  const dateB = new Date(
    b.date.split(" ")[1],
    getMonthIndex(b.date.split(" ")[0])
  );
  return dateB - dateA;
});

// Fonction utilitaire pour obtenir l'index du mois
function getMonthIndex(month) {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return months.indexOf(month);
}
