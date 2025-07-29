<template>
  <footer class="nuxtstarter-footer">
    <v-container class="main-container py-12">
      <v-row class="pt-8">
        <!-- Column 1: Brand & Description, Socials -->
        <v-col cols="12" md="5" class="mb-6 mb-md-0">
          <div class="d-flex align-center mb-8">
            <img src="/images/brand-logo.png" height="36" />
          </div>
          <div class="mb-4">
            nuxtstarter is a modern BaZi calculator platform offering professional Chinese
            astrology analysis, personalized reports, and secure chart management—ideal
            for learners, practitioners, and organizations worldwide.
          </div>
          <div class="d-flex align-center">
            <v-btn icon variant="plain" aria-label="Facebook" href="#" target="_blank">
              <v-icon size="20"><Icon icon="lucide:facebook" /> </v-icon>
            </v-btn>
            <v-btn icon variant="plain" aria-label="Twitter" href="#" target="_blank">
              <v-icon size="20"><Icon icon="lucide:twitter" /></v-icon>
            </v-btn>
            <v-btn icon variant="plain" aria-label="Instagram" href="#" target="_blank">
              <v-icon size="20"><Icon icon="lucide:instagram" /></v-icon>
            </v-btn>
            <v-btn icon variant="plain" aria-label="LinkedIn" href="#" target="_blank">
              <v-icon size="20"><Icon icon="lucide:linkedin" /></v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Column 2: Quick Links (v-list) -->
        <v-col cols="12" md="3" class="mb-6 mb-md-0">
          <div class="font-weight-bold text-h6 mb-3">Quick Links</div>
          <v-list
            lines="one"
            density="compact"
            class="px-0"
            style="background: transparent"
          >
            <v-list-item class="px-0"> Features </v-list-item>
            <v-list-item class="px-0"> Pricing </v-list-item>
            <v-list-item class="px-0"> Testimonials </v-list-item>
          </v-list>
        </v-col>

        <!-- Column 3: Contact (v-list) -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <div class="footer-menu d-flex flex-column">
            <div class="font-weight-bold text-h6 mb-8">Contact</div>
            <div class="footer-contact">
              <div
                class="footer-contact-item d-flex mb-4"
                v-for="(item, i) in contact"
                :key="i"
              >
                <div class="footer-contact-item-icon mr-4">
                  <v-icon>{{ item.icon }}</v-icon>
                </div>
                <div class="footer-contact-item-text">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="my-0"></v-divider>

    <v-container class="main-container py-8">
      <div class="text-center text-body-2 d-flex align-center">
        <span> &copy; {{ getYear() }} nuxtstarter. All rights reserved.</span>
        <v-spacer></v-spacer>
        <div class="btn-group">
          <NuxtLink to="#" class="footer-link mr-4">Privacy Policy</NuxtLink>
          <NuxtLink to="#" class="footer-link mr-4">Terms of Service</NuxtLink>
          <NuxtLink to="#" class="footer-link">Cookie Policy</NuxtLink>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
const contact = [
  {
    name: "address",
    icon: "ri-map-pin-line",
    text: "Suite 382 60896 Jeannine Terrace, Oberbrunnerchester, NM 62073-0832",
  },
  {
    name: "phone",
    icon: "ri-phone-line",
    text: "(255) 462-6778",
  },
  {
    name: "email",
    icon: "ri-at-line",
    text: "company@domain.com",
  },
];
const getYear = () => {
  return new Date().getFullYear();
};
</script>

<style lang="scss" scoped>
.nuxtstarter-footer {
  background: #fff;
  border-top: 1px solid #ececf5;

  .footer-link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
