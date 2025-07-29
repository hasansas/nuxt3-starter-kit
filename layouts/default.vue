<template>
  <v-app>
    <BaseAppBar @toggle-drawer="drawer = !drawer" />
    <BaseDrawer v-model="drawer" />
    <v-main>
      <slot />
    </v-main>
    <BaseFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
</script>
