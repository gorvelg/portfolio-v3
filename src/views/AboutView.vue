<script setup>
import TechStack from '@/components/TechStack.vue';
</script>

<template>
  <main>
    <h1>À propos</h1>
    <p>Je m'appelle Guillaume Gorvel, j'ai 28 ans et je suis <b>étudiant BUT MMI(Métier du Multimédia et Internet)</b> à l'IUT de Troyes. Depuis septembre 2024, je suis alternant en tant <b>qu'assistant développeur Web chez Distrame</b>.</p>
  <p>
    Au cours de cette expérience, j'ai eu l'occasion de renforcer mes compétences dans divers domaines, notamment le développement sur <b>Magento</b> et <b>Symfony</b>, ainsi que la gestion de bases de données.
  </p>
  <h2>Tech Stacks</h2>
  <div class="techstack__group">
    <TechStack title="Langages" :techStack="['Html','Css', 'Javascript', 'Php', 'Scss']" />
    <TechStack title="Framework & CMS" :techStack="['Symfony','VueJS', 'Magento', 'Wordpress']" />
    <TechStack title="Outils" :techStack="['Bootstrap','TailwindCSS', 'Git', 'Docker']" />
  </div>
  </main>
</template>
<style scoped>
  p {
    margin-bottom: 1.6rem;
  }
  .techstack__group {
    display: flex;
    gap: 3.2rem;
  }
</style>
