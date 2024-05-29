<script setup lang="ts">
import { useRouter } from 'vue-router'
import ImageBlogItem from './ImageBlogItem.vue'
import DescriptionBlogItem from './DescriptionBlogItem.vue'
import type { Blog } from '@/types/blogs'
import { replaceSpaceToHyphen } from '@/helpers/formatText'

defineProps<{ blog: Blog }>()

const router = useRouter()

const goToDetail = (param: string) => {
  const title = replaceSpaceToHyphen(param)
  router.push({ name: 'detail', params: { title } })
}
</script>
<template>
  <article class="blog-item" @click="goToDetail(blog.title)">
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
