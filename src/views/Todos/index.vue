<template>
  <router-view />
</template>

<script setup lang="ts">
import { provideTodos } from "@/composables/Todos/useTodos";

provideTodos();
</script>
