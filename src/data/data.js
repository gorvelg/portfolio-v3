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
    long_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam saepe error. Dicta qui neque saepe quasi omnis. Adipisci recusandae dolorum ratione fugit. Doloremque, veritatis? Id voluptas asperiores autem culpa?",
  },
  {
    id: 2,
    title: "SkyView",
    date: "Mai 2024",
    desc: "Application météo",
    thumbnail: "https://via.placeholder.com/150",
    stack: ["symfony", "twig"],
  },
  {
    id: 3,
    title: "IUTask",
    date: "Janvier 2024",
    desc: "Application de gestion de devoir",
    thumbnail: "https://via.placeholder.com/150",
    stack: ["symfony", "twig", "tailwind", "javascript"],
  },
  {
    id: 4,
    title: "Ducky Driver",
    date: "Juin 2023",
    desc: "Site de covoiturage pour étudiants",
    thumbnail: thumbnailDuckyDriver,
    stack: ["php", "html", "css", "javascript"],
  },
  {
    id: 5,
    title: "La MMINUTERIE",
    date: "Mars 2023",
    desc: "Projet universitaire",
    thumbnail: thumbnailLaMminuterie,
    stack: ["php", "html", "css", "javascript"],
  },
  {
    id: 6,
    title: "La boîte de Christine",
    date: "Février 2023",
    desc: "Site vitrine",
    thumbnail: thumbnailRacontines,
    stack: ["html", "css", "javascript"],
  },
  {
    id: 7,
    title: "The Rolling Stones",
    date: "Janvier 2023",
    desc: "Projet universitaire",
    thumbnail: thumbnailRollingStones,
    stack: ["php", "html", "css", "jquery"],
  },
  {
    id: 8,
    title: "Mesurez pas cher",
    date: "Novembre 2024",
    desc: "Refonte d'un site e-commerce",
    thumbnail:
      "https://images.radiox.co.uk/images/593796?width=1400&crop=1_1&signature=iwiZvWDpX4yqGqvqhD67waElIeI=",
    stack: ["magento"],
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
