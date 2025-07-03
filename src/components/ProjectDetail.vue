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
              <div class="project__header">
                <h2>{{ project.title }}</h2>
                <ProjectStack :stack="project.stack" :techColors="techColors" :techLabels="techLabels" />
              </div>
              <p>{{ project.sections.overview }}</p>
              <div class="project__links">
                <Button
                    v-if="project.sections.website"
                    href
                    :to="project.sections.website"
                    type="primary"
                    size="sm"
                    icon="fa-solid fa-arrow-up-right-from-square"
                >
                  Visiter le site
                </Button>
                <Button
                    v-if="project.sections.github"
                    href
                    :to="project.sections.github"
                    type="primary"
                    size="sm"
                    icon="fa-brands fa-github"
                >
                  Voir le code
                </Button>
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
                    @click="openModal(image)"
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

    <!-- Modale -->
    <Modal :isOpen="isModalOpen" @close="closeModal">
      <img :src="selectedImage" alt="Selected Image" style="max-width: 100%; max-height: 100%;" />
    </Modal>
  </main>
</template>


<script setup>
import { projects } from "@/data/data.js";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Heading from "@/components/Heading.vue";
import BorderedBox from "@/components/BorderedBox.vue";
import Tabs from "@/components/Tabs.vue";
import Button from "@/components/buttons/Button.vue";
import Modal from "@/components/Modal.vue";
import IconList from "@/components/icons/IconList.vue";
import GalleryIcon from "@/components/icons/IconGallery.vue";
import IconOverview from "@/components/icons/IconOverview.vue";
import ProjectStack from "@/components/ProjectStack.vue";

const route = useRoute();
const project = ref(null);
const previousProject = ref(null);
const nextProject = ref(null);
const isModalOpen = ref(false);
const selectedImage = ref("");

const techColors = {
  symfony: "#4d5b6b",
  tailwind: "#38bdf8",
  vuejs: "#42B782",
  javascript: "#F5A907",
  html: "#DB4B2E",
  css: "#006CB5",
  php: "#4D588E",
  jquery: "#0865A6",
  twig: "#84A21A",
  magento: "#ff9d3d",
  leaflet: "#B4DD65",
  APIPlatform: '#65C9C8'
};

const techLabels = {
  symfony: "Symfony",
  tailwind: "Tailwind CSS",
  vuejs: "Vue.js",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  php: "PHP",
  jquery: "jQuery",
  twig: "Twig",
  magento: "Magento",
  leaflet: "Leaflet",
  APIPlatform: "API Platform"
};


const tabs = [
  { name: "Vue d'ensemble", icon: IconOverview },
  { name: "Détails", icon: IconList },
  { name: "Galerie", icon: GalleryIcon },
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

const openModal = (image) => {
  selectedImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

onMounted(() => updateProject());
watch(() => route.params.id, updateProject);
</script>

  <style scoped>
  .main {
    max-width: 1080px;
    margin: auto;
    padding: 0 1rem 100px;
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
    object-position: right;
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
    background: linear-gradient(45deg, var(--bg-color-primary), var(--bg-color-opacity-primary));
  }
  .project__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .project__header h2{
    color: var(--text-color-secondary);
    display: none;
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
    background: var(--btn-bg-color-primary);
    transition: color 0.3s;
    border: 2px solid var(--border-color-selected);
    display: flex;
    font-weight: 600;
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 2px;
    bottom: 100px;
    transform: translateY(-50%);
  }
  .arrow__link:hover {
    color: var(--hover-link-text-color);
    background: var(--btn-bg-hover-color-primary);
  }
  .arrow__link--left {
    left: 24px;
  }
  .arrow__link--right {
    right: 24px;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .gallery img{
    width: 100%;
    cursor: pointer;
  }
  @media screen and (min-width: 728px){
    .arrow__link {
      top: 50%;
    }
    .project__header{
      flex-direction: row;
    }
    .project__header h2{
      display: block;
    }
    .gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  </style>
  <style>
.project__content .box__border {
    padding: 100px 2.4rem 2.4rem;
    overflow: hidden;
}
.tabs__content .heading-2 {
    font-weight: 500;
    font-size: 2.4rem;
    width: max-content;
    margin-bottom: 2.5rem;
  }

.tabs__content .heading-2::after {
    display: block;
    width: 100%;
    content: "";
    height: 3px;
    border-radius:9999px;
    background: linear-gradient(45deg, #0090ff, #9bcaf0);

}
</style>