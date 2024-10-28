<script setup>
import Heading from '@/components/Heading.vue';
import Project from '@/components/Project.vue';

const projects = [
  {
    title: 'Receipt Manager',
    date: 'Juillet 2024',
    desc: 'Application de gestion de tickets de caisse',
    thumbnail: 'https://via.placeholder.com/150',
    stack: [
      'symfony',
      'tailwind',
      'test'
    ]
    ,
  },
  {
    title: 'Ducky Driver',
    date: 'Juin 2023',
    desc: 'Site de covoiturage pour étudiants',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-duckysdriver.png'
  },
  {
    title: 'La MMINUTERIE',
    date: 'Mars 2023',
    desc: 'Projet universitaire',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-mminuterie.jpg'
  },
  {
    title: 'La boîte de Christine',
    date: 'Février 2023',
    desc: 'Site vitrine',
    thumbnail: 'https://via.placeholder.com/250'
  },
  {
    title: 'The Rolling Stones',
    date: 'Janvier 2023',
    desc: 'Projet universitaire',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-rs.jpg'
  },

];

</script>

<template>
  <main>
    <Heading title="Projets" subtitle="Mes réalisations"/>
   
    <div class="project">
      <Project :projects="projects"/>
    </div>
  </main>
</template>
<style scoped>
  main{
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
 
</style>
