<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getBlogs } from '@/services/blogsApi'
import HeaderBlog from '@/components/HeaderBlog.vue'

const GridBlogs = defineAsyncComponent(() => import('@/components/GridBlogs.vue'))

const blogs = await getBlogs()
</script>
<template>
  <main class="main-content">
    <HeaderBlog />
    <GridBlogs :blogs="blogs"></GridBlogs>
  </main>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 8rem;
}
</style>
