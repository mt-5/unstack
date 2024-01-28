export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null, session: null }),
  getters: {
    isLoggedIn() {
      return !!this.user
    },
  },
  actions: {
    async signIn() {
      const supabase = useSupabaseClient()
      const redirectTo = useRuntimeConfig().public.appUrl + '/confirm'
      const scopes = 'read:user repo repo_deployment read:project notifications'

      const { error, user } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        redirectTo,
        options: {
          redirectTo,
          scopes,
        },
      })

      if (error) {
        console.log(error)
        return
      }

      this.user = user
    },

    async signOut() {
      const supabase = useSupabaseClient()
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.log(error)
        return
      }

      window.location.reload()
    },

    setUser(user) {
      this.$patch({ user })
    },
  },
})
