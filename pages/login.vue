<template>
  <section class="py-16">
    <v-container class="main-container">
      <v-card flat width="360" class="nuxtstarter-card mx-auto pa-8">
        <v-card-title class="d-block text-center text-h5 pa-0 mb-16">
          Sign Into Your Account
        </v-card-title>
        <v-form @submit.prevent="handleLogin">
          <v-text-field v-model="email" label="Email" />
          <v-text-field v-model="password" label="Password" type="password" />
          <v-btn gradient rounded block size="large" type="submit" :loading="loading">Login</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const auth = useAuthStore();
const email = ref("");
const password = ref("");
const loading = ref(false);

async function handleLogin() {
  loading.value = true;
  try {
    await auth.login({ email: email.value, password: password.value });
    await navigateTo("/dashboard");
  } catch (err: any) {
    console.error(err?.data?.message || "Login failed");
  } finally {
    loading.value = false;
  }
}
</script>
