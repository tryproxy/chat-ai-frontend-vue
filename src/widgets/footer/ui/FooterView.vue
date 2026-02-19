<script setup lang="ts">
const appEnv = import.meta.env.MODE
const appMode = import.meta.env.VITE_ENVIRONMENT ?? 'local'
</script>
<template>
  <footer>
    <p>
      stage: <strong>{{ appMode }}</strong>
      <span v-if="appEnv">
        · Environment: <strong>{{ appEnv }}</strong></span
      >
    </p>
    <p>gh:<a href="https://github.com/tryproxy" target="_blank" rel="noopener">tryproxy</a></p>
  </footer>
</template>
