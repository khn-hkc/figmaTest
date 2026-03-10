<template>
  <section class="content-section-block">
    <header class="content-section-block__header">
      <div v-if="icon === 'ai'" class="content-section-block__icon-wrap">
        <v-icon size="18">mdi-auto-fix</v-icon>
      </div>
      <h3>{{ title }}</h3>
    </header>

    <div class="content-section-block__list">
      <ContentCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script setup>
import ContentCard from './ContentCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped src="../styles/components/ContentSectionBlock.scss" lang="scss"></style>
