<script setup>
import Heading from '@/components/Heading.vue';
import Project from '@/components/Project.vue';

const projects = [
  {
    title: 'test',
    desc: 'Description du projet 1',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    title: 'Ducky Driver',
    desc: 'Description du projet 1',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    title: 'La MMINUTERIE',
    desc: 'Description du projet 2',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-mminuterie.jpg'
  },
  {
    title: 'The Rolling Stones',
    desc: 'Description du projet 3',
    thumbnail: 'https://guillaume-gorvel.fr/images/web-rs.jpg'
  },
  {
    title: 'La boîte de Christine',
    desc: 'Description du projet 4',
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
