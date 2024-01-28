<template>
  <header class="py-4 border-b border-neutral-800">
    <UContainer class="flex">
      <a href="/" class="text-xl flex gap-3">
        <img src="assets/work-stack.svg" class="h-5 mt-1" />
        <span>WorkStack<sup class="text-emerald-600">v0.1</sup></span>
      </a>
      <div class="ml-auto">
        <UButton
          v-if="auth.isLoggedIn"
          label="Sign out"
          variant="outline"
          @click="auth.signOut()"
        />
        <UButton v-else label="Sign In" @click="auth.signIn()" />
      </div>
    </UContainer>
  </header>
</template>
<script setup>
  import { useAuthStore } from '@/store/auth'
  const auth = useAuthStore()

  //auth.signIn()
</script>
