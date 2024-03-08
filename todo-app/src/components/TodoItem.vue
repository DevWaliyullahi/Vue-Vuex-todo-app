<template>
  <div>
    <input type="checkbox" v-model="todo.completed">
    <span :class="{ 'completed': todo.completed }">{{ todo.text }}</span>
    <button @click="$emit('remove')">Remove</button>
    <button @click="isEditing = true">Edit</button> 
    <input v-if="isEditing" type="text" v-model="editedText" @keyup.enter="saveEdit" @blur="cancelEdit">
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    todo: Object,
  },
  data() {
    return {
      isEditing: false,
      editedText: this.todo.text,
    };
  },
  methods: {
    saveEdit() {
      this.$emit('edit', this.editedText);
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedText = this.todo.text;
    },
  },
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

