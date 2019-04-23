<template>
  <div class="container">
    <add-task @addTask="addTask"/>
    <div class="list">
      <div v-for="(task, index) in tasks" :key="task.id">
        <task :task="task" :id="index" @toggleTask="toggleTask"/>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "@/components/task";
import AddTask from "../components/addTask";

export default {
  name: "task-list",

  components: { Task, AddTask },

  data() {
    return {
      tasks: []
    };
  },

  methods: {
    toggleTask(taskId) {
      this.tasks[taskId].done = !this.tasks[taskId].done;
      const doneTask = this.tasks.splice(taskId, 1);
      this.tasks.push(...doneTask);
    },
    addTask(newTask) {
      this.tasks.unshift(newTask);
      console.log(this.tasks);
    }
  }
};
</script>

<style>
.container {
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border-radius: 1rem;
  border: 1px solid lightblue; */
}
</style>


