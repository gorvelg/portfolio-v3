<script setup>
import TechStack from '@/components/TechStack.vue';
import Heading from '@/components/Heading.vue';
import BorderedBox from "@/components/BorderedBox.vue";
</script>

<template>
  <main>
    <Heading title="À propos" subtitle="qui suis-je ?"/>
    <BorderedBox>
      <p>
        Je m'appelle Guillaume Gorvel, j'ai 28 ans et je suis <b>étudiant BUT MMI(Métier du Multimédia et Internet)</b> à l'IUT de Troyes. Depuis septembre 2024, je suis alternant en tant <b>qu'assistant développeur Web chez Distrame</b>.
      </p>
      <p>
        Au cours de cette expérience, j'ai eu l'occasion de renforcer mes compétences dans divers domaines, notamment le développement sur <b>Magento</b> et <b>Symfony</b>, ainsi que la gestion de bases de données.
      </p>
    </BorderedBox>
  
    <Heading title="Compétences" subtitle="Tech Stacks"/>
    <div class="techstack__group">
      <TechStack title="Langages" :techStack="['Html','Css', 'Javascript', 'Php', 'Scss']" />
      <TechStack title="Framework & CMS" :techStack="['Symfony','VueJS', 'Magento', 'Wordpress']" />
      <TechStack title="Outils" :techStack="['Bootstrap','TailwindCSS', 'Git', 'Docker']" />
    </div>
    <Heading title="Expériences et Formations" subtitle="Mon parcours"/>
    <BorderedBox>
      <p>coucou</p>
    </BorderedBox>
  </main>
</template>

<style scoped>
  /* Mobile styles */
  main {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 100px;
  }


  p {
    color: var(--text-color-primary);
    margin-bottom: 1.6rem;
  }

  .techstack__group {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    gap: 1.6rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) {

    .techstack__group {
      flex-direction: row;
      gap: 2.4rem;
      justify-content: space-around;
    }
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    main {
      max-width: 1024px;
      margin: 0 auto;
      padding: 3rem 3rem 100px;
    }

    .heading-title {
      text-align: left;
    }

    .techstack__group {
      gap: 3.2rem;
      justify-content: space-between;
    }
  }
</style>
