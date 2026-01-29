<script setup lang="ts">
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
</script>

<template>
  <div class="v-layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
@layer components {
  .v-layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
}
</style>
