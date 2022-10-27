<template>
  <q-list>
    <q-item-label header> Escotista </q-item-label>

    <q-item>
      <q-item-section avatar>
        <q-icon name="person" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ nome }}</q-item-label>
        <q-item-label caption>{{ grupo }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-icon name="people" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ secao }}</q-item-label>
        <q-item-label caption>{{ tipo_secao }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DadosEscotista",
  props: {
    nome: {
      type: String,
      required: true,
    },
    grupo: {
      type: String,
      default: "",
    },
    secao: {
      type: String,
      default: "",
    },
    tipo_secao: {
      type: String,
      default: "",
    },
  },
});
</script>

<style></style>
