<script setup>

import Heading from '@/components/Heading.vue'
import Form from '@/components/Form.vue'
import BorderedBox from '@/components/BorderedBox.vue';


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