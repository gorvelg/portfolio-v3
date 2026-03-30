<script setup>
import { onMounted } from 'vue';
import { gsap } from "gsap";

import Heading from '@/components/Heading.vue'
import Form from '@/components/Form.vue'
import BorderedBox from '@/components/BorderedBox.vue';

onMounted(() => {
  gsap.from('.heading, .box', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
})

</script>

<template>
    <main>
        <Heading title="Démarrons un projet" subtitle="Me contacter" level="h1"/>
            <BorderedBox>
                <h2>Besoin d'un développeur pour votre projet ?</h2>
                <Form />
            </BorderedBox>
    </main>Vous
 
</template>

<style scoped>
    main {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 100px;
    }

    h2 {
        margin-bottom: 16px;
    }
</style>