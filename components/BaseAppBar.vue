<template>
  <v-app-bar
    :elevation="appBarElevated ? 4 : 0"
    :class="['nuxtstarter-appbar', appBarElevated ? 'elevated' : 'elevated']"
    color="white"
    height="72"
    flat
  >
    <v-container class="main-container d-flex align-center">
      <!-- Brand on the left -->
      <NuxtLink to="/" class="d-flex">
        <img src="/images/brand-logo.png" height="24" />
      </NuxtLink>

      <!-- Spacer pushes menu and buttons to the right -->
      <v-spacer></v-spacer>

      <!-- Menu (before Sign In) -->
      <div class="d-flex align-center gap-1 me-2">
        <v-btn
          v-for="item in menuItems"
          :key="item.label"
          :variant="currentSection === item.to.slice(1) ? 'flat' : 'text'"
          class="text-body-1"
          @click="goTo(item.to)"
          rounded
        >
          {{ item.label }}
        </v-btn>
      </div>
      <!-- Sign In Button (far right) -->
      <v-btn gradient rounded to="/login" class="font-weight-bold px-5 ms-2">
        Sign In
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
// For App Bar scroll effect
const appBarElevated = ref(false);
const currentSection = ref("hero");

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "#" },
  { label: "About Us", to: "#" },
  { label: "Contact", to: "#" },
];

// Smooth scroll
const goTo = (id: string) => {
  if (isValidCssSelector(id)) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    router.push(id);
  }
};

// Highlight menu on scroll
const sectionIds = ["#hero", "#features", "#pricing", "#testimonials", "#footer"]; // Corrected potential typo: "#features", "##pricing" -> "#features", "#pricing"
const handleScroll = () => {
  appBarElevated.value = window.scrollY > 16;
  // Determine current section
  // for (let i = sectionIds.length - 1; i >= 0; i--) {
  //   const el = document.querySelector(sectionIds[i]);
  //   // Use a type assertion to tell TypeScript that 'el' is an HTMLElement
  //   if (el && window.scrollY + 100 >= (el as HTMLElement).offsetTop) {
  //     currentSection.value = sectionIds[i].slice(1);
  //     break;
  //   }
  // }
};

const isValidCssSelector = (selectorString: string) => {
  if (typeof selectorString !== "string" || selectorString.trim() === "") {
    return false;
  }
  try {
    document.querySelector(selectorString);
    return true;
  } catch (e) {
    return false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
