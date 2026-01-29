<script setup lang="ts">
console.log('LoginForm')
</script>

<template>
  <div class='flex flex-col gap-4 border border-surface bg-surface'>
    <h1 class='text-3xl text-foreground-secondary'>Quick Login</h1>
    <form class='flex flex-col gap-2'>
      <div class='rounded-sm border border-surface'>
        <input class='
          p-2
          placeholder:text-foreground-secondary/30
        ' id='login' type='text' name='login' placeholder='Enter your username' />
      </div>
      <div>
        <input class='
          p-2
          placeholder:text-foreground-secondary/30
        ' id='password' type='password' name='password' placeholder='Enter your password' />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
