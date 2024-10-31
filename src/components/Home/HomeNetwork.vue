<script setup>
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconMail from '@/components/icons/IconMail.vue';
import IconButton from '@/components/buttons/IconButton.vue';
</script>
<template>
    <div class="home__network">
        <IconButton iconName="Github" link="https://github.com/gorvelg" />
        <IconButton iconName="Linkedin" link="https://www.linkedin.com/in/guillaume-gorvel-0510ab267/" />
        <IconButton iconName="Mail" link="mailto:contact@guillaume-gorvel.fr" />
        </div>
</template>
<style scoped>
    .home__network {
        display: flex;
        gap: 1.6rem;
        margin-top: 24px;
      justify-content: space-around;
    }
    @media (min-width: 724px) {
      .home__network{
        justify-content: flex-start;
      }
    }
</style>