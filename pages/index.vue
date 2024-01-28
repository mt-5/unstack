<template>
  <UContainer>
    <h1 class="text-xl">Welcome to the home page</h1>
    <pre>{{ jiraUser }}</pre>
  </UContainer>
</template>

<script setup>
  import { JiraService } from '@/services/JiraService'
  definePageMeta({
    middleware: 'auth',
  })

  let jiraUser = await JiraService.getUser()
</script>
