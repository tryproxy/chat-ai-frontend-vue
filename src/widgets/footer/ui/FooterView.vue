<script setup lang="ts">
const appMode = import.meta.env.MODE
const appEnv = import.meta.env.VITE_ENVIRONMENT
</script>
<template>
  <footer>
    <p>
      Mode: <strong>{{ appMode }}</strong>
      <span v-if="appEnv">
        · Environment: <strong>{{ appEnv }}</strong></span
      >
    </p>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </footer>
</template>
