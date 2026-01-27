<script setup lang="ts">
const appMode = import.meta.env.MODE
const appEnv = import.meta.env.VERCEL_ENV ?? import.meta.env.VITE_ENVIRONMENT ?? 'local'
</script>
<template>
  <footer>
    <p>
      Mode: <strong>{{ appMode }}</strong>
      <span v-if="appEnv">
        · Environment: <strong>{{ appEnv }}</strong></span
      >
    </p>
    <p>gh:<a href="https://github.com/tryproxy" target="_blank" rel="noopener">tryproxy</a></p>
  </footer>
</template>
