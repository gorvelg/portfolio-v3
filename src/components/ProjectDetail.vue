<template>
    <main class="main">
      <div v-if="project" class="project">
        <Heading :title="project.title" subtitle="Projet" />
        <img class="project__img" :src="project.thumbnail" :alt="project.name" />
        <hr class="project__underline" />
        <BorderedBox>
        <div class="project__row">
              <h2>Technologies utilisées</h2>
              <ProjectStack :stack="project.stack" :techColors="techColors" />
            </div>
            <div class="project__content">
              <h2>{{ project.title }}</h2>
              <p>{{ project.date }}</p>
              <p>{{ project.desc }}</p>
            </div>
      </BorderedBox>
      </div>
      <div v-else>
        <p>Aucun projet trouvé</p>
      </div>
      
  
      <RouterLink
        v-if="previousProject !== null"
        :to="{ name: 'project', params: { id: previousProject } }"
        class="arrow__link arrow__link--left"
      >
        ←
      </RouterLink>
      <RouterLink
        v-if="nextProject !== null"
        :to="{ name: 'project', params: { id: nextProject } }"
        class="arrow__link arrow__link--right"
      >
        →
    </RouterLink>
    </main>

  </template>
  
  <script setup>
  import { projects } from '@/data/data.js';
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Heading from '@/components/Heading.vue';
  import ProjectStack from '@/components/ProjectStack.vue';
  import BorderedBox from '@/components/BorderedBox.vue';
  
  const route = useRoute();
  const project = ref(null);
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
  
  const updateProject = () => {
    const projectId = parseInt(route.params.id);
    project.value = projects.find((p) => p.id === projectId) || null;
    previousProject.value = getPreviousProjectId(projectId);
    nextProject.value = getNextProjectId(projectId);
  };
  
  const getPreviousProjectId = (id) => {
    const currentIndex = projects.findIndex((p) => p.id === id);
    if (currentIndex > 0) {
      return projects[currentIndex - 1].id;
    }
    return null;
  };
  
  const getNextProjectId = (id) => {
    const currentIndex = projects.findIndex((p) => p.id === id);
    if (currentIndex < projects.length - 1) {
      return projects[currentIndex + 1].id;
    }
    return null;
  };
  
  const previousProject = ref(null);
  const nextProject = ref(null);
  
  onMounted(() => {
    updateProject();
  });
  
  watch(() => route.params.id, updateProject);
  </script>
  
  <style scoped>
  .main {
    max-width: 1080px;
    margin: auto;
  }
  
  .project {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .project__underline {
    border-style: none;
    border-top: 1.5px solid white;
  }
  
  .project__img {
    width: 100%;
    border-radius: 12px;
  }
  
  .project__row {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .project__content {
    margin-top: 1rem;
  }
  
  .arrow__link {
    text-decoration: none;
    font-size: 2.4rem;
    color: var(--text-color-primary);
    cursor: pointer;
    background: white;
    transition: color 0.3s;
    display: flex;
    font-weight: 600;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 2px;
  }
  
  .arrow__link:hover {
    color: var(--text-color-hover);
  }
  
  .arrow__link--left {
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }
  
  .arrow__link--right {
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
  </style>
  