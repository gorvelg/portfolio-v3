<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";
</script>

<template>
  <Background />
  <Sidebar class="sidebar-xl">
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
  }
  @media (min-width: 1024px) {
    .wrapper {
    max-width: 1280px;
    }
  }
  .sidebar-xl{
    display: none;
  }
  @media (min-width: 1300px) {
    .sidebar-xl{
      display: block;
    }
  }
</style>
