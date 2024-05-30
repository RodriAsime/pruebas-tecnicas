import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import { replaceHyphenToSpace } from '@/helpers/formatText'

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
