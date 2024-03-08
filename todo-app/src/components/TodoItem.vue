<template>
  <div>
    <input type="checkbox" v-model="todo.completed" class="checkbox">
    <span :class="{ 'completed': todo.completed }">{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
    <button @click="editTodo">Edit</button> 
  </div>
</template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      todo: Object,
      index: Number
    },
    setup(props, { emit }) {
      const removeTodo = () => {
        emit('remove', props.index);
      };
  
      const editTodo = () => {
        const newText = prompt('Edit task:', props.todo.text);
        if (newText !== null) {
          emit('edit',props.index, newText);
        }
      };

  
      return {
        removeTodo,
        editTodo
      };
    }
  });
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  
  button {
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background-color: #090909;
    color: white;
    margin-bottom: 10px;
  }

  .checkbox {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #070809;

}
  
  button:hover {
    background-color: #3c3d3b;
  }
  </style>
  