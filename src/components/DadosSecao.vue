<template>
  <q-tree
    :nodes="nodes"
    node-key="label"
    default-expand-all
    v-model:selected="selected"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
const selected = ref(null);
export default defineComponent({
  name: "DadosSecao",
  watch: {
    selected: function (e) {
      var that = this;
      console.log("selected", e);
    },
  },
  data() {
    return {
      selected,

      nodes: [
        {
          label: "Matilhas",
          icon: "people",
          selectable: false,
          children: [
            {
              label: "Amarela",
              children: [
                { id: 1, label: "João Carlos", icon: "keyboard_double_arrow_right" },
                { id: 2, label: "Maria Bonita", icon: "chevron_right" },
                { id: 3, label: "Chico Bento" },
              ],
              selectable: false,
            },

            {
              label: "Cinza",
              children: [
                { label: "Miguel dos Anjos", icon: "keyboard_double_arrow_right" },
                { label: "Cris Sousa", icon: "chevron_right" },
                { label: "Charles Bronson" },
              ],
            },
            {
              label: "Marrom",
              children: [
                { label: "Jonas Torres", icon: "keyboard_double_arrow_right" },
                { label: "Maria Carla", icon: "chevron_right" },
                { label: "Manoel Batista" },
              ],
            },

            {
              label: "Vermelha",
              children: [
                { label: "João Silva", icon: "keyboard_double_arrow_right" },
                { label: "Maria Amélia", icon: "chevron_right" },
                { label: "Ana Maria" },
              ],
            },
          ],
        },
      ],
    };
  },
});
</script>

<style></style>
