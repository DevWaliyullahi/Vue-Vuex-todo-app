import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
    editTodoText(state, { index, newText }) {
      state.todos[index].text = newText;
    },
    toggleCompletion(state, index) {
      state.todos[index].completed = !state.todos[index].completed;
    }
  },
  actions: {
    addTask({ commit }, newTask) {
      if (newTask.trim() !== '') {
        commit('addTodo', { text: newTask, completed: false });
      }
    },
    editTask({ commit }, { index, newText }) {
      if (newText.trim() !== '') {
        commit('editTodoText', { index, newText });
      }
    },
    removeTodo({ commit }, index) {
      commit('removeTodo', index);
    }
  },
  getters: {
    allTodos: state => state.todos
  },
  plugins: [createPersistedState()]
});
