<script setup lang="ts">
import { Logo } from '@/assets/index'
</script>
<template>
  <img :src="Logo" class="img-card" />
</template>

<style scoped>
.img-card {
  width: 100%;
  max-width: 15rem;
  transition: transform 0.3s ease;
  background-color: snow;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
