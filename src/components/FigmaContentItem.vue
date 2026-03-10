<template>
  <v-card elevation="1" class="figma-item" ripple @click="handleClick">
    <v-card-text class="pa-4">
      <div class="breadcrumbs">
        <span v-for="(crumb, index) in item.breadcrumbs" :key="`${crumb}-${index}`" class="breadcrumb">
          <span class="breadcrumb-text">{{ crumb }}</span>
          <v-icon v-if="index < item.breadcrumbs.length - 1" size="14" class="breadcrumb-separator">mdi-chevron-right</v-icon>
        </span>
        <v-chip v-if="item.type" class="type-chip" small text-color="white" color="primary" outlined>{{ item.type }}</v-chip>
      </div>

      <div class="title">{{ item.title }}</div>
      <div class="subtitle">{{ item.subtitle }}</div>
      <div class="description">{{ item.description }}</div>
    </v-card-text>

    <v-divider />

    <v-card-actions class="stats">
      <div class="stat">
        <v-icon size="18">mdi-heart-outline</v-icon>
        <span>{{ item.stats.likes }}</span>
      </div>
      <div class="stat">
        <v-icon size="18">mdi-bookmark-outline</v-icon>
        <span>{{ item.stats.bookmarks }}</span>
      </div>
      <div class="stat">
        <v-icon size="18">mdi-eye-outline</v-icon>
        <span>{{ item.stats.views }}</span>
      </div>
      <v-spacer />
      <v-btn icon @click.stop="onMore" aria-label="더보기">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['click', 'more'])

const handleClick = () => {
  emit('click', props.item)
}

const onMore = () => {
  emit('more', props.item)
}
</script>

<style scoped>
.figma-item {
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.figma-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px var(--color-shadow);
}

.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.breadcrumb-text {
  font-size: var(--font-size-xs);
  color: var(--color-muted);
}

.type-chip {
  margin-left: var(--spacing-sm);
  height: 22px;
}

.title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-subtext);
  margin-bottom: var(--spacing-sm);
}

.description {
  font-size: var(--font-size-sm);
  color: rgba(15, 23, 42, 0.7);
  line-height: 1.5;
  max-height: 80px;
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.stats {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;
}

.stat {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xs);
  color: var(--color-muted);
}
</style>
