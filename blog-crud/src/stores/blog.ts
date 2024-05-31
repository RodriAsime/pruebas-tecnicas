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

  const searchPost = (title: string) => {
    return posts.value.find((post) => post.title === title)
  }

  const editPost = (title: string, data: Blog) => {
    const post = searchPost(title)

    if (post) {
      post.title = data.title
      post.publish = data.publish
      post.author = data.author
      post.content = data.content
    }
  }

  return { posts, getAllBlogs, setAllPost, getPostByTitle, setNewPost, editPost }
})
