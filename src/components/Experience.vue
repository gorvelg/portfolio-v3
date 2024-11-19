<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    experiences: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <ul>
        <li v-for="(experience, index) in experiences" :key="index">
            <div class="experience__content">
                <span class="experience__title">{{ experience.title }}</span>
                <span class="experience__date">{{ experience.date }}</span>
            </div>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.6rem;
    position: relative;
    justify-content: center;
    flex-direction: column;
}

ul::before {
    background: var(--border-color) none repeat scroll 0 0;
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    transform: translateX(-50%);
}

li {
    margin: 0;
    padding: 0;
    position: relative;
}

li::before {
    background: var(--btn-bg-color-primary);
    border: 2px solid var(--border-color);
    border-radius: 50%;
    content: "";
    height: 24px;
    left: 0;
    top: 0;
    position: absolute;
    transform: translateX(-50%);
    width: 24px;
}

li:hover::before {
    background: var(--btn-bg-hover-color-primary);
    border-color: var(--border-color-selected);
}

.experience__content {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
}

@media (min-width: 768px) {
    ul {
        flex-direction: row-reverse;
    }

    ul::before {
        background: var(--border-color) none repeat scroll 0 0;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateX(0);
    }

    li::before {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .experience__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        gap: 32px;
    }
}
</style>
