 <template>
  <div class="container">
    <div class="input-container">
      <input type="text" v-model="newTask" placeholder="Add a new task" class="input-text" @keyup.enter="addTask">
      <button @click="addTask">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <TodoItem :todo="todo" :index="index" @remove="removeTodo" @edit="editTask" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  components: {
    TodoItem
  },
  setup() {
    const store = useStore();
    const newTask = ref('');
    const todos = computed(() => store.getters.allTodos);

    const addTask = () => {
      store.dispatch('addTask', newTask.value);
      newTask.value = '';
    };

    const removeTodo = (index) => {
      store.dispatch('removeTodo', index);
    };

    const editTask = (index, newText) => {
      store.dispatch('editTask', { index, newText });
    };

    return {
      newTask,
      todos,
      addTask,
      removeTodo,
      editTask
    };
  }
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-container input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

.input-container button {
  padding: 10px;
  font-size: 16px;
  background-color: #202122;
  color: #fff; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

.completed {
  text-decoration: line-through;
}

.actions button {
  margin-right: 5px;
}
</style>
