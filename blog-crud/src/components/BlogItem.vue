<script setup lang="ts">
import ImageBlogItem from './ImageBlogItem.vue'
import DescriptionBlogItem from './DescriptionBlogItem.vue'
import type { Blog } from '@/types/blogs'

defineProps<{ blog: Blog }>()
</script>
<template>
  <article class="blog-item">
    <ImageBlogItem />
    <DescriptionBlogItem :title="blog.title" :resume="blog.resume" :publish="blog.publish" />
  </article>
</template>

<style scoped>
.blog-item {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: snow;
  }
}
</style>
