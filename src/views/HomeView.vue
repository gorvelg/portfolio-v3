<script setup>
  import Button from '@/components/Button.vue';
  import IconGithub from '@/components/icons/IconGithub.vue';
  import IconLinkedin from '@/components/icons/IconLinkedin.vue';
  import IconMail from '@/components/icons/IconMail.vue';
  import HomeNetwork from '@/components/Home/HomeNetwork.vue';
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
          <Button type="secondary" size="md" to="/about">Voir plus...</Button>
          <Button type="primary" size="md" to="/about">Me contacter</Button>
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
    gap: 1.6rem;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
  }
  /* .home__image {
    background: linear-gradient(135deg, #b2a6e2, white);
    padding: 4px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  } */
  .home__image {
    border-radius: 50%;
    padding: 4px;
    position: relative;
    overflow: hidden;
    transition: cubic-bezier(.175,.885,.32,1.275) .5s;
}
  .home__image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(60deg, #d11af5, #fff700, #07a3ff, #ff0000, #fdfdfd);
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
}
  .home__image__memoji {
    display: block;
    user-select: none;
    border-radius: 50%;
    width: 200px;
    background: white; 
  }
  .home__description {
    display: flex;
    flex-direction: column;
    //line-height: 54px;
    gap: 1.6rem;
  }
  .home__heading {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }
  .home__text {
    font-size: 1.8rem;
    margin: 0;
    color: white;
  }
  .home__btn {
    display: flex;
    gap: 1.6rem;
  }
  @media (min-width: 724px) {
    .home__heading {
    font-size: 3.2rem;
    }
    .home{
      flex-direction: row;
    }
  }
  @media (min-width: 1024px) {
    .home__heading{
      font-size: 4.8rem;
    }
    
  }
</style>
