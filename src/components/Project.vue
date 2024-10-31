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
          <div class="project__heading-selected">
            <span class="project__heading__arrow">→</span>
            <h3 class="project__heading__title">{{ project.title }}</h3>
          </div>
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
</template>

<style scoped>
/* Styles de base pour mobiles */


.project__stack {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
}
.project__tech {
  padding: 0.25rem 0.8rem;
  font-size: 1.2rem;
  border-radius: 14px;
  text-transform: capitalize;
  color: #fff;
  font-weight: 700;
  border: 2px solid #ffffff52;
}
/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.project__thumbnail {
  display: none;
}
.project__list {
  width: 100%;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-y: visible;
}
.project__item {
  border-bottom: 2px solid #fff;
  padding: 1.2rem;
  transition: 250ms background ease-in-out;
  overflow: hidden;
  cursor: pointer;
}
.project__item:hover {
  background: #00000012;
}
.project__heading-selected {
  font-size: 2.4rem;
  display: flex;
  gap: 8px;
  align-items: center;
  transform: translateX(-32px);
  transition: 250ms transform cubic-bezier(0, 0, 0, 1);
}
.project__heading__title {
  font-weight: 600;
}
.project__item:hover .project__heading-selected {
  transform: translateX(0px);
}
.project__stack {
  margin-top: 0.8rem;
}

/* Styles pour écrans plus grands */
@media screen and (min-width: 728px) {


  .project__thumbnail {
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    display: block;
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
    padding-right: 1rem;
    padding-bottom: 0;
    overflow-y: scroll;
  }
  .project__list::-webkit-scrollbar {
    width: 10px;
    border-radius: 3px;
  }
  .project__list::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 3px;
  }
  .project__list::-webkit-scrollbar-track {
    -webkit-box-shadow: 0 0 2px rgb(0 0 0 / 16%);
    background-color: #f2f2f22e;
    border-radius: 3px;
  }
}
</style>

