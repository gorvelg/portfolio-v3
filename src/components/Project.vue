<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  }
});

const hoveredIndex = ref(0);

// Couleurs des techs
const techColors = {
  symfony: '#4d5b6b',
  tailwind: '#38bdf8',
  vuejs: '#42B782',
  javascript: '#F5A907',
  html: '#DB4B2E',
  css: '#006CB5',
  php: '#4D588E',
  jquery: '#0865A6',
  twig: '#84A21A',
};
</script>

<template>
  <section class="container">
    <div class="project">
      <div v-for="(project, index) in projects" :key="project.title" class="project__thumbnail">
        <Transition name="fade">
          <img v-if="hoveredIndex === index" :src="project.thumbnail" alt="Project Thumbnail" />
        </Transition>
      </div>
      <div class="project__list">
        <div
            class="project__item"
            v-for="(project, index) in projects"
            :key="project.title"
            @mouseenter="hoveredIndex = index"
        >
          <span class="project__date">{{ project.date }}</span>
          <h3 class="project__title">{{ project.title }}</h3>
          <p class="project__description">{{ project.desc }}</p>
          <div class="project__stack">
            <span
                v-for="tech in project.stack"
                :key="tech"
                class="project__tech"
                :style="{ backgroundColor: techColors[tech] || 'grey' }"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project__stack {
  display: flex;
  gap: 1.6rem;
}
.project__tech {
  padding: 0.25rem 0.4rem;
  font-size: 1.2rem;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;
}
/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.project {
  position: relative;
  height: 50vh;
}
.project__thumbnail {
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.project__thumbnail img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.project__list {
  width: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 2.4rem;
  overflow-y: scroll;
  scrollbar-color: #ffffff transparent;
  scrollbar-width: thin;
}


.project__item {
  border-bottom: 2px solid #fff;
  padding: 1.2rem;
  transition: 250ms background ease-in-out;
}
.project__item:hover {
  background: #00000012;
}
.project__title {
  font-weight: 600;
  font-size: 2.4rem;
}
</style>
