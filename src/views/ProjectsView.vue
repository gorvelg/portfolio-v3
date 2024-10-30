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
      'twig',
      'tailwind',
      'javascript'
    ]
    ,
  },
  {
    title: 'SkyView',
    date: 'Mai 2024',
    desc: 'Application météo',
    thumbnail: 'https://via.placeholder.com/150',
    stack: [
      'symfony',
      'twig',
    ]
    ,
  },
  {
    title: 'IUTask',
    date: 'Janvier 2024',
    desc: 'Application de gestion de devoir',
    thumbnail: 'https://via.placeholder.com/150',
    stack: [
      'symfony',
      'twig',
      'tailwind',
      'javascript'
    ]
    ,
  },
  {
    title: 'Ducky Driver',
    date: 'Juin 2023',
    desc: 'Site de covoiturage pour étudiants',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-duckysdriver.png',
    stack: [
      'php',
      'html',
      'css',
      'javascript',
    ]
    ,
  },
  {
    title: 'La MMINUTERIE',
    date: 'Mars 2023',
    desc: 'Projet universitaire',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-mminuterie.jpg',
    stack: [
      'php',
      'html',
      'css',
      'javascript',
    ]
    ,
  },
  {
    title: 'La boîte de Christine',
    date: 'Février 2023',
    desc: 'Site vitrine',
    thumbnail: 'https://via.placeholder.com/250',
    stack: [
      'html',
      'css',
      'javascript',
    ]
    ,
  },
  {
    title: 'The Rolling Stones',
    date: 'Janvier 2023',
    desc: 'Projet universitaire',
    thumbnail: 'https://images.radiox.co.uk/images/593796?width=1400&crop=1_1&signature=iwiZvWDpX4yqGqvqhD67waElIeI=',
    stack: [
      'php',
      'html',
      'css',
      'jquery',
    ]
    ,
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
