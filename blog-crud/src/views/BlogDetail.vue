<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Blog } from '@/types/blogs'
import { useBlogStore } from '@/stores/blog'
import { replaceHyphenToSpace } from '@/helpers/formatText'
import HeroBlogDetail from '@/components/HeroBlogDetail.vue'
import InfoBlogDetail from '@/components/InfoBlogDetail.vue'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const title = route.params.title
if (typeof title !== 'string') {
  router.push({ name: 'home' })
}

const blog: ComputedRef<Blog | undefined> = computed(() => {
  if (typeof title === 'string') {
    return blogStore.getPostByTitle(replaceHyphenToSpace(title))
  }
  return undefined
})
</script>
<template>
  <main v-if="blog" class="blog-detail">
    <HeroBlogDetail :alternative-text="blog.title" />
    <InfoBlogDetail v-bind="blog" />
  </main>
</template>

<style scoped>
.blog-detail {
  display: grid;
  gap: 3rem;
  padding: 3rem;
}
</style>
