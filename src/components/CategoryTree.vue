<template>
  <div class="category-tree-node" :class="`level-${level}`">
    <button
      v-if="hasChildren"
      class="category-tree-node__row category-tree-node__row--branch"
      type="button"
      @click="node.expanded = !node.expanded"
    >
      <span class="category-tree-node__arrow">
        <v-icon size="14">{{ node.expanded ? 'mdi-triangle' : 'mdi-play-outline' }}</v-icon>
      </span>
      <span class="category-tree-node__label">{{ node.label }}</span>
    </button>

    <button
      v-else
      class="category-tree-node__row category-tree-node__row--leaf"
      :class="{ 'is-active': activeKey === node.key }"
      type="button"
      @click="$emit('select', node.key)"
    >
      <span class="category-tree-node__label">{{ node.label }}</span>
    </button>

    <v-expand-transition>
      <div v-if="hasChildren && node.expanded" class="category-tree-node__children">
        <CategoryTree
          v-for="child in node.children"
          :key="child.key"
          :node="child"
          :level="level + 1"
          :active-key="activeKey"
          @select="$emit('select', $event)"
        />
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'CategoryTree',
})

const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
  activeKey: {
    type: String,
    default: '',
  },
})

defineEmits(['select'])

const hasChildren = computed(() => (props.node.children || []).length > 0)
</script>

<style scoped src="../styles/components/CategoryTree.scss" lang="scss"></style>
