<template>
    <div class="box">
        <div class="box__border">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
  .box {
    position: relative;
    border-radius: 12px;
    padding: 0.4rem;
    overflow: hidden;
  }
  
  .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(60deg, #d11af5, #fff700, #07a3ff, #ff0000, #fdfdfd);
    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
  }
  
  .box__border {
    background: var(--bg-color-primary);
    border-radius: 12px;
    padding: 2.4rem;
  }
</style>