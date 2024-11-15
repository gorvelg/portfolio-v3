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
    z-index: 0;
    background: linear-gradient(
  60deg,
  var(--bg-gradient-bordered-box-1),
  var(--bg-gradient-bordered-box-2),
  var(--bg-gradient-bordered-box-1),
  var(--bg-gradient-bordered-box-2),
  var(--bg-gradient-bordered-box-1)
);

    background-size: 300% 300%;
    animation: gradient 5s ease infinite;
  }
  
  .box__border {
    background: var(--bg-color-primary);
    border-radius: 12px;
    padding: 2.4rem;
    position: relative;
  }
</style>