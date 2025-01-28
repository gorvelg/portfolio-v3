<script setup>
import { onMounted } from 'vue'
import { gsap } from "gsap";

import TechStack from '@/components/TechStack.vue';
import Heading from '@/components/Heading.vue';
import BorderedBox from "@/components/BorderedBox.vue";
import Experience from '@/components/Experience.vue';
import { experiences } from '@/data/experiences';


onMounted(() => {
  gsap.from('.heading, .techstack__group, .box', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
})

</script>

<template>
  <main>
    <Heading title="À propos" subtitle="qui suis-je ?" />
    <BorderedBox>
      <p>
        Je m'appelle Guillaume Gorvel, j'ai 28 ans et je suis <b>étudiant en BUT MMI (Métiers du Multimédia et de l'Internet)</b> à l'IUT de Troyes. Depuis septembre 2024, je suis alternant en tant <b>qu'assistant développeur Web chez Distrame</b>.
      </p>
      <p>
        Au cours de cette expérience, j'ai eu l'occasion de renforcer mes compétences dans divers domaines, notamment le développement sur <b>Magento</b> et <b>Symfony</b>, ainsi que la gestion de bases de données.
      </p>
    </BorderedBox>

    <Heading title="Compétences" subtitle="Tech Stacks" />
    <div class="techstack__group">
      <TechStack title="Langages" :techStack="['Html','Css', 'Javascript', 'Php', 'Scss']" />
      <TechStack title="Framework & CMS" :techStack="['Symfony','VueJS', 'Magento', 'Wordpress']" />
      <TechStack title="Outils" :techStack="['Bootstrap','TailwindCSS', 'Git', 'Docker']" />
    </div>

    <Heading title="Expériences et Formations" subtitle="Mon parcours" />
    <BorderedBox>
      <Experience :experiences="experiences" />
    </BorderedBox>
  </main>
</template>

<style scoped>
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

@media (min-width: 768px) {
  .techstack__group {
    flex-direction: row;
    gap: 2.4rem;
    justify-content: space-around;
  }
}

@media (min-width: 1024px) {
  main {
    max-width: 1024px;
    margin: 0 auto;
    padding: 3rem 3rem 100px;
  }
  .techstack__group {
    gap: 3.2rem;
    justify-content: space-between;
  }
}
</style>
