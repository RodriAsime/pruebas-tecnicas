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
      <h1 class="blog-detail__title">{{ title }}</h1>
      <div class="blog-detail__meta-info">
        <p>{{ author }}</p>
        <p>{{ publish }}</p>
      </div>
    </header>
    <article class="blog-detail__content">{{ content }}</article>
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
  align-items: center;
}
.blog-detail__title {
  font-size: 2rem;
  text-transform: capitalize;
}
.blog-detail__meta-info {
  display: flex;
  gap: 1rem;
}
.blog-detail__meta-info > p:first-child {
  text-transform: capitalize;
}
.blog-detail__content {
  font-size: 1.2rem;
}
</style>
