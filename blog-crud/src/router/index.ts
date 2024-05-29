import { createRouter, createWebHistory } from 'vue-router'
import noContent from '@/middleware/no-content'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeBlog.vue')
  },
  {
    path: '/:title',
    name: 'detail',
    component: () => import('@/views/BlogDetail.vue'),
    beforeEnter: noContent
  },
  {
    path: '/:title/edit',
    name: 'modify',
    component: () => import('@/views/ModifyBlog.vue'),
    beforeEnter: noContent
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: () => ({ name: 'home' })
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
