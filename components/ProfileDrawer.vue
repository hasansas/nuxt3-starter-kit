<script setup lang="ts">
// --- Page Layout ---
definePageMeta({
  layout: "practitioner",
});

// --- Sample Profile Data (replace with API) ---
const profiles = ref([
  { id: 1, name: "Jane Doe", gender: "Female", dob: "1990-05-14", tob: "09:30" },
  { id: 2, name: "John Smith", gender: "Male", dob: "1985-10-02", tob: "21:15" },
  { id: 3, name: "Emily Zhang", gender: "Female", dob: "1993-07-20", tob: "13:00" },
]);

// --- Table Headers ---
const headers = [
  { title: "Name", key: "name" },
  { title: "Gender", key: "gender" },
  { title: "Date of Birth", key: "dob" },
  { title: "Time of Birth", key: "tob" },
  { title: "Actions", key: "actions", sortable: false },
];

// --- Search & Filter ---
const search = ref("");
const filteredProfiles = computed(() =>
  profiles.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
);

// --- Drawer State ---
const drawerOpen = ref(false);
const selectedProfile = ref<any | null>(null);

// --- Methods ---
function viewProfile(profile: any) {
  selectedProfile.value = profile;
  drawerOpen.value = true;
}

function createProfile() {
  selectedProfile.value = {
    id: Date.now(),
    name: "",
    gender: "",
    dob: "",
    tob: "",
  };
  drawerOpen.value = true;
}

function updateProfile(updated: any) {
  const index = profiles.value.findIndex((p) => p.id === updated.id);
  if (index !== -1) {
    profiles.value[index] = updated;
  } else {
    profiles.value.unshift(updated);
  }
}

function deleteProfile(profileId: number) {
  profiles.value = profiles.value.filter((p) => p.id !== profileId);
}
</script>

<template>
  <v-container class="main-container py-8">
    <!-- --- Page Header --- -->
    <div class="d-flex align-center justify-space-between mb-6">
      <h1 class="text-h4 font-weight-bold">Your Profiles</h1>
      <v-text-field
        v-model="search"
        placeholder="Search profiles..."
        density="compact"
        hide-details
        append-inner-icon="lucide:search"
        variant="outlined"
        style="max-width: 300px"
      />
    </div>

    <!-- --- Profile Table --- -->
    <v-card class="nuxtstarter-card">
      <v-data-table
        :headers="headers"
        :items="filteredProfiles"
        item-key="id"
        class="text-no-wrap"
        density="comfortable"
        hover
      >
        <template #item.actions="{ item }">
          <v-btn icon="lucide:eye" variant="text" @click="viewProfile(item)" />
          <v-btn icon="lucide:edit-2" variant="text" @click="viewProfile(item)" />
          <v-btn
            icon="lucide:trash"
            variant="text"
            color="error"
            @click="deleteProfile(item.id)"
          />
        </template>

        <template #no-data>
          <v-card-text class="text-center text-medium-emphasis">
            No profiles found.
          </v-card-text>
        </template>
      </v-data-table>
    </v-card>

    <!-- --- FAB: Add Profile --- -->
    <v-btn
      icon="lucide:user-plus"
      color="primary"
      class="fab"
      size="large"
      elevation="6"
      @click="createProfile"
    ></v-btn>

    <!-- --- Profile Drawer --- -->
    <ProfileDrawer
      v-model="drawerOpen"
      :profile="selectedProfile"
      @save="updateProfile"
    />
  </v-container>
</template>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
}

.fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 10;
  border-radius: 50%;
}
</style>
