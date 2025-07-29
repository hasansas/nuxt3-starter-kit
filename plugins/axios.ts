// plugins/axios.ts

import type { AxiosInstance } from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()

  let api: AxiosInstance | null = null;

  // ONLY create the Axios instance if we are on the client-side (browser)
  if (import.meta.client) {
    const { default: axios } = await import('axios');

    api = axios.create({
      baseURL: config.public.apiBase as string,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.public.apiKey as string,
      }
    });

    // Get the router instance here, at the top level of the client-side block
    const router = useRouter();

    // --- REQUEST INTERCEPTOR ---
    api.interceptors.request.use(
      (requestConfig) => {
        const token = useCookie('auth_token').value
        if (token) {
          requestConfig.headers = requestConfig.headers || {}
          requestConfig.headers.Authorization = `Bearer ${token}`
        }
        return requestConfig
      },
      (error) => Promise.reject(error)
    )

    // --- RESPONSE INTERCEPTOR ---
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          // --- Auto logout: clear auth cookie and redirect ---
          useCookie('auth_token').value = null

          // Optional: show a toast/notification here if you use a plugin
          // Example: useNuxtApp().$toast.error('Session expired. Please log in again.')

          // Use the router instance obtained earlier
          await router.push('/login'); // Await for clarity, though not strictly required for navigation to proceed
        }
        return Promise.reject(error)
      }
    )
  }

  // Provide $axios globally.
  nuxtApp.provide('axios', api)
})