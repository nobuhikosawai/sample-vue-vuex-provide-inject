<script setup lang="ts">
import { useTodos } from "@/composables/Todos/useTodos";

const { todos } = useTodos();
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
  <router-link to="/todos/new">add new todo</router-link>
  <router-view />
</template>
