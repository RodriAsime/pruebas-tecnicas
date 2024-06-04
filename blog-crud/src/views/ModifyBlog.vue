<script setup lang="ts">
import { provide } from 'vue'
import { useRouter } from 'vue-router'
import { type Blog } from '@/types/blogs'
import { useBlogStore } from '@/stores/blog'
import HeaderEditPage from '@/components/HeaderEditPage.vue'
import CreateBlogForm from '@/components/CreateBlogForm.vue'

const router = useRouter()

const createBlog = (blog: Blog) => {
  useBlogStore().setNewPost(blog)
  router.push({ name: 'home' })
}
provide('createBlog', createBlog)
</script>
<template>
  <main>
    <HeaderEditPage />
    <CreateBlogForm />
  </main>
</template>

<style scoped></style>
