<script setup>
import {onMounted, ref} from 'vue';
import Button from '@/components/buttons/Button.vue';
import HomeNetwork from '@/components/Home/HomeNetwork.vue';
import IconLocation from '@/components/icons/IconLocation.vue';


import memojiNormal from '@/assets/img/memoji.png';
import memojiWink from '@/assets/img/memoji-wink.png';
import {RouterLink} from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import {gsap} from "gsap";
import CopyButton from "@/components/buttons/CopyButton.vue";


const images = [memojiNormal, memojiWink];
const currentImageIndex = ref(0);


const handleMouseEnter = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  gsap.from('.home', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
})

</script>

<template>
  <Sidebar class="sidebar-sm">
    <RouterLink to="/about">Mentions légales</RouterLink>
  </Sidebar>
  <main>
    <div class="home">
      <div 
        class="home__image" 
        @mouseenter="handleMouseEnter"
      >
        <img 
          class="home__image__memoji" 
          :src="images[currentImageIndex]" 
          alt="guillaume gorvel photo"
        />
      </div>
      <div class="home__description">
        <h2 class="home__heading">
          Hey 👋,<br> <span>Je suis Guillaume Gorvel.</span>
        </h2>
        <p class="home__text">Développeur Web Fullstack Junior</p>
        <div class="home__location">
          <IconLocation />
          <span>Troyes, France</span>
        </div>
        <div class="home__btn">
          <Button type="secondary" size="md" to="/projects">Voir plus...</Button>
          <CopyButton/>
        </div>
        <HomeNetwork />
      </div>
    </div>    
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
}

.home__image {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
}

.home__image__memoji {
  display: block;
  user-select: none;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.home__description {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.home__heading {
  font-size: 2.4rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-color-secondary);
}

.home__heading span {
  background: -webkit-linear-gradient(var(--text-color-gradient-1), var(--text-color-gradient-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home__text {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-color-primary);
}

.home__location {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.home__btn {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

@media (min-width: 724px) {
  .home__heading {
    font-size: 3.2rem;
  }
  .home {
    flex-direction: row;
  }
  .home__btn{
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .home__heading {
    font-size: 4.8rem;
  }
}
@media (min-width: 1300px) {
  .sidebar-sm{
    display: none;
  }
}
</style>
