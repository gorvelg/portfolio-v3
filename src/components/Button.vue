<template>
  <button
    :class="['btn', buttonType, buttonSize]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonType() {
      return `btn--${this.type}`;
    },
    buttonSize() {
      return `btn--${this.size}`;
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event); // Emit a click event to parent
      }
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
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
}
.btn--primary{
  background-color: var(--btn-bg-color-primary);
  color: var(--btn-text-color);
}
.btn--secondary{
  background-color: var(--btn-bg-color-secondary);
  color: var(--btn-text-color);
}

.btn--primary:hover {
  background-color: var(--btn-bg-hover-color-primary);
}
.btn--secondary:hover {
  background-color: var(--btn-bg-hover-color-secondary);
}
.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
