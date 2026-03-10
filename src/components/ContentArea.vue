<template>
  <section class="content-area">
    <ContentSectionBlock
      v-for="section in renderedSections"
      :key="section.key"
      :title="section.title"
      :icon="section.icon"
      :items="section.items"
    />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ContentSectionBlock from './ContentSectionBlock.vue'
import { contentSections } from '../data/contentData'

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
  selectedCategory: {
    type: String,
    default: '',
  },
})

const matchesSearch = (item, query) => {
  if (!query) return true

  const target = [item.title, item.summary, item.description, ...(item.breadcrumbs || [])]
    .join(' ')
    .toLowerCase()

  return target.includes(query)
}

const renderedSections = computed(() => {
  const query = props.search.trim().toLowerCase()

  return contentSections
    .map(section => ({
      ...section,
      items: section.items.filter(item => {
        const categoryMatch = !props.selectedCategory || item.categoryKey === props.selectedCategory
        return categoryMatch && matchesSearch(item, query)
      }),
    }))
    .filter(section => section.items.length)
})
</script>

<style scoped src="../styles/components/ContentArea.scss" lang="scss"></style>
