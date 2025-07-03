
<template>
  <div class="project__stack">
    <span
        v-for="tech in stack"
        :key="tech"
        class="project__tech"
        :style="{ backgroundColor: techColors[tech] || '#ddd' }"
    >
      {{ techLabels[tech] || tech }}
    </span>
  </div>
</template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    stack: {
      type: Array,
      required: true,
    },
    techColors: {
      type: Object,
      required: true,
    },
    techLabels: {
      type: Object,
      required: false
    }
  });
  </script>
  
  <style scoped>
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
  </style>
  