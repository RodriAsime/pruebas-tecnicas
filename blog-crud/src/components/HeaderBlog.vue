<script setup lang="ts">
import MainButton from './MainButton.vue'
</script>
<template>
  <header class="header-blogs">
    <h1 class="header-blogs__title">All Blogs</h1>
    <MainButton class="header-blogs__button">Agregar más</MainButton>
  </header>
</template>

<style scoped>
.header-blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
.header-blogs__title {
  grid-column: 2/ 3;
  font-size: 2rem;
  text-align: center;
}
.header-blogs__button {
  grid-column: 3/ 4;
  justify-self: end;
}
</style>
