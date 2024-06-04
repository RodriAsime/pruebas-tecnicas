<script setup lang="ts">
import { inject, reactive } from 'vue'
import { type Blog } from '@/types/blogs'
import InputField from './InputField.vue'

const inputBlog = reactive<Blog>({
  title: '',
  content: '',
  resume: '',
  publish: '',
  author: ''
})

const createBlog = inject<(blog: Blog) => void>('createBlog')
</script>
<template>
  <form v-if="createBlog" class="create-form" @submit.prevent="createBlog(inputBlog)">
    <InputField label="Title" v-model="inputBlog.title" />
    <InputField label="Author" v-model="inputBlog.author" />
    <InputField label="Publish" v-model="inputBlog.publish" />
    <InputField label="Resume" v-model="inputBlog.resume" />
    <InputField label="Content" v-model="inputBlog.content" type="textarea" />
  </form>
</template>

<style scoped>
.create-form {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(auto, 1fr);
}
.create-form > *:last-child {
  grid-column: 1 / -1;
  grid-row: span 3;
}
</style>
