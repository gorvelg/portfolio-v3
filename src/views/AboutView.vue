<script setup>
import TechStack from '@/components/TechStack.vue';
import Heading from '@/components/Heading.vue';
</script>

<template>
  <main>
    <Heading title="À propos" subtitle="qui suis-je ?"/>
    
    <div class="about">
      <div class="about__text">
          <p>
            Je m'appelle Guillaume Gorvel, j'ai 28 ans et je suis <b>étudiant BUT MMI(Métier du Multimédia et Internet)</b> à l'IUT de Troyes. Depuis septembre 2024, je suis alternant en tant <b>qu'assistant développeur Web chez Distrame</b>.
          </p>
          <p>
            Au cours de cette expérience, j'ai eu l'occasion de renforcer mes compétences dans divers domaines, notamment le développement sur <b>Magento</b> et <b>Symfony</b>, ainsi que la gestion de bases de données.
          </p>
      </div>
    </div>
  
    <Heading title="Compétences" subtitle="Tech Stacks"/>
    <div class="techstack__group">
      <TechStack title="Langages" :techStack="['Html','Css', 'Javascript', 'Php', 'Scss']" />
      <TechStack title="Framework & CMS" :techStack="['Symfony','VueJS', 'Magento', 'Wordpress']" />
      <TechStack title="Outils" :techStack="['Bootstrap','TailwindCSS', 'Git', 'Docker']" />
    </div>
  </main>
</template>

<style scoped>
  /* Mobile styles */
  main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  

  .about {

    border-radius: 12px;
    padding: 0.4rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    padding: 4px;
    position: relative;
    overflow: hidden;
    transition: cubic-bezier(.175,.885,.32,1.275) .5s;
  }
  .about::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(60deg, #d11af5, #fff700, #07a3ff, #ff0000, #fdfdfd);
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
  }
  .about__text {
    background: #fff;
    border-radius: 12px;
    padding: 1.6rem;
  }

  p {
    color: #222;
    margin-bottom: 1.6rem;
  }

  .techstack__group {
    display: flex;
    overflow: auto;
    gap: 1.6rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) {
    main {
      padding: 2rem;
    }

    .about__text {
      padding: 2.4rem;
    }

    .techstack__group {
      flex-direction: row;
      gap: 2.4rem;
    }
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    main {
      max-width: 1024px;
      margin: 0 auto;
      padding: 3rem;
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
