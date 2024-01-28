<template>
  <UContainer class="text-center">
    <UIcon name="i-heroicons-check-circle" class="text-primary text-5xl" />
    <h1 class="text-xl">Redirecting...</h1>
  </UContainer>
</template>

<script setup>
  const user = useSupabaseUser()

  watch(
    user,
    () => {
      if (user.value) {
        return navigateTo('/')
      }
    },
    { immediate: true }
  )
</script>
