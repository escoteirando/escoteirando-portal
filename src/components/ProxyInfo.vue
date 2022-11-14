<template>
  <div>Proxy {{ proxyData }}</div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useMappa } from "../composables/mappa";
export default defineComponent({
  name: "ProxyInfo",
  data() {
    return {
      proxyData: ref("loading..."),
    };
  },
  mounted() {
    useMappa()
      .getHC()
      .then((data) => {
        this.proxyData = data;
      });
  },
});
</script>
