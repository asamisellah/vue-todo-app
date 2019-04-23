<template>
  <div class="content-container">
    <header-tab/>
    <div class="main-container">
      <task-list/>
    </div>
    <footer-tab/>
  </div>
</template>

<script>
import TaskList from "../components/taskList";
import HeaderTab from "../components/header";
import FooterTab from "../components/footer";

export default {
  name: "home",
  components: {
    TaskList,
    HeaderTab,
    FooterTab
  }
};
</script>

<style>
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.content-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
