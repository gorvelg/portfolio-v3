<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  level: {
    type: String,
    default: 'h1',
    validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
  }
})
</script>

<template>
  <div class="heading">
    <component :is="level" class="heading-title">
      {{ title }}
    </component>

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
  color: var(--text-color-secondary);
  justify-content: center;
  font-size: 24px;
}

.heading-subtitle {
  width: 100%;
  font-size: 42px;
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

@media (min-width: 728px) {
  .heading-title {
    font-size: 4vw;
  }

  .heading-subtitle {
    font-size: 7vw;
  }
}

@media (min-width: 1024px) {
  .heading-title {
    font-size: 30px;
  }

  .heading-subtitle {
    font-size: 100px;
  }
}
</style>