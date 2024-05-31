import { defineComponent, inject, onMounted, onUpdated, ref, watch, type Ref } from 'vue'

export default defineComponent({
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    publish: { type: String, required: true }
  },
  emits: ['editBlog'],

  setup(_, { emit }) {
    const isEditing = inject<Ref<boolean>>('isEditing')

    if (!isEditing) {
      throw new Error('isEditing is not provided')
    }
    const blogTitle: Ref<HTMLElement | undefined> = ref()
    const blogAuthor: Ref<HTMLElement | undefined> = ref()
    const blogPublish: Ref<HTMLElement | undefined> = ref()
    const blogContent: Ref<HTMLElement | undefined> = ref()

    const originalTitle = ref('')

    onMounted(() => {
      originalTitle.value = blogTitle.value?.textContent || ''
    })

    onUpdated(() => {
      if (blogTitle.value?.textContent !== originalTitle.value) {
        originalTitle.value = blogTitle.value?.textContent || ''
      }
    })

    watch(isEditing, (value) => {
      if (value) return
      if (
        !(
          blogTitle.value instanceof HTMLElement &&
          blogAuthor.value instanceof HTMLElement &&
          blogPublish.value instanceof HTMLElement &&
          blogContent.value instanceof HTMLElement
        )
      )
        return

      const { textContent: title } = blogTitle.value
      const { textContent: author } = blogAuthor.value
      const { textContent: publish } = blogPublish.value
      const { textContent: content } = blogContent.value

      if (title && author && publish && content) {
        emit('editBlog', originalTitle.value, { title, content, author, publish })
        //create a toast
      }
      // else with toast error
    })
    return {
      blogTitle,
      blogAuthor,
      blogPublish,
      blogContent,
      isEditing
    }
  }
})
