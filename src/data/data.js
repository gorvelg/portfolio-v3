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
        "Receipt Manager est une application de gestion de tickets de caisse pour deux utilisateurs.",
      details: `
        Cette application permet à deux utilisateurs de gérer facilement
        leurs tickets de caisse, de les organiser par date et de générer
        des rapports statistiques sur leurs dépenses. 
        Chaque mois, un mail est envoyé aux utilisateurs afin de savoir s'ils doivent remboursé ou être remboursé par l'autre utilisateur.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      website: "https://www.receiptmanager.com",
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
        <b>SkyView</b> est une application de météo développée pour un projet universitaire (SAÉ). L'application intègre un <b>système de gestion des utilisateurs</b> complet, avec inscription, connexion et réinitialisation de mot de passe, permettant à chacun de créer et de gérer son profil et ses préférences. Les utilisateurs peuvent <b>personnaliser l'affichage des données météo</b> et configurer des <b>alertes spécifiques</b> pour des conditions comme les tempêtes ou le gel.<br/><br/>
    
        SkyView se distingue par l'<b>intégration sécurisée d'APIs externes</b>, garantissant des <b>données en temps réel</b> optimisées par un <b>système de mise en cache</b> pour réduire la charge sur les serveurs. Les utilisateurs non connectés ont accès à des <b>prévisions générales pour les grandes villes</b> et peuvent rechercher des conditions par nom de ville ou code postal via une interface de découverte. Cette interface incite à s’inscrire pour accéder à des <b>fonctionnalités étendues</b>.<br/><br/>
    
        Les utilisateurs connectés bénéficient de la <b>gestion de lieux favoris</b> et de la <b>personnalisation des types de données affichées</b> (température, vent, etc.). L'interface permet de mettre à jour les informations de profil et de <b>gérer les alertes</b> facilement. <b>SkyView</b> propose ainsi une approche complète et fluide de la météo, alliant <b>personnalisation</b> et <b>précision</b>.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: 'https://github.com/elisegrt/SAE_401',
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
      overview: "Ceci est une vue d'ensemble du projet IUTask.",
      details: `
        IUTask est une application conçue pour aider les étudiants
        à organiser et gérer leurs devoirs. Elle permet de créer des
        rappels, de définir des priorités, et de suivre les tâches
        en cours.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/BriqueAuBob/sae301"
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
      overview: "Ceci est une vue d'ensemble du projet Ducky Driver.",
      details: `
        Ducky Driver est un site de covoiturage spécialement conçu
        pour les étudiants. Il facilite la mise en relation entre
        conducteurs et passagers, permettant des trajets partagés
        et économiques.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/Rophyr/sae202",
      website: "https://mmi22f01.sae202.ovh"
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
      overview: "Ceci est une vue d'ensemble du projet La MMINUTERIE.",
      details: `
        La MMINUTERIE est un projet universitaire mettant en avant
        l'importance de la gestion du temps. Il s'agit d'un outil
        interactif permettant de planifier et d'organiser des activités
        de manière efficace.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      github: "https://github.com/gorvelg/sae203",
      website: "https://mmi22f01.sae203.ovh"
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
      website: "http://guillaume-gorvel.fr/racontines"
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
      overview: "Après la refonte du site distrame.fr et de sa migration vers Magento (offrant des fonctionnalités de multi-boutique), j'ai été chargé de conduire la refonte complète du site Mesurez pas cher et de l'intégrer à cette nouvelle plateforme.",
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
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
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
