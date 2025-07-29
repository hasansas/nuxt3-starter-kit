<template>
  <section id="features" class="nuxtstarter-section">
    <v-container class="main-container">
      <h2 class="text-h4 text-center font-weight-bold mb-3">Powerful Features</h2>
      <p class="text-center text-body-1 mb-10 text-grey-darken-1">
        Unlock your full potential with our powerful features. Engineered for performance,
        reliability, and ease of use
      </p>
      <v-row justify="center" align="stretch">
        <v-col cols="12" md="4" v-for="(feature, index) in features" :key="index">
          <v-card class="py-10 px-8 nuxtstarter-card h-100 text-center" flat>
            <v-icon :icon="feature.icon" size="32" color="primary mb-4"></v-icon>
            <v-card-title class="text-h6 font-weight-bold mb-4">
              {{ feature.title }}
            </v-card-title>
            <v-card-text class="pa-0 text-body-1">
              {{ feature.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "lucide:layout-dashboard",
    title: "Intuitive Dashboard",
    description:
      "A centralized hub designed for effortless navigation and quick access to all your essential data and tools.",
  },
  {
    icon: "lucide:line-chart",
    title: "Real-time Analytics",
    description:
      "Gain instant insights into your performance with up-to-the-minute data visualization and comprehensive reporting.",
  },
  {
    icon: "lucide:settings",
    title: "Customizable Workflows",
    description:
      "Tailor processes to fit your unique needs with flexible automation and personalized settings, enhancing efficiency.",
  },
  {
    icon: "lucide:cloud",
    title: "Secure Cloud Storage",
    description:
      "Protect your valuable data with robust encryption and reliable cloud infrastructure, ensuring peace of mind.",
  },
  {
    icon: "lucide:users",
    title: "Collaborative Tools",
    description:
      "Foster seamless teamwork with integrated communication and sharing features, connecting your entire team.",
  },
  {
    icon: "lucide:life-buoy",
    title: "24/7 Support",
    description:
      "Get assistance whenever you need it with our dedicated support team, ready to help around the clock.",
  },
];
</script>
