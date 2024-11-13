<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <Sidebar>
    <RouterLink to="/about">Mentions légales</RouterLink>
    </Sidebar>
  <Navbar />
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1.6rem;
  }
  @media (min-width: 768px) {
  .wrapper {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
  .wrapper {
    max-width: 1280px;
  }
}
}
</style>
