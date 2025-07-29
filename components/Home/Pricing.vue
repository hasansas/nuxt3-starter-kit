<template>
  <section id="pricing" class="py-16">
    <v-container class="main-container">
      <h2 class="text-h4 text-center font-weight-bold mb-3">Flexible Pricing Plans</h2>
      <p class="text-center text-body-1 mb-10 text-grey-darken-1">
        Choose a plan that fits your needs—simple, transparent, and designed for everyone.
      </p>
      <v-row justify="center" align="stretch">
        <template v-for="plan in pricingPlans" :key="plan.name">
          <v-col cols="12" md="4">
            <v-card
              class="nuxtstarter-card h-100 d-flex flex-column justify-space-between"
              :class="plan.highlight ? 'nuxtstarter-pricing-recomended' : ''"
              style="
                border-radius: 1.3rem;
                border-width: 2px;
                border-style: solid;
                border-color: transparent;
              "
            >
              <v-card-text class="text-center py-8">
                <div class="text-h5 font-weight-bold text-primary mb-2">
                  {{ plan.name }}
                </div>
                <div class="mb-4" style="font-size: 1rem; color: #757575">
                  {{ plan.description }}
                </div>
                <div
                  class="mb-4"
                  style="font-size: 2.5rem; font-weight: bold; color: #232134"
                >
                  ${{ plan.price }}
                  <span style="font-size: 1.3rem; font-weight: 500; color: #757575">
                    /month
                  </span>
                </div>
                <v-list
                  lines="one"
                  density="compact"
                  class="px-8 py-0 text-left"
                  style="background: transparent"
                >
                  <v-list-item
                    v-for="feat in allFeatures"
                    :key="feat.key"
                    class="px-0 py-1"
                    style="background: transparent"
                  >
                    <span
                      :style="{
                        color: plan.features.includes(feat.key) ? '#232134' : '#bababa',
                        fontWeight: '500',
                        fontSize: '1.02rem',
                      }"
                    >
                      {{ feat.label }}
                    </span>
                    <template #append>
                      <v-icon
                        :color="plan.features.includes(feat.key) ? 'success' : 'error'"
                        size="1.4rem"
                      >
                        <Icon
                          :icon="
                            plan.features.includes(feat.key) ? 'lucide:check' : 'lucide:x'
                          "
                        />
                      </v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions class="justify-center pb-8">
                <v-btn
                  color="primary"
                  :variant="plan.highlight ? 'flat' : 'outlined'"
                  size="large"
                  rounded
                  :class="['font-weight-bold ', plan.highlight ? 'gradient' : '']"
                  style="min-width: 140px"
                  width="256"
                >
                  {{ plan.name === "Free" ? "Start Free" : "Choose Plan" }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const allFeatures = [
  { key: "chart-generation", label: "Unlimited Chart Generations" },
  { key: "basic-analysis", label: "Basic Natal Chart Analysis" },
  { key: "daily-horoscope", label: "Personalized Daily Horoscope" },
  { key: "email-support", label: "Standard Email Support" },
  { key: "advanced-analysis", label: "Advanced Chart Interpretations" },
  { key: "predictive-reports", label: "Detailed Predictive Reports" },
  { key: "compatibility-analysis", label: "In-depth Compatibility Analysis" },
  { key: "priority-support", label: "Priority Customer Support (24/7)" },
];

const pricingPlans = [
  {
    name: "Free Tier",
    description: "Perfect for casual users and beginners.",
    price: "0",
    color: "#4CAF50", // A nice green for free
    highlight: false,
    features: ["chart-generation", "basic-analysis", "daily-horoscope"],
  },
  {
    name: "Premium",
    description: "Unlock deeper insights and support.",
    price: "9", // Assuming USD per month, adjust as needed
    color: "#FF9800", // An orange for premium
    highlight: true,
    features: [
      "chart-generation",
      "basic-analysis",
      "daily-horoscope",
      "email-support",
      "advanced-analysis",
    ],
  },
  {
    name: "Elite",
    description: "For professional astrologers and enthusiasts.",
    price: "29", // Assuming USD per month, adjust as needed
    color: "#2196F3", // A blue for elite
    highlight: false,
    features: [
      "chart-generation",
      "basic-analysis",
      "daily-horoscope",
      "email-support",
      "advanced-analysis",
      "predictive-reports",
      "compatibility-analysis",
      "priority-support",
    ],
  },
];
</script>

<style lang="scss" scoped>
.nuxtstarter-pricing-recomended {
  border: 2px solid var(--color-primary) !important;
}
</style>
