<template>
  <div>
    <result/>
    <counter/>
    <another-counter/>
  </div>
</template>

<script>
import Counter from "../components/counter/counter";
import Result from "../components/counter/result";
import AnotherCounter from "../components/counter/anotherCounter";

export default {
  name: "counter-view",
  components: {
    Counter,
    Result,
    AnotherCounter
  }
};
</script>

<style>
</style>
