<script setup>
  import Button from '@/components/Button.vue';
  import IconGithub from '@/components/icons/IconGithub.vue';
  import IconLinkedin from '@/components/icons/IconLinkedin.vue';
</script>

<template>
  <main>
    <div class="home">
      <div>
        <img class="home__image" src="@/assets/img/memoji.png" alt="guillaume gorvel photo">
      </div>
      <div class="home__description">
        <h2 class="home__heading">
          Hey 👋,<br> Je suis Guillaume Gorvel.
        </h2>
        <p class="home__text">Développeur Web Fullstack Junior</p>
        <div class="home__btn">
          <Button type="secondary" size="md">
            <RouterLink to="/about">Voir plus...</RouterLink>
          </Button>
          <Button type="primary" size="md">Me contacter</Button>

        </div>
        <div class="home__network">
          <a href="https://github.com/gorvelg" target="_blank" rel="noopener noreferrer">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/guillaume-gorvel-0510ab267/" target="_blank" rel="noopener noreferrer">
            <IconLinkedin />
          </a>
        </div>
      </div>
    </div>

    
  </main>
</template>
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
  }
  .home__image {
    border-radius: 50%;
    width: 200px;
  }
  .home__description {
    display: flex;
    flex-direction: column;
    line-height: 54px;
  }
  .home__heading {
    font-size: 4.8rem;
    font-weight: 600;
    margin: 0;
  }
  .home__text {
    font-size: 1.8rem;
    margin: 0;
  }
  .home__btn {
    display: flex;
    gap: 1.6rem;
  }
  .home__network {
    display: flex;
    gap: 1.6rem;
    margin-top: 24px;
  }
  .home__network a {
    font-size: 2.4rem;
  }
  @media (min-width: 1024px) {
    .home{
      flex-direction: row;
    }
    
  }
</style>
