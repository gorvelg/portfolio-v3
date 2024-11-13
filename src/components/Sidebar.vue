<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>
<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  writing-mode: vertical-lr;
}


.sidebar:after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 25vh;
  margin-top: 16px;
  background: var(--text-color-primary-dark);
}
</style>