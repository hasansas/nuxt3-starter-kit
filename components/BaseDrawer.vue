<template>
  <ClientOnly>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list density="compact" nav>
        <v-list-subheader>Menu</v-list-subheader>

        <template v-for="(item, index) in items" :key="index">
          <v-list-group
            v-if="item.children"
            :value="false"
            prepend-icon="mdi-chevron-down"
            :append-icon="item.icon"
          >
            <template #activator>
              <v-list-item :title="item.title" />
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :title="child.title"
            />
          </v-list-group>

          <v-list-item
            v-else
            :to="item.to"
            :title="item.title"
            :prepend-icon="item.icon"
          />
        </template>
      </v-list>
    </v-navigation-drawer>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface MenuItem {
  title: string;
  icon?: string;
  to?: string;
  children?: MenuItem[];
}

const drawer = defineModel<boolean>("modelValue"); // so parent can control open/close

const items: MenuItem[] = [
  { title: "Home", icon: "mdi-home", to: "/" },
  { title: "About", icon: "mdi-information", to: "/#" },
  {
    title: "Settings",
    icon: "mdi-cog",
    children: [
      { title: "Profile", to: "/" },
      { title: "Security", to: "/" },
    ],
  },
];
</script>
