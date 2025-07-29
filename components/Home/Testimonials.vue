<template>
  <section id="testimonials" class="py-16 nuxtstarter-section-bg">
    <v-container class="main-container">
      <h2 class="text-h4 text-center font-weight-bold mb-3">What Our Users Say</h2>
      <p class="text-center text-body-1 mb-10 text-grey-darken-1">
        Trusted by thousands of professionals, students, and enthusiasts worldwide.
      </p>
      <v-row justify="center" align="stretch">
        <v-col cols="12" md="4" v-for="(t, idx) in testimonials" :key="idx">
          <v-card class="nuxtstarter-card h-100">
            <v-card-text class="d-flex flex-column align-center py-8">
              <v-avatar size="64" class="mb-4">
                <img :src="t.avatar" :alt="t.name" />
              </v-avatar>
              <div class="text-body-1 text-center mb-3 text-grey-darken-2">
                {{ t.quote }}
              </div>
              <div class="font-weight-bold">{{ t.name }}</div>
              <div class="text-body-2 text-grey">{{ t.city }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Aisha R.",
    city: "Jakarta",
    quote:
      "“This platform is a game-changer! The insights are incredibly accurate and easy to digest. It's truly helped me make better decisions.”",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Budi S.",
    city: "Surabaya",
    quote:
      "“I've tried many similar services, but none compare to the depth and clarity offered here. The user interface is fantastic, and the support team is always helpful.”",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Citra D.",
    city: "Bandung",
    quote:
      "“Absolutely love the personalized reports! They’re so detailed and insightful. It's become my go-to for understanding complex data with ease.”",
  },
];
</script>
