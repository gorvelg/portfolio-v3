<script setup>
import { defineProps, defineAsyncComponent } from 'vue';
import IconButton from '@/components/buttons/IconButton.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    techStack: {
        type: Array,
        required: true
    }
});

// Fonction pour charger chaque icône dynamiquement
const loadIconComponent = (iconName) => {
    try {
        return defineAsyncComponent(() => import(`@/components/icons/Icon${iconName}.vue`));
    } catch (error) {
        console.error(`Icon ${iconName} not found.`);
        return null;
    }
};
</script>

<template>
    <div class="tech-stack">
        <div class="tech-stack__border">
            <div class="tech-stack__title">{{ title }}</div>
            <div class="tech-stack__list">
                <div v-for="item in techStack" :key="item">
                    <IconButton :iconName="item" :isLinked="false" size="4.0rem"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

 .tech-stack{
    display: flex;
    flex-direction: column;
    width: max-content;
    flex-wrap: wrap;
    border-radius: 12px;
    padding: 4px;
    position: relative;
    overflow: hidden;
    transition: cubic-bezier(.175,.885,.32,1.275) .5s;
 }

 .tech-stack::before{
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
 .tech-stack__border{
    background: white;
    border-radius: 12px;
    padding: 2.4rem;
 }
.tech-stack__title {
    color: #222;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1.6rem;
}
.tech-stack__list {
    display: flex;
    gap: 1.6rem;
}

</style>
