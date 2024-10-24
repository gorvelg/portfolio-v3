
<script setup>
    import DarkModeButton from './DarkModeButton.vue';
</script>

<template>
<header class="header">
    <div class="header__avatar">
        <img class="header__avatar-img" src="@/assets/img/avatar.jpg" alt="User Avatar">
    </div>
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
        padding: 0.8rem 1.6rem;
    }
    .header__navbar {
        display: flex;
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
        
    }
    .header__navbar-item:hover {
        color: #7d7d7d;
    }
    .header__navbar-item:visited{
        color: #ffffff;
    }
    
</style>
