// stores/auth.ts
import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
  email?: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

export const useAuthStore = defineStore("auth", () => {
  // State
  const token = useCookie<string | null>("token", { sameSite: "strict" });
  const user = ref<User | null>(null);

  // Getters
  const isLoggedIn = computed(() => !!token.value);

  // Actions
  async function login(payload: LoginPayload): Promise<void> {
    try {
      const mockEmail = "user@test.com";
      const mockPassword = "123456";

      if (payload.email === mockEmail && payload.password === mockPassword) {
        token.value = "mocked-token-abc123";
        user.value = {
          id: 1,
          name: "Admin User",
          email: mockEmail,
        };
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err) {
      throw createError({
        statusCode: 401,
        statusMessage: (err as Error).message || "Login failed",
      });
    }
  }

  function logout(): void {
    token.value = null;
    user.value = null;
  }

  return { token, user, isLoggedIn, login, logout };
});
