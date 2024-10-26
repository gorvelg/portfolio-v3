<script setup>
import { defineAsyncComponent, computed, defineProps } from 'vue';

// Déclare une prop pour le nom de l'icône
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  isLinked: {
    type: Boolean,
    default: true
  },
  link: {
    type: String,
  
  },
  size: {
    type: String,
    default: '2.4rem'
  }
});

// Charge dynamiquement le composant de l'icône
const IconComponent = computed(() => {
  try {
    return defineAsyncComponent(() => import(`@/components/icons/Icon${props.iconName}.vue`));
  } catch (error) {
    console.error(`Icon ${props.iconName} not found.`);
    return null;
  }
});
</script>

<template>
  <div class="icon-btn">
    
     <span v-if="!isLinked" class="icon-btn__link" :style="{fontSize: size}">
       <component :is="IconComponent" v-if="IconComponent && !isLinked" />
     </span>
    
    <a v-if="isLinked" :href="link" target="_blank" rel="noopener noreferrer" class="icon-btn__link" :style="{fontSize: size}">
      <component :is="IconComponent" v-if="IconComponent" />
    </a>
    
    <div class="icon-tooltip">
      {{ iconName }}
    </div>
  </div>
</template>

<style scoped>
.icon-btn {
  position: relative;
  display: inline-block;
}
.icon-btn__link {
  display: inline-block;
}
.icon-tooltip {
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
  font-size: 1.6rem;
  padding: 0.25rem 1rem;
  background-color: #262626;
  border-color: #404040;
  color: #a3a3a3;
  border-radius: 24px;
  border-width: 1px;
  z-index: 10;
  line-height: 24px;
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}
.icon-tooltip::before {
  content: '';
  border-style: solid;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-top: 10px solid #262626;
  border-bottom: 0;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
.icon-btn:hover .icon-tooltip {
  visibility: visible;
  opacity: 1;
}
</style>
