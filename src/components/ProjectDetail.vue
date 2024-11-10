<template>
    <main class="main">
      <div v-if="project" class="project">
        <Heading :title="project.title" subtitle="Projet" />
        <BorderedBox class="project__content">
            <div class="project__img__heading">
                <img class="project__img" :src="project.sections.banner" :alt="project.name" />
                <div class="project__img-overlay"></div>
            </div>
    
          <Tabs :tabs="tabs">
            <template #default="{ activeTab }">
              <div v-if="activeTab === 'Vue d\'ensemble'">
                <p>{{ project.sections.overview }}</p>
                <div class="project__links">
                  <Button v-if="project.sections.website" href :to="project.sections.website" type="primary" size="sm">Visiter le site</Button>
                  <Button v-if="project.sections.github" href :to="project.sections.github" type="primary" size="sm">Voir le code</Button>
                </div>
              </div>
              <div v-else-if="activeTab === 'Détails'">
                <div v-html="project.sections.details"></div>
              </div>
              <div v-else-if="activeTab === 'Galerie'">
                <div class="gallery">
                  <img
                    v-for="(image, index) in project.sections.gallery"
                    :key="index"
                    :src="image"
                    alt="Gallery Image"
                  />
                </div>
              </div>
            </template>
          </Tabs>
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
  import BorderedBox from '@/components/BorderedBox.vue';
  import Tabs from '@/components/Tabs.vue';
  import Button from '@/components/buttons/Button.vue';
  // Importation des icônes
  import IconList from '@/components/icons/IconList.vue';
  import GalleryIcon from '@/components/icons/IconGallery.vue';
  import IconOverview from '@/components/icons/IconOverview.vue';
  
  const route = useRoute();
  const project = ref(null);
  const previousProject = ref(null);
  const nextProject = ref(null);
  
  const tabs = [
    { name: 'Vue d\'ensemble', icon: IconOverview },
    { name: 'Détails', icon: IconList },
    { name: 'Galerie', icon: GalleryIcon }
  ];
  
  const updateProject = () => {
    const projectId = parseInt(route.params.id);
    project.value = projects.find((p) => p.id === projectId) || null;
    previousProject.value = getPreviousProjectId(projectId);
    nextProject.value = getNextProjectId(projectId);
  };
  
  const getPreviousProjectId = (id) => {
    const currentIndex = projects.findIndex((p) => p.id === id);
    return currentIndex > 0 ? projects[currentIndex - 1].id : null;
  };
  
  const getNextProjectId = (id) => {
    const currentIndex = projects.findIndex((p) => p.id === id);
    return currentIndex < projects.length - 1 ? projects[currentIndex + 1].id : null;
  };
  
  onMounted(() => updateProject());
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
  .project__img__heading{
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .project__img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }
  .project__img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(45deg, #aaa6bb, transparent);
}
.project__links{
  display: flex;
  gap: 1.6rem;
  margin-top: 1.6rem;
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
  <style>
.project__content .box__border {
    padding: 100px 2.4rem 2.4rem;
    position: relative;
    overflow: hidden;
}
</style>