<script setup>
import Heading from '@/components/Heading.vue';
import Project from '@/components/Project.vue';


</script>

<template>
  <main>
    <Heading title="Projets" subtitle="Mes réalisations"/>
    <section class="container">
      <div class="project">
        <Project/>
      </div>
    </section>
  </main>
</template>

<style scoped>

  main{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100vh;
    overflow: hidden;
    padding-bottom: 100px;
  }
  section.container {

    overflow: scroll;
    padding-bottom: 100px;
    color: white;
  }
  .project {
    height: 100%;
    position: relative;
  }
  @media screen and (min-width: 728px) {
    
    section.container{
      overflow: unset;
      height: 100vh;

    }
  }

</style>
