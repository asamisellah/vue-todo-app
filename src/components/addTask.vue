<template>
  <div>
    <input
      class="input"
      v-model="newTask"
      type="text"
      v-on:keyup.enter.prevent="handleSubmit"
      placeholder="Add a new task..."
    >
  </div>
</template>

<script>
export default {
  data() {
    return { newTask: "" };
  },
  methods: {
    handleSubmit() {
      const task = {
        id: Math.floor(Math.random() * 100000),
        task: this.newTask,
        done: false
      };
      this.$emit("addTask", task);
      this.newTask = "";
    }
  }
};
</script>

<style>
.input {
  outline: none;
  /* width: 50%; */
  border: none;
  padding: 1.5rem;
  font-size: 1.5rem;
}
</style>

