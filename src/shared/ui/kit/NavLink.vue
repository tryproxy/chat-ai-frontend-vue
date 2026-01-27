<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" class="text-lg" exact-active-class="underline" v-bind="$attrs">
    <slot />
  </RouterLink>
</template>
