<script setup lang="ts">
import LoginForm from './LoginForm.vue';

</script>


<template>
  <div class="
    flex min-h-screen flex-col items-center justify-center text-2xl
    text-foreground
  ">
    <div class="
      flex items-center justify-center rounded-sm border border-surface-border
      bg-surface p-4
    ">
      <LoginForm class="" />
    </div>
  </div>
</template>


<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #333;
}
</style>
