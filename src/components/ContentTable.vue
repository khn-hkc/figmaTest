<template>
  <v-card elevation="2" class="content-table">
    <v-card-title class="d-flex align-center justify-space-between">
      <div>
        <div class="section-title">
          <v-icon class="me-2" size="22">mdi-table</v-icon>
          컨텐츠 테이블
        </div>
        <div class="section-subtitle">컨텐츠를 표 형태로 빠르게 검색하고 상세 정보를 확인할 수 있습니다.</div>
      </div>
      <v-text-field
        v-model="search"
        placeholder="검색어 입력"
        dense
        hide-details
        append-inner-icon="mdi-magnify"
        class="search-field"
      />
    </v-card-title>

    <v-data-table
      :items="filteredItems"
      :headers="headers"
      item-key="id"
      class="elevation-0"
      dense
      fixed-header
      height="420"
      @click:row="openDialog"
    >
      <template #item.tags="{ item }">
        <div class="d-flex flex-wrap">
          <v-chip
            v-for="tag in item.tags"
            :key="tag"
            small
            color="primary"
            text-color="white"
            class="ma-1"
            outlined
          >
            {{ tag }}
          </v-chip>
        </div>
      </template>

      <template #item.actions="{ item }">
        <v-btn icon @click.stop="openDialog(item)" :aria-label="`상세 보기 ${item.title}`">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['open'])
const search = ref('')

const headers = [
  { title: '제목', key: 'title', sortable: false, width: '240' },
  { title: '카테고리', key: 'category', sortable: false, width: '150' },
  { title: '태그', key: 'tags', sortable: false, width: '220' },
  { title: '조회수', key: 'views', sortable: true, width: '100' },
  { title: '업데이트', key: 'updatedAt', sortable: true, width: '130' },
  { title: '동작', key: 'actions', sortable: false, width: '80' },
]

const filteredItems = computed(() => {
  const term = search.value.trim().toLowerCase()
  if (!term) return props.items

  return props.items.filter(item => {
    return (
      item.title.toLowerCase().includes(term) ||
      (item.subtitle || '').toLowerCase().includes(term) ||
      (item.category || '').toLowerCase().includes(term) ||
      (item.tags || []).some(tag => tag.toLowerCase().includes(term))
    )
  })
})

const openDialog = item => {
  emit('open', item)
}
</script>

<style scoped>
.content-table {
  border-radius: var(--radius-lg);
}

.section-title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  display: flex;
  align-items: center;
}

.section-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-muted);
  margin-top: var(--spacing-xxs);
}

.search-field {
  max-width: 240px;
}
</style>
