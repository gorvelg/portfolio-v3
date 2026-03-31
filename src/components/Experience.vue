<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
    experiences: {
        type: Array,
        required: true,
    },
});

const selectedIndex = ref(0);

const selectedExperience = computed(() => props.experiences[selectedIndex.value]);

const selectExperience = (index) => {
    selectedIndex.value = index;
};
</script>

<template>
    <!-- Slider / contenu au-dessus -->
    <div v-if="selectedExperience" class="experience__history">
        <div class="experience__history__img">
            <img :src="selectedExperience.logo" alt="Logo de l'expérience" />
        </div>
        <div class="experience__history__content">
            <p class="experience__history__title">{{ selectedExperience.title }}</p>
            <p class="experience__history__date">{{ selectedExperience.date }}</p> 
            <p class="experience__history__desc" v-html="selectedExperience.desc"></p>
        </div>
    </div>

    <!-- Timeline -->
    <ul class="experience__list">
        <li
            class="experience__item"
            v-for="(experience, index) in experiences"
            :key="index"
            :class="{ 'is-active': index === selectedIndex }"
            @click="selectExperience(index)"
        >
            <div class="experience__content">
                <span class="experience__title">{{ experience.shortTitle }}</span>
                <span class="experience__date">{{ experience.shortDate }}</span>
            </div>
        </li>
    </ul>
</template>

<style scoped>

.experience__history {
    margin-bottom: 32px;
    display: flex;
    gap: 16px;
    align-items: center;
    flex-direction: column;
}
.experience__history__img {
    flex: 0 0 220px;
    height: 220px;
}
.experience__history__img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.experience__history__title {
    color: var(--text-color-primary);
    font-size: 1.6rem;
    font-weight: bold;
}
.experience__history__date {
    color: var(--text-color-secondary);
    font-size: 1.6rem;
    margin-bottom: 16px;
}

ul.experience__list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.6rem;
    position: relative;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
}

ul.experience__list:after{
    content: "";
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-top: 12px solid var(--border-color);
    border-right: 9px solid transparent;
    position: absolute;
    left: 0;
    bottom: -5px;
    transform: translateX(-50%);
}

ul.experience__list::before {
    background: var(--border-color) none repeat scroll 0 0;
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    transform: translateX(-50%);
}

li.experience__item {
    margin: 0;
    padding: 0;
    position: relative;
}

li.experience__item::before {
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

li.experience__item:hover::before,
li.experience__item.is-active::before {
    background: var(--border-color-selected);
    border-color: var(--border-color-selected);
}

li.experience__item:hover,
li.experience__item.is-active {
    color: var(--hover-link-text-color);
}

.experience__content {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
}


@media (min-width: 768px) {

    ul.experience__list {
        flex-direction: row-reverse;
    }

    ul.experience__list:after{
        content: "";
        width: 0;
        height: 0;
        border-top: 9px solid transparent;
        border-left: 12px solid var(--border-color);
        border-bottom: 9px solid transparent;
        position: absolute;
        right: -15px;
        top: calc(50% + 1.5px);
        transform: translateY(-50%);
        bottom: unset;
        left: unset;
    }

    ul.experience__list::before {
        background: var(--border-color) none repeat scroll 0 0;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateX(0);
    }

    li.experience__item::before {
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

    .experience__title {
            font-size: 1.4rem;
        }

    @media (min-width: 1024px) {
        .experience__history {
            flex-direction: row;
        }
        
    }

    @media (min-width: 1224px) {
        .experience__title {
            font-size: 1.6rem;
        }
    } 
}
</style>