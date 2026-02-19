<script setup lang="ts">
import { ROUTES } from '@/shared/config/router';
import NavLink from '@/shared/ui/kit/NavLink.vue';
</script>

<template>
  <header>
    <div class="flex justify-center gap-2">
      <NavLink :to="ROUTES.PAGES.HOME.path">Home</NavLink>
      <NavLink :to="ROUTES.PAGES.LOGIN.path">Login</NavLink>
    </div>
  </header>
</template>

<style scoped></style>
