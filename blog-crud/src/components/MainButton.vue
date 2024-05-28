<template>
  <button class="main-button">
    <slot />
  </button>
</template>

<style scoped>
.main-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #333;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: fit-content;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
