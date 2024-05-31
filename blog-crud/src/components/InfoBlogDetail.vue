<script lang="ts" src="./InfoBlogDetail.ts"></script>
<template>
  <section class="blog-detail">
    <header class="blog-detail__header">
      <h1 ref="blogTitle" class="blog-detail__title" :contenteditable="isEditing">{{ title }}</h1>
      <div class="blog-detail__meta-info">
        <p ref="blogAuthor" :contenteditable="isEditing">{{ author }}</p>
        <p ref="blogPublish" :contenteditable="isEditing">{{ publish }}</p>
      </div>
    </header>
    <article ref="blogContent" class="blog-detail__content" :contenteditable="isEditing">
      {{ content }}
    </article>
  </section>
</template>

<style scoped>
.blog-detail {
  display: grid;
  gap: 2rem;
}
.blog-detail__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog-detail__title {
  font-size: 2rem;
  text-transform: capitalize;
}
.blog-detail__meta-info {
  display: flex;
  gap: 1rem;
}
.blog-detail__meta-info > p:first-child {
  text-transform: capitalize;
}
.blog-detail__content {
  font-size: 1.2rem;
}

:is(*)[contenteditable='true'] {
  border: 0.0625rem solid;
  outline: none;
  animation: blink 1s infinite;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

@keyframes blink {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: var(--vt-c-text-dark-1);
  }
}
</style>
