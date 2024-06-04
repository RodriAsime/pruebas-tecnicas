<script setup lang="ts">
import { inject } from 'vue'
import { Logo, Pencil, Save } from '@/assets'
import MainButton from './MainButton.vue'

defineProps<{
  alternativeText: String
}>()

defineEmits<{
  editBlog: []
}>()

const isEditing = inject<Boolean>('isEditing')
</script>
<template>
  <header class="hero-blog">
    <img class="hero-blog__image" :src="Logo" alt="Principal blog image" />
    <MainButton class="hero-blog__edit" @click="$emit('editBlog')">
      <img :src="isEditing ? Save : Pencil" :alt="`${isEditing ? 'Save' : 'Pencil'} icon`" />
    </MainButton>
  </header>
</template>

<style scoped>
.hero-blog {
  display: grid;
  height: auto;
  place-content: center;
}
.hero-blog__image {
  width: 100%;
}
.hero-blog__edit {
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
}
</style>
