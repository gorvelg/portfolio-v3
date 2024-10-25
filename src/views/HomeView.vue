<script setup>
  import Button from '@/components/Button.vue';
  import IconGithub from '@/components/icons/IconGithub.vue';
  import IconLinkedin from '@/components/icons/IconLinkedin.vue';
  import IconMail from '@/components/icons/IconMail.vue';
</script>

<template>
  <main>
    <div class="home">
      <div class="home__image">
        <img class="home__image__memoji" src="@/assets/img/memoji.png" alt="guillaume gorvel photo">
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
          <a href="">
            <IconMail />
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
    height: 100vh;
  }
  .home__image {
    background: white;
    border-radius: 50%;
    border: 4px solid #b2a6e2;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  }
  .home__image__memoji {
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
