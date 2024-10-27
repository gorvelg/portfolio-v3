<script setup>
import Heading from '@/components/Heading.vue';
import Project from '@/components/Project.vue';

const projects = [
  {
    title: 'Ducky Driver',
    desc: 'Description du projet 1'
  },
  {
    title: 'Projet 2',
    desc: 'Description du projet 2'
  },
  {
    title: 'Projet 3',
    desc: 'Description du projet 3'
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
