<script setup lang="ts">
import { ROUTES } from '@/shared/config/router'
</script>

<template>
  <header>
    <div class="flex gap-2 justify-center">
      <RouterLink exact-active-class="active" :to="ROUTES.PAGES.HOME.path" class="link">
        Home
      </RouterLink>
      <RouterLink exact-active-class="active" :to="ROUTES.PAGES.LOGIN.path" class="link"
        >Login</RouterLink
      >
    </div>
  </header>
</template>

<style scoped>
.link {
  font-size: 1rem;
  color: #2563eb;
  text-decoration: underline;
}
.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
