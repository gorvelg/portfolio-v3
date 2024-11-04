import thumbnailRollingStones from "@/assets/img/thumbnail-rs.jpg";
import thumbnailRacontines from "@/assets/img/thumbnail-racontines.jpg";
import thumbnailLaMminuterie from "@/assets/img/thumbnail-la-mminuterie.jpg";
import thumbnailDuckyDriver from "@/assets/img/thumbnail-ducky-driver.jpg";

export const projects = [
  {
    id: 1,
    title: "Receipt Manager",
    date: "Juillet 2024",
    desc: "Application de gestion de tickets de caisse",
    thumbnail: "https://via.placeholder.com/150",
    stack: ["symfony", "twig", "tailwind", "javascript"],
    sections: {
      overview: "Ceci est une vue d'ensemble du projet Receipt Manager.",
      details: `
        Voici une description détaillée du projet Receipt Manager.
        Cette application permet aux utilisateurs de gérer facilement
        leurs tickets de caisse, de les organiser par date et de générer
        des rapports statistiques sur leurs dépenses.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
  },
  {
    id: 2,
    title: "SkyView",
    date: "Mai 2024",
    desc: "Application météo",
    thumbnail: "https://via.placeholder.com/150",
    stack: ["symfony", "twig"],
    sections: {
      overview: "Ceci est une vue d'ensemble du projet SkyView.",
      details: `
        SkyView est une application météo qui permet de consulter les
        prévisions météorologiques précises en utilisant des données
        fiables. Elle fournit des informations sur la température,
        la pression atmosphérique, et bien plus.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
  },
  {
    id: 3,
    title: "IUTask",
    date: "Janvier 2024",
    desc: "Application de gestion de devoir",
    thumbnail: "https://via.placeholder.com/150",
    stack: ["symfony", "twig", "tailwind", "javascript"],
    sections: {
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
    thumbnail:
      "https://images.radiox.co.uk/images/593796?width=1400&crop=1_1&signature=iwiZvWDpX4yqGqvqhD67waElIeI=",
    stack: ["magento"],
    sections: {
      overview: "Ceci est une vue d'ensemble du projet Mesurez pas cher.",
      details: `
        Mesurez pas cher est une refonte complète d'un site e-commerce
        spécialisé dans les instruments de mesure. Le nouveau design
        offre une meilleure expérience utilisateur et un processus
        d'achat simplifié.`,
      gallery: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
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
