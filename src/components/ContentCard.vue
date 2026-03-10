<template>
  <article class="content-card">
    <div class="content-card__breadcrumbs">
      <template v-for="(crumb, index) in item.breadcrumbs" :key="`${item.id}-${crumb}`">
        <span>{{ crumb }}</span>
        <v-icon v-if="index < item.breadcrumbs.length - 1" size="12">mdi-chevron-right</v-icon>
      </template>
    </div>

    <h4>{{ item.title }}</h4>
    <p class="content-card__summary">{{ item.summary }}</p>
    <p class="content-card__description">{{ item.description }}</p>

    <div class="content-card__stats">
      <div class="content-card__stat">
        <img :src="contentAssets.heart" alt="" />
        <span>{{ item.stats.likes }}</span>
      </div>
      <div class="content-card__stat">
        <img :src="contentAssets.favorite" alt="" />
        <span>{{ item.stats.bookmarks }}</span>
      </div>
      <div class="content-card__stat">
        <img :src="contentAssets.eye" alt="" />
        <span>{{ item.stats.views }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { contentAssets } from '../constants/figmaAssets'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped src="../styles/components/ContentCard.scss" lang="scss"></style>
