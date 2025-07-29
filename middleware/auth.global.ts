// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  // Public pages
  const publicPages = ["/", "/login", "/about"];
  const isPublic = publicPages.includes(to.path);

  if (!auth.isLoggedIn && !isPublic) {
    return navigateTo("/login");
  }
});
