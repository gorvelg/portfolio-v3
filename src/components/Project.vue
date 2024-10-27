<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    projects: {
        type: Object,
        required: true,
    }
});
</script>
<template>
     <div class="project" v-for="project in projects" :key="project">
      <div class="project__thumbnail">
        <img src="" alt="">
      </div>
      <div class="project__list">
        <div class="project__item">
          <h3 class="project__title">{{ project.title }}</h3>
          <p class="project__description">{{ project.desc }}</p>
        </div>
      </div>
     </div>
</template>
<style scoped>
 .project {
    display: flex;
    gap: 2.4rem;
    height: 50vh;
}
  .project__thumbnail {
    width: 50%;
    background: aquamarine;
  }
  .project__list {
    width: 50%;
}
  .project__item {
    border-bottom: 2px solid #fff;
  }
</style>