<script setup lang="ts">
import { computed, provide, ref, type ComputedRef, nextTick, onUpdated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Blog } from '@/types/blogs'
import { useBlogStore } from '@/stores/blog'
import { replaceHyphenToSpace, replaceSpaceToHyphen } from '@/helpers/formatText'
import HeroBlogDetail from '@/components/HeroBlogDetail.vue'
import InfoBlogDetail from '@/components/InfoBlogDetail.vue'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const isEditing = ref(false)

const pageTitle = ref(route.params.title)
if (typeof pageTitle.value !== 'string') {
  router.push({ name: 'home' })
}
onUpdated(() => {
  pageTitle.value = route.params.title
})
const blog: ComputedRef<Blog | undefined> = computed(() => {
  if (typeof pageTitle.value === 'string') {
    return blogStore.getPostByTitle(replaceHyphenToSpace(pageTitle.value))
  }
  return undefined
})

const toogleEditingMode = () => {
  isEditing.value = !isEditing.value
}

const editBlog = async (title: string, editedBlog: Blog) => {
  blogStore.editPost(title, editedBlog)
  const newTitle = replaceSpaceToHyphen(editedBlog.title)
  router.push({ name: 'detail', params: { title: newTitle } })
  await nextTick()
  pageTitle.value = route.params.title
}

provide('isEditing', isEditing)
</script>
<template>
  <main v-if="blog" class="blog-detail">
    <HeroBlogDetail :alternative-text="blog.title" @edit-blog="toogleEditingMode" />
    <InfoBlogDetail v-bind="blog" @edit-blog="editBlog" />
  </main>
</template>

<style scoped>
.blog-detail {
  display: grid;
  gap: 3rem;
  padding: 3rem;
}
</style>
