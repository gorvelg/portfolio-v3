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
.tech-stack {  
    display: flex;
    flex-direction: column;
    width: max-content;
    background: linear-gradient(135deg, #b2a6e2, white);
    flex-wrap: wrap;
    border-radius: 12px;
    padding: .4rem;
    text-transform: uppercase;
    letter-spacing: 2px;

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
