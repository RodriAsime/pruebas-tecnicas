import { type Ref, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Blog } from '@/types/blogs'

export const useBlogStore = defineStore('blog', () => {
  const posts: Ref<Blog[]> = ref([])

  const getAllBlogs = computed(() => posts.value)

  const getPostByTitle = (name: Blog['title']) => {
    return posts.value.find(({ title }) => title === name)
  }

  const setAllPost = (data: Blog[]) => {
    posts.value = data
  }

  const setNewPost = (data: Blog) => {
    posts.value.push(data)
  }

  return { posts, getAllBlogs, setAllPost, getPostByTitle, setNewPost }
})
