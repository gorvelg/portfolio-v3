<script setup>
import { ref, onMounted, nextTick } from 'vue';
import DarkModeButton from './DarkModeButton.vue';

const activeLinkOffset = ref(0);
const activeLinkWidth = ref(0);

const updateUnderlinePosition = (event) => {
  const target = event.target;
  if (target.classList.contains('header__navbar-item')) {
    activeLinkOffset.value = target.offsetLeft;
    activeLinkWidth.value = target.offsetWidth;
  }
};

onMounted(() => {
  const activeLink = document.querySelector('.header__navbar-item--active');
  if (activeLink) {
    activeLinkOffset.value = activeLink.offsetLeft;
    activeLinkWidth.value = activeLink.offsetWidth;
  }
});
</script>

<template>
  <header class="header">
    <nav class="header__navbar">
      <RouterLink
          class="header__navbar-item header__navbar-item--active"
          to="/"
          @click="updateUnderlinePosition"
      >Home</RouterLink>
      <RouterLink
          class="header__navbar-item"
          to="/about"
          @click="updateUnderlinePosition"
      >About</RouterLink>
      <RouterLink
          class="header__navbar-item"
          to="/projects"
          @click="updateUnderlinePosition"
      >Projects</RouterLink>
      <DarkModeButton />
      <div
          class="underline"
          :style="{ left: `${activeLinkOffset}px`, width: `${activeLinkWidth}px` }"
      ></div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  gap: 1rem;
  padding: 1.6rem 2.4rem;
  background: var(--bg-color-primary);
  color: var(--text-color-primary);
  border-radius: 24px;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 2px;
  z-index: 99;
  outline: #ffffff52 2px solid;
}
.header__navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Quicksand', sans-serif;
  gap: 2.4rem;
  position: relative;
}
.header__navbar-item {
  text-decoration: none;
  color: var(--text-color-primary);
  position: relative;
  cursor: pointer;
}
.header__navbar-item:hover {
  color: var(--hover-link-text-color);
}
.underline {
  position: absolute;
  bottom: -4px;
  height: 2px;
  background-color: var(--active-link-text-color);
  transition: left 0.3s ease, width 0.3s ease;
}
</style>
