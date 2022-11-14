<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> Escoteirando </q-toolbar-title>

        <proxy-info />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProxyInfo from "components/ProxyInfo.vue";
import { useAuthStore } from "src/stores/auth-store";
import router from "src/router";

export default defineComponent({
  name: "BasicLayout",

  components: {
    ProxyInfo,
  },

  setup() {
    const authStore = useAuthStore();
    return {};
  },
});
</script>
