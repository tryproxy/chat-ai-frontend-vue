<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  const backendBase = import.meta.env.VITE_BACKEND_BASE_URL || 'https://hono-prisma-vue-grammy.onrender.com/'
  const marketplace = String(route.params.marketplace || 'digiseller');
  const url = new URL(`/checkout/${marketplace}`, backendBase)

  Object.entries(route.query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v != null) url.searchParams.append(key, String(v))
      })

      return
    }

    if (value != null) {
      url.searchParams.set(key, String(value))
    }
  })

  window.location.replace(url.toString())
})
</script>

<template>
  <div class="flex items-center justify-center gap-2 text-2xl">
    <span class="text-4xl">Checkout Order</span>
    <div class="size-10 rounded-full bg-primary">Processing...</div>
  </div>
</template>

<style scoped></style>
