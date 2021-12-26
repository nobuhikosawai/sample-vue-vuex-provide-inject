<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const todos = store.getters["todos/todos"];
</script>

<template>
  <h1>Your Todos</h1>
  <div>
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        {{ todo.title }}
      </li>
    </ul>
  </div>
  <router-link to="/todos2/new">add new todo</router-link>
  <router-view />
</template>
