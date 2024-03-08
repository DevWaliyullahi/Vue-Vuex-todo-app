<template>
  <div id="app">
    <div class="card">
      <h1>My To-Do List</h1>
      <TodoList />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  components: {
    TodoList,
  },
});
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #acae91;
}

.card {
  background-color: #e1d4be;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px; 
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
