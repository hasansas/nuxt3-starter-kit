<template>
  <v-container fluid class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="nuxtstarter-card pa-8">
          <v-card-title class="text-h5 mb-4 px-0">Welcome to your Dashboard</v-card-title>

          <v-card-text v-if="user" class="px-0">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email || "—" }}</p>
            <p><strong>ID:</strong> {{ user.id }}</p>
          </v-card-text>

          <v-card-text v-else class="px-0">
            <v-alert type="warning" text>Unable to load user information.</v-alert>
          </v-card-text>

          <v-divider class="my-4" />

          <v-btn rounded variant="flat" color="error" @click="handleLogout">Logout</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const auth = useAuthStore();
const user = computed(() => auth.user);

function handleLogout() {
  auth.logout();
  navigateTo("/login");
}
</script>
