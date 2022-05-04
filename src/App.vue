<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Header />
      <nav></nav>
    </div>
  </header>
</template>

