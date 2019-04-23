<template>
  <div class="task">
    <label>
      <input type="checkbox" @change="toggleTask" :checked="task.done">
      &nbsp;
      <del v-if="task.done">{{ task.task }}</del>
      <span v-else>{{ task.task }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object
    },
    id: {
      type: Number
    }
  },
  methods: {
    toggleTask() {
      this.$emit("toggleTask", this.id);
    }
  }
};
</script>

<style>
.task {
  border: 1px solid;
  background-color: lightblue;
  color: white;
  border-radius: 5%;
  padding: 0.2rem 2rem;
  margin: 0.2rem;
  border-radius: 5rem;
  text-align: left;
}
</style>
