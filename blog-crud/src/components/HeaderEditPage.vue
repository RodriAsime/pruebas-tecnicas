<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { type Blog } from '@/types/blogs'
import { Save } from '@/assets'
import MainButton from './MainButton.vue'

const router = useRouter()

const createBlog = inject<(blog: Blog) => void>('createBlog')

const createAction = () => {
  const form = document.querySelector('.create-form') as HTMLFormElement
  const inputs = form.querySelectorAll('.field__input')
  const values = Array.from(inputs as NodeListOf<HTMLInputElement>).map((input) => input.value)
  const [title, author, publish, resume, content] = values
  if (createBlog) createBlog({ title, author, publish, resume, content })
}
</script>
<template>
  <header class="header-edit">
    <MainButton class="header-edit__back" @click="router.push({ name: 'home' })"> Back </MainButton>
    <h1 class="header-edit__title">Create Blog</h1>
    <MainButton v-if="createBlog" class="header-edit__edit" @click="createAction">
      <img :src="Save" alt="Save icon" />
    </MainButton>
  </header>
</template>

<style scoped>
.header-edit {
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
}
.header-edit__back {
  justify-self: start;
}
.header-edit__title {
  grid-column: 2;
  text-align: center;
}
.header-edit__edit {
  justify-self: end;
}
</style>
