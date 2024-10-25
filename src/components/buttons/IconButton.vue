<script setup>
import { defineAsyncComponent, computed } from 'vue';
import { resolveComponent } from 'vue';

// Déclare une prop pour le nom de l'icône
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  }
});

// Charge dynamiquement le composant de l'icône
const IconComponent = computed(() => {
  return defineAsyncComponent(() => import(`@/components/icons/Icon${props.iconName}.vue`));
});
</script>

<template>
  <div>
    <a class="icon-btn" :href="link" target="_blank" rel="noopener noreferrer">
      <component :is="IconComponent" />
    </a>
  </div>
</template>
<style scoped>
.icon-btn {
  font-size: 2.4rem;
}
</style>
