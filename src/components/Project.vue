<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  projects: {
    type: Array, // Changez Object en Array pour v-for
    required: true,
  }
});

const hoveredIndex = ref(null); // Variable pour suivre l'index du projet survolé
</script>

<template>
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
        <h3 class="project__title">{{ project.title }}</h3>
        <p class="project__description">{{ project.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
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
.project__thumbnail img{
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
}

.project__item {
  border-bottom: 2px solid #fff;
}
</style>
