import { createRouter, createWebHistory } from 'vue-router'
import HomeBlog from '../views/HomeBlog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeBlog
  },
  {
    path: '/:title',
    name: 'detail',
    component: () => import('@/views/BlogDetail.vue')
  },
  {
    path: '/:title/edit',
    name: 'modify',
    component: () => import('@/views/ModifyBlog.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ({ name: 'home' })
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
