<script setup>
import Heading from '@/components/Heading.vue';
import Project from '@/components/Project.vue';

const projects = [
  {
    title: 'Receipt Manager',
    desc: 'Application de gestion de tickets de caisse',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    title: 'Ducky Driver',
    desc: 'Site de covoiturage pour étudiants',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    title: 'La MMINUTERIE',
    desc: 'Projet universitaire',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-mminuterie.jpg'
  },
  {
    title: 'The Rolling Stones',
    desc: 'Projet universitaire',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-rs.jpg'
  },
  {
    title: 'La boîte de Christine',
    desc: 'Site vitrine',
    thumbnail: 'https://via.placeholder.com/250'
  }
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
