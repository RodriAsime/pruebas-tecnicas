import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useBlogStore } from '@/stores/blog'
import { getBlogs } from '@/services/blogsApi'

const app = createApp(App)

app.use(createPinia())
await (async function fetchBlogs() {
  const blogs = await getBlogs()
  useBlogStore().setAllPost(blogs)
})()
app.use(router)

app.mount('#app')
