<template>
  <div>
    <button @click="increment(50)">Increment</button>
    <button @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "counter",
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style>
</style>
