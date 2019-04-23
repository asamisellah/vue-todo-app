<template>
  <div>
    <button @click="asyncIncrement({by: 100, time: 1000})">Increment</button>
    <button @click="asyncDecrement({by: 100, time: 2000})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "another-counter",
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])
  }
};
</script>

<style>
</style>
