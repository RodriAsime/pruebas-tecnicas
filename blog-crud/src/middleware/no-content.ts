import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useBlogStore } from '@/stores/blog'

export default async function noContent(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const withOutHyphen = replaceHyphenToSpace(to.params.title as string)
  if (typeof withOutHyphen === 'string' && useBlogStore().getPostByTitle(withOutHyphen)) {
    next()
  } else {
    next({ name: 'home' })
  }
}

function replaceHyphenToSpace(title: string) {
  return title.replace(/-/g, ' ')
}
