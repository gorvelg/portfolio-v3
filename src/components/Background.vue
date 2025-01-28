<template>
  <div class="background">
    <svg
        width="2560"
        height="1920"
        viewBox="0 0 2560 1920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="opacity: 0.5;"
    >
      <g>
        <path
            d="M3020.93 134.455C3124.79 173.824 3164.97 266.778 3110.66 342.074C2627.55 1011.9 1866.31 2517.63 1361.75 2752.01C-681.389 3429.21 -4156.79 2571.47 -2138.3 1425.38C-119.809 279.282 -1553.39 -218.348 -406.211 -990.94C930.008 -1890.85 2560.5 -40.0647 3020.93 134.455Z"
            fill="url(#paint0_radial)"
        ></path>
        <path
            d="M885.9 -99.2149L1864.74 271.797C1921.14 293.178 1961.34 331.784 1974.23 376.971L2135.2 941.153L2866.18 715.05C2924.72 696.941 2991.39 698.838 3047.8 720.218L4026.64 1091.23C4130.5 1130.6 4170.68 1223.55 4116.37 1298.85L3855.77 1660.16C3833.07 1691.63 3796.05 1716.44 3750.99 1730.38L2473.16 2125.63L2754.29 3110.94C2764.38 3146.29 2756.99 3183.09 2733.43 3214.9L2367.46 3708.79L1208.97 3269.68C1152.56 3248.3 1112.37 3209.7 1099.48 3164.51C816.824 2173.87 718.627 2080.16 290.681 580.294C250.811 440.558 316.198 358.62 338.898 327.148L599.499 -34.1638C653.807 -109.46 782.033 -138.584 885.9 -99.2149Z"
            fill="url(#paint1_radial)"
        ></path>
      </g>
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-804.109 -2036.8) rotate(64.9401) scale(6436.87 6304.81)">
          <stop stop-color="var(--color-background-image-base)"></stop>
          <stop offset="0.0833333" stop-color="var(--color-background-image-accent-1)"></stop>
          <stop offset="0.364583" stop-color="var(--color-background-image-accent-2)"></stop>
          <stop offset="0.658041" stop-color="var(--color-background-image-base)"></stop>
        </radialGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(201.6 -1080.02) rotate(64.9401) scale(6436.87 6304.81)">
          <stop stop-color="var(--color-background-image-base)"></stop>
          <stop offset="0.0833333" stop-color="var(--color-background-image-accent-4)"></stop>
          <stop offset="0.333803" stop-color="var(--color-background-image-accent-5)"></stop>
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

// Gestion dynamique du thème
const isDarkMode = ref(false);

onMounted(() => {
  // Exemple : activer le thème dark par défaut
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
});
</script>
<style scoped>
.background {
  position: fixed;
  inset: 0;
  background-color: var(--bg-color-primary);
}

/* Thème clair/sombre */
:root {
  --color-background-image-base: var(--bg-color-primary);
  --color-background-image-accent-1: var(--blue-7-light);
}

.dark-theme {
  --color-background-image-base: var(--bg-color-primary-dark);
  --color-background-image-accent-1: var(--blue-7-dark);
}
</style>
