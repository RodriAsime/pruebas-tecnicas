<script setup lang="ts">
import BlogItem from './BlogItem.vue'
import type { Blog } from '@/types/blogs'

defineProps<{ blogs: Blog[] }>()
</script>
<template>
  <section class="blog-grid">
    <BlogItem v-for="blog in blogs" :key="blog.title" :blog="blog" />
  </section>
</template>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
}
</style>
