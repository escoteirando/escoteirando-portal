<template>
  <q-card square bordered class="q-pa-lg shadow-1">
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-select :options="options" label="Associação" v-model="userType" />
        <q-input square filled clearable v-model="username" label="Usuário" />
        <q-input
          square
          filled
          clearable
          v-model="password"
          type="password"
          label="Senha"
        />
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn
        unelevated
        color="light-green-7"
        size="lg"
        class="full-width"
        label="Login"
        @click="doLogin"
      />
    </q-card-actions>
    <q-card-section class="text-center q-pa-none">
      <p class="text-grey-6">
        Acesso temporariamente limitado a escotistas da UEB
      </p>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/auth-store";
const options = [
  {
    label: "UEB",
    value: "ueb",
  },
];
export default defineComponent({
  name: "LoginForm",
  setup() {
    const userType = ref(options[0]);
    const username = ref("");
    const password = ref("");
    const doLogin = () => {
      const auth = useAuthStore();
      auth.login(username.value, password.value).then((res) => {
        console.log("Login OK", res);
      });

      console.log("doLogin");
    };
    return {
      userType,
      username,
      password,
      options,
      doLogin,
    };
  },
});
</script>
