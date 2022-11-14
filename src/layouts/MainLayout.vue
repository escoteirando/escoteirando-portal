<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Escoteirando </q-toolbar-title>

        <proxy-info />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" bordered
      ><dados-escotista
        nome="Guionardo Furlan"
        grupo="Leões de Blumenau 32/SC"
        secao="Alcatéia 1"
        tipo_secao="Alcatéia"
      />
      <dados-secao />
      <q-list>
        <q-item-label header> Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-if="isAuthenticated" />
      <q-page
        v-else
        class="bg-blue-gray-3 window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <login-form />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import ProxyInfo from "components/ProxyInfo.vue";
import DadosEscotista from "components/DadosEscotista.vue";
import DadosSecao from "components/DadosSecao.vue";
import { useAuthStore } from "src/stores/auth-store";

import LoginForm from "src/components/LoginForm.vue";

const linksList = [
  {
    title: "Atividades",
    caption: "Banco de dados",
    icon: "hiking",
    link: "#db",
  },
  {
    title: "BI",
    caption: "Análises",
    icon: "query_stats",
    link: "#bi",
  },
  {
    title: "Comunidade Escoteira",
    caption: "Telegram",
    icon: "telegram",
    link: "#telegram",
  },
  {
    title: "Fórum",
    caption: "Discussões",
    icon: "forum",
    link: "#forum",
  },

  {
    title: "Sair",
    caption: "",
    icon: "logout",
    link: "#logout",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    ProxyInfo,
    DadosEscotista,
    DadosSecao,
    LoginForm,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const authStore = useAuthStore();
    const drawerOpen = computed({
      get: () => leftDrawerOpen.value,
      set: (value) => {
        if (value && !authStore.isAuthenticated) {
          console.log("cannot open drawer, not authenticated");
          value = false;
        } else {
          console.log("drawer open", value);
        }
        leftDrawerOpen.value = value;
      },
    });
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    return {
      authStore,
      isAuthenticated,
      essentialLinks: linksList,
      drawerOpen,
      toggleLeftDrawer() {
        drawerOpen.value = !drawerOpen.value;
      },
    };
  },
});
</script>
