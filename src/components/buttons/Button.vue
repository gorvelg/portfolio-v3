<template>
  <component
    :is="href ? 'a' : 'RouterLink'"
    :class="['btn', buttonType, buttonSize]"
    :to="!href ? to : undefined"
    :href="href ? to : undefined"
  >

    <i v-if="icon" :class="[icon]"></i>
    <slot></slot>
  </component>
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
      required: true, // Assurez-vous qu'une valeur est fournie pour l'attribut `to`
    },
    href: {
      type: Boolean,
      default: false, // Définit si le lien est externe ou interne
    },
    icon: {
      type: String,
      required: false
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
  border: var(--border-color) 2px solid;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  border-radius: 2.4rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
}

.btn--primary {
  background-color: var(--btn-bg-color-primary);
  color: var(--btn-text-color-primary);
}
.btn--secondary {
  background-color: var(--btn-bg-color-secondary);
  color: var(--btn-text-color-secondary);
  border: var(--border-color-secondary) 2px solid;

}

.btn--primary:hover {
  background-color: var(--btn-bg-hover-color-primary);
}
.btn--secondary:hover {
  background-color: var(--btn-bg-hover-color-secondary);
}
</style>
