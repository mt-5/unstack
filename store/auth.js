const supabase = useSupabaseClient()

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null, session: null }),
  getters: {
    isLoggedIn() {
      return !!this.user
    },
    userName() {
      return this.user?.user_metadata.full_name
    },
  },
  actions: {
    async signIn() {
      const res = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
    },

    async signOut() {
      const { error } = await supabase.auth.signOut()
      window.location.reload()
    },

    setUser(user) {
      this.$patch({ user })
    },
  },
})
