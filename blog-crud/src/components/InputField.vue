<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    label: string
    type?: string
    required?: boolean
  }>(),
  {
    type: 'text',
    required: true
  }
)
const field = defineModel({ required: true })

const isTextarea = computed(() => props.type === 'textarea')
</script>
<template>
  <div class="field">
    <label class="field__label" :for="label"> {{ label }}</label>
    <template v-if="isTextarea">
      <textarea style="min-height: 100%" class="field__input" v-model="field" />
    </template>
    <template v-else>
      <input :type="type" class="field__input" v-model="field" />
    </template>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
.field__label {
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
}
.field__input {
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.field__input:focus,
.field__input:focus-visible {
  outline: none;
  border-color: #333;
}
:is(textarea) {
  resize: none;
}
</style>
