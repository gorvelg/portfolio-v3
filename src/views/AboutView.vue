<script setup>
import { onMounted, computed } from 'vue'
import { gsap } from "gsap";

import TechStack from '@/components/TechStack.vue';
import Heading from '@/components/Heading.vue';
import BorderedBox from "@/components/BorderedBox.vue";
import Experience from '@/components/Experience.vue';
import { experiences } from '@/data/experiences';

const birthYear = 1996;
const currentYear = new Date().getFullYear();
const age = computed(() => currentYear - birthYear);

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
        Je m’appelle <b>Guillaume Gorvel</b>, j’ai {{ age }} ans et je suis <b>développeur web junior full stack</b>, basé à <b>Troyes</b> dans l’Aube (10).
      </p>
      <p>
        Grâce à mon parcours en <b>BUT Métiers du Multimédia et de l’Internet</b> à l’IUT de Troyes et à mes dernières expériences en développement web, j’ai pu développer mes compétences et me spécialiser sur des technologies comme <b>Magento</b>, <b>WordPress</b>, <b>Symfony</b> et <b>Vue.js</b>.
      </p>
      <p>
        Aujourd’hui, je conçois en freelance <b>des sites web sur mesure</b>, pensés pour répondre aux besoins de chaque projet et optimisés pour le référencement. Qu’il s’agisse d’un <b>site vitrine</b>, d’un <b>site de marque</b>, d’un <b>site événementiel</b>, d’une <b>boutique en ligne</b> ou d’un <b>site d’entreprise</b>, mon objectif est de proposer des solutions claires, efficaces et adaptées à vos besoins.
      </p>
      
    </BorderedBox>

    <Heading title="Compétences" subtitle="Tech Stacks" level="h2"/>
    <div class="techstack__group">
      <TechStack title="Langages" :techStack="['Html','Css', 'Javascript', 'Php', 'Scss']" />
      <TechStack title="Framework & CMS" :techStack="['Symfony','VueJS', 'Magento', 'Wordpress']" />
      <TechStack title="Outils" :techStack="['Bootstrap','TailwindCSS', 'Git', 'Docker']" />
    </div>

    <Heading title="Expériences et Formations" subtitle="Mon parcours" level="h2"/>
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
