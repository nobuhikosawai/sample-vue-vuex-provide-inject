<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const newTodoTitle = ref<string>("");

const store = useStore();
const todos = store.getters["todos/todos"];
const _addTodo = (title: string) => {
  store.dispatch("todos/addTodo", title);
};
const addTodo = () => {
  _addTodo(newTodoTitle.value);
  newTodoTitle.value = "";
};
</script>

<template>
  <form @submit.prevent="addTodo">
    Add New Todo
    <input v-model="newTodoTitle" />
    <button>create</button>
  </form>

  <div>
    <h2>Created Todos</h2>
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
