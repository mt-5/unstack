import { useAuthStore } from '@/store/auth'

const auth = useAuthStore()
const user = useSupabaseUser()

export default defineNuxtRouteMiddleware((to, _from) => {
  auth.setUser(user.value)

  if (!auth.isLoggedIn) {
    return navigateTo('/login')
  }
})
