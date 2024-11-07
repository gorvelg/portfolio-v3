<template>
  <RouterLink
    :class="['btn', buttonType, buttonSize]" :to="to"
  >
    <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary', // 'primary', 'secondary', etc.
    },
    size: {
      type: String,
      default: 'md', // 'sm', 'md', 'lg' for small, medium, large sizes
    },
    to: {
      type: String,

    }
  },
  computed: {
    buttonType() {
      return `btn--${this.type}`;
    },
    buttonSize() {
      return `btn--${this.size}`;
    },
  },

};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  border-radius: 2.4rem;
  transition: background-color 0.3s ease;
  
}
.btn--primary{
  background-color: var(--btn-bg-color-primary);
  color: var(--btn-text-color-primary);
}
.btn--secondary{
  background-color: var(--btn-bg-color-secondary);
  color: var(--btn-text-color-secondary);
}

.btn--primary:hover {
  background-color: var(--btn-bg-hover-color-primary);
}
.btn--secondary:hover {
  background-color: var(--btn-bg-hover-color-secondary);
}

</style>
