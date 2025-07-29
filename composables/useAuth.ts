// composables/useAuth.ts
export function useAuth() {
  const token = ref<string | null>(null)

  // --- Check token on client only ---
  if (typeof window !== 'undefined') {
    token.value = localStorage.getItem('token')
  }

  const isLoggedIn = computed(() => !!token.value)

  const login = (newToken: string) => {
    localStorage.setItem('token', newToken)
    token.value = newToken
  }

  const logout = () => {
    localStorage.removeItem('token')
    token.value = null
    navigateTo('/login')
  }

  return {
    token,
    isLoggedIn,
    login,
    logout
  }
}
