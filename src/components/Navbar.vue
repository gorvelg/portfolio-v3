
<script setup>
    import DarkModeButton from './DarkModeButton.vue';
</script>

<template>
<header class="header">
    <nav class="header__navbar">
        <RouterLink class="header__navbar-item header__navbar-item--active" to="/">Home</RouterLink>
        <RouterLink class="header__navbar-item" to="/about">About</RouterLink>
        <RouterLink class="header__navbar-item" to="/projects">Projects</RouterLink>
        <DarkModeButton />
    </nav>
</header>

</template>
<style scoped>
    .header{
        display: flex;
        gap: 1rem;
        padding: 1.6rem 2.4rem;
        background: var(--bg-color-primary);
        color: var(--text-color-primary);
        border-radius: 24px;
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
        z-index: 99;
    }
    .header__navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Quicksand', sans-serif;
        gap: 2.4rem;
    }
    .header__avatar-img{
        border-radius: 50%;
        width: 50px;
    }
    .header__navbar-item {
        text-decoration: none;
        color: var(--text-color-primary);
        
    }
    .header__navbar-item:hover {
        color: #7d7d7d;
    }
    .header__navbar-item:visited{
        color: inherit;
    }

    #app .router-link-active {
      color: var(--active-link-text-color);
      font-weight: 600;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    }
    
</style>
