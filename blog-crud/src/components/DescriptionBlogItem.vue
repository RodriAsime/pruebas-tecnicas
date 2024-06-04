<script setup lang="ts">
defineProps<{
  title: string
  resume: string | undefined
  publish: string
}>()
</script>
<template>
  <div class="description-card">
    <h2 class="description-card__title">{{ title }}</h2>
    <p class="description-card__resume">{{ resume }}</p>
    <p class="description-card__publish">{{ publish }}</p>
  </div>
</template>

<style scoped>
.description-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
  --color-hover: #1a1a1a;
}
.description-card__title {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
}
.description-card__resume {
  font-size: 1rem;
  text-align: justify;
}
.description-card__title,
.description-card__resume {
  transition: color 0.7s ease-in-out;
}
.description-card__publish {
  font-size: 0.8rem;
  color: #666;
  align-self: flex-end;
}
:is(.blog-item:hover) .description-card {
  color: var(--color-hover);
}
</style>
