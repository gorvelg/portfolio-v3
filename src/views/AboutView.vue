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
    padding: 0 1rem 100px;
  }
  

  .about {

    border-radius: 12px;
    padding: 0.4rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    padding: 4px;
    position: relative;
    transition: cubic-bezier(.175,.885,.32,1.275) .5s;
  }
  .about::before{
    content: "";
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(
  60deg,
  var(--bg-gradient-bordered-box-1),
  var(--bg-gradient-bordered-box-2),
  var(--bg-gradient-bordered-box-1),
  var(--bg-gradient-bordered-box-2),
  var(--bg-gradient-bordered-box-1)
);
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
  }
  .about__text {
    background: var(--bg-color-primary);
    border-radius: 12px;
    padding: 1.6rem;
    z-index: 1;
    position: relative;
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

    .about__text {
      padding: 2.4rem;
    }

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
