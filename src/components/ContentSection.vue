<template>
  <v-card elevation="2" class="content-section" rounded="lg">
    <v-card-title class="d-flex align-center justify-space-between">
      <div>
        <div class="section-title">
          <v-icon class="me-2" size="24">{{ iconName }}</v-icon>
          {{ title }}
        </div>
        <div class="section-subtitle">{{ description }}</div>
      </div>

      <v-btn icon @click="toggleExpanded" :aria-label="expanded ? '접기' : '펼치기'">
        <v-icon>{{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-expand-transition>
      <div v-show="expanded">
        <v-row class="pa-0" dense>
          <v-col cols="12" md="6" v-for="item in items" :key="item.id" class="pb-4">
            <FigmaContentItem
              :item="{ ...item, type }"
              @click="onItemClick(item)"
              @more="onMore"
            />
          </v-col>
        </v-row>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import FigmaContentItem from './FigmaContentItem.vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  icon: { type: String, default: 'ai' },
  items: { type: Array, default: () => [] },
})

const expanded = ref(true)
const type = ref('조회')

const iconName = computed(() => {
  switch (props.icon) {
    case 'eye':
      return 'mdi-eye-outline'
    case 'fire':
      return 'mdi-fire'
    case 'new':
      return 'mdi-new-box'
    default:
      return 'mdi-robot'
  }
})

const emit = defineEmits(['click'])

const toggleExpanded = () => {
  expanded.value = !expanded.value
}

const onItemClick = item => {
  emit('click', item)
}

const onMore = item => {
  console.log('더보기 클릭:', item)
}
</script>

<style scoped>
.content-section {
  border-radius: var(--radius-lg);
}

.section-title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.section-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-subtext);
  margin-top: var(--spacing-xs);
}
</style>
