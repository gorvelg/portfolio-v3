<script setup>
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const textToCopy = ref('contact@guillaume-gorvel.fr')
const { copy } = useClipboard({ source: textToCopy })
const copied = ref(false)

const handleCopy = async () => {
  await copy()
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <div class="btn">
    <span class="btn-content" title="{{ textToCopy }}">{{ textToCopy }}</span>
    <button @click="handleCopy" class="btn-copy">
      <i :class="copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'"></i>
    </button>
  </div>
</template>

<style scoped>
.btn {
  font-size: 1.6rem;
  color: var(--btn-text-color-primary);
  transition: background-color 0.3s ease;
  display: grid;
  grid-template-columns: 1fr auto;
  font-weight: 600;
  max-width: 100%;
  overflow: hidden;

}

.btn-content {
  background-color: var(--btn-bg-color-primary);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  padding: 10px 20px;
  border-radius: 2.4rem 0 0 2.4rem;
  border: var(--border-color) 2px solid;
  user-select: all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 100%;
  font-weight: 600;
}

.btn-copy {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  background-color: var(--btn-bg-color-primary);
  border-radius: 0 2.4rem 2.4rem 0;
  border: var(--border-color) 2px solid;
  margin-left: -2px;
  cursor: pointer;
  height: 100%;
}

.btn-copy i {
  color: var(--btn-text-color-primary);
}
</style>
