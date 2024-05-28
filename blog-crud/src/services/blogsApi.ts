import Blogs from '../data/index'
import type { Blog as TBlog } from '@/types/blogs'

export async function getBlogs(): Promise<TBlog[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Blogs)
    }, 1000)
  })
}
