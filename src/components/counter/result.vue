<template>
  <div>
    <p>Result: {{ doubleCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "result",
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter;
  //   }
  // }
  computed: {
    ...mapGetters(["doubleCounter"])
    }
};
</script>

<style>
</style>

