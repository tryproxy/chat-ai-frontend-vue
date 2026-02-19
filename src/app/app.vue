<script setup lang="ts">
import DefaultLayout from '@/shared/ui/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transition || 'page'" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </DefaultLayout>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 150ms,
    transform 150ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    transform 200ms,
    opacity 200ms;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(8px);
  opacity: 0;
}
</style>
