<template>
    <div>
      <div v-if="isDarkTheme" class="toggle-btn">
          <IconSunny @click="toggleTheme" />
        </div>
        <div v-else class="toggle-btn">
          <IconDarkMode @click="toggleTheme"/>
      </div>
    </div>
  </template>
  
  <script>
  import IconDarkMode from '@/components/icons/IconDarkMode.vue';
  import IconSunny from '@/components/icons/IconSunny.vue';
  
  export default {
    name: 'ThemeSwitcher',
    components: {
      IconDarkMode,
      IconSunny,
    },
    data() {
      return {
        isDarkTheme: false,
      };
    },
    methods: {
      toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
      },
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkTheme = savedTheme === 'dark';
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
      }
    },
  };
  </script>
  
  <style scoped>
    .toggle-btn{
      display: flex;
    }
  </style>
  