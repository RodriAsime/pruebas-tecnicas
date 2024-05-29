<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import HeaderBlog from '@/components/HeaderBlog.vue'

const GridBlogs = defineAsyncComponent(() => import('@/components/GridBlogs.vue'))

const { getAllBlogs } = storeToRefs(useBlogStore())
</script>
<template>
  <main class="main-content">
    <HeaderBlog />
    <GridBlogs :blogs="getAllBlogs"></GridBlogs>
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
