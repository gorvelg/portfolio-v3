<script>
</script>
<template>
    <div class="tabs">
      <div class="tabs__header">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name"
        >
          <component v-if="tab.icon" :is="tab.icon" class="tab-icon" />
          {{ tab.name }}
        </button>
      </div>
      <div class="tabs__content">
        <slot :activeTab="activeTab"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    tabs: {
      type: Array,
      required: true,
    }
  });
  
  const activeTab = ref(props.tabs[0].name);
  </script>
  
  <style scoped>
  .tabs__header {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid var(--inactive-link-text-color);
  }
  .tabs__header button {
    color: var(--inactive-link-text-color);
    fill: var(--inactive-link-text-color);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1.5rem 3rem;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s;
    position: relative;
  }
  .tabs__header button.active {
    color: var(--text-color-primary);
    fill: var(--text-color-primary);
  }
  .tabs__header button.active::after {
    width: 100%;
    content: '';
    position: absolute;
    height: 3px;
    bottom: -1px;
    left: 0;
    background: linear-gradient(45deg, #0090FF, #9bcaf0);
    transition: all 0.4s ease;
  }
  svg.tab-icon path {
    fill: inherit;
}
  .tabs__content {
    padding-top: 1rem;
  }
  </style>
  