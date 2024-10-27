<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
})
</script>
<template>
     <div class="heading">
      <h1 class="heading-title">{{ title }}</h1>
      <span class="heading-subtitle">{{ subtitle }}</span>
    </div>
</template>
<style scoped>
.heading {
    margin: 48px 0;
    position: relative;
  }
  .heading-title {
    display: flex;
    letter-spacing: 5px;
    font-family: 'Quicksand';
    text-transform: uppercase;
    font-weight: 500;
    color: #ffffff;
    justify-content: center;
    font-size: 30px;
  }
  .heading-subtitle{
    width: 100%;
    font-size: 100px;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 50%;
    z-index: 0;
    text-transform: uppercase;
    opacity: 0.05;
    font-weight: 700;
    transform: translateY(-50%);
  }
</style>