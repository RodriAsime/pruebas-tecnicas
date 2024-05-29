<script setup lang="ts">
import { Logo } from '@/assets'

defineProps<{
  alternativeText: String
}>()
</script>
<template>
  <section class="hero-blog">
    <img class="hero-blog__image" :src="Logo" alt="" />
  </section>
</template>

<style scoped>
.hero-blog {
  display: grid;
  height: auto;
  place-content: center;
}
.hero-blog__image {
  width: 100%;
}
</style>
