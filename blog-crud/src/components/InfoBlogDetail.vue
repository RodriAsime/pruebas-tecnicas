<script setup lang="ts">
defineProps<{
  title: string
  content: string
  author: string
  publish: string
}>()
</script>
<template>
  <section class="blog-detail">
    <header class="blog-detail-header">
      <h1>{{ title }}</h1>
      <div>
        <p>{{ author }}</p>
        <p>{{ publish }}</p>
      </div>
    </header>
    <article>{{ content }}</article>
  </section>
</template>

<style scoped>
.blog-detail {
  display: grid;
  gap: 2rem;
}
.blog-detail-header {
  display: flex;
  justify-content: space-between;
}
</style>
