<template>
  <UContainer>
    <h1 class="text-xl">Welcome to the home page {{ userName }}</h1>
  </UContainer>
</template>
<script setup lang="ts">
  import { useAuthStore } from '@/store/auth'

  let userName = useAuthStore().userName

  definePageMeta({
    middleware: ['auth'],
    // or middleware: 'auth'
  })
</script>
