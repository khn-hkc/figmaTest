<template>
  <section class="category-panel" :class="{ 'is-collapsed': collapsed }">
    <div class="category-panel__header">
      <div class="category-panel__title-row">
        <h2 v-if="!collapsed">{{ labels.title }}</h2>
        <div v-else class="category-panel__mini-title">{{ labels.shortTitle }}</div>

        <v-tooltip location="left" content-class="panel-tooltip">
          <template #activator="{ props: tooltipProps }">
            <button
              v-bind="tooltipProps"
              class="category-panel__toggle"
              type="button"
              :aria-label="collapsed ? labels.expandPanel : labels.collapsePanel"
              @click="emit('toggle-panel')"
            >
              <img :src="headerAssets.panel" alt="" />
            </button>
          </template>
          <span>{{ collapsed ? labels.expandPanel : labels.collapsePanel }}</span>
        </v-tooltip>
      </div>

      <template v-if="!collapsed">
        <v-text-field
          v-model="searchLocal"
          density="comfortable"
          variant="outlined"
          hide-details
          :placeholder="labels.searchPlaceholder"
          class="category-panel__search"
        />

        <div class="category-panel__actions">
          <div class="category-panel__actions-left">
            <v-btn variant="outlined" rounded="sm" height="36" @click="expandAll">
              {{ labels.expandAll }}
            </v-btn>
            <v-btn variant="outlined" rounded="sm" height="36" @click="collapseAll">
              {{ labels.collapseAll }}
            </v-btn>
          </div>

          <v-btn variant="outlined" rounded="sm" height="36">{{ labels.addContent }}</v-btn>
        </div>
      </template>
    </div>

    <div v-if="!collapsed" class="category-panel__tree">
      <CategoryTree
        v-for="group in filteredTree"
        :key="group.key"
        :node="group"
        :active-key="activeKey"
        @select="emit('select', $event)"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from 'vue'
import CategoryTree from './CategoryTree.vue'
import { headerAssets } from '../constants/figmaAssets'

const labels = {
  title: '\uCEE8\uD150\uCE20 \uC870\uD68C',
  shortTitle: 'K',
  collapsePanel: '\uD328\uB110 \uC811\uAE30',
  expandPanel: '\uD328\uB110 \uD3BC\uCE58\uAE30',
  searchPlaceholder: '\uAC80\uC0C9\uC5B4 \uC785\uB825',
  expandAll: '\uC804\uCCB4 \uD3BC\uCE58\uAE30',
  collapseAll: '\uC804\uCCB4 \uC811\uAE30',
  addContent: '\uCEE8\uD150\uCE20 \uCD94\uAC00',
}

const props = defineProps({
  activeKey: {
    type: String,
    default: '',
  },
  search: {
    type: String,
    default: '',
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['select', 'update:search', 'toggle-panel'])

const tree = reactive([
  {
    key: 'customer-support',
    label: '\uACE0\uAC1D\uC0C1\uB2F4',
    expanded: true,
    children: [
      { key: 'deposit', label: '\uC218\uC2E0', expanded: false, children: [] },
      { key: 'loan', label: '\uC5EC\uC2E0', expanded: false, children: [] },
      { key: 'foreign', label: '\uC678\uD55C', expanded: false, children: [] },
      {
        key: 'product',
        label: '\uC0C1\uD488',
        expanded: true,
        children: [
          {
            key: 'savings-product',
            label: '\uC608\uAE08 \uBC0F \uC801\uAE08 \uC0C1\uD488',
            expanded: true,
            children: [
              { key: 'consult-guide', label: '\uC0C1\uB2F4 \uBC0F \uC0C1\uD488 \uC5C5\uBB34 \uAC00\uC774\uB4DC' },
              { key: 'new-account', label: '\uAC1C\uC778 \uC608\uAE08 \uC2E0\uADDC_\uC785\uCD9C\uAE08 \uD1B5\uC7A5 \uAC1C\uC124' },
              { key: 'app-alert', label: '\uC571 \uC54C\uB9BC\uC124\uC815' },
              { key: 'certificate', label: '\uACF5\uB3D9\uC778\uC99D\uC11C (\uC7AC)\uBC1C\uAE09/\uD0C0\uAE30\uAD00\uB4F1\uB85D/\uAC31\uC2E0' },
              { key: 'exchange-limit', label: '\uD658\uC804_\uD55C\uB3C4/\uC218\uB839\uC2DC\uAC04' },
              { key: 'gold-silver', label: '\uACE8\uB4DC\uD14C\uD06C(\uACE8\uB4DC\uBAA8\uC5B4)/\uC2E4\uBC84\uD14C\uD06C(\uC2E4\uBC84\uBAA8\uC5B4) \uC2E0\uADDC, \uC785\uAE08' },
              { key: 'tdf-info', label: 'TDF \uC0C1\uD488 \uC548\uB0B4' },
              { key: 'biz-cert', label: '\uC0AC\uC5C5\uC790 \uACF5\uB3D9\uC778\uC99D\uC11C \uBC1C\uAE09' },
              { key: 'fund-route', label: '\uD380\uB4DC \uC2E0\uADDC\uACBD\uB85C' },
            ],
          },
          { key: 'retirement', label: '\uD1F4\uC9C1\uC5F0\uAE08', expanded: false, children: [] },
        ],
      },
      { key: 'online-banking', label: '\uC628\uB77C\uC778\uBF45\uD0B9', expanded: false, children: [] },
      { key: 'incident', label: '\uC0AC\uACE0\uC2E0\uACE0', expanded: false, children: [] },
      { key: 'etc', label: '\uAE30\uD0C0', expanded: false, children: [] },
    ],
  },
  {
    key: 'helpdesk',
    label: '\uD5EC\uD504\uB370\uC2A4\uD06C',
    expanded: false,
    children: [
      { key: 'help-deposit', label: '\uC218\uC2E0 \uD5EC\uD504', expanded: false, children: [] },
      { key: 'help-loan', label: '\uC5EC\uC2E0 \uD5EC\uD504', expanded: false, children: [] },
      { key: 'help-foreign', label: '\uC678\uD55C \uD5EC\uD504', expanded: false, children: [] },
      { key: 'help-product', label: '\uC0C1\uD488 \uD5EC\uD504', expanded: false, children: [] },
      { key: 'help-online', label: '\uC628\uB77C\uC778\uBF45\uD0B9 \uD5EC\uD504', expanded: false, children: [] },
      { key: 'help-incident', label: '\uC0AC\uACE0\uC2E0\uACE0 \uD5EC\uD504', expanded: false, children: [] },
    ],
  },
])

const searchLocal = computed({
  get: () => props.search,
  set: value => emit('update:search', value),
})

const filterNode = (node, query) => {
  const children = (node.children || [])
    .map(child => filterNode(child, query))
    .filter(Boolean)

  if (!query || node.label.toLowerCase().includes(query) || children.length) {
    return {
      ...node,
      expanded: query ? true : node.expanded,
      children,
    }
  }

  return null
}

const filteredTree = computed(() => {
  const query = props.search.trim().toLowerCase()
  return tree.map(node => filterNode(node, query)).filter(Boolean)
})

const toggleAll = (nodes, expanded) => {
  nodes.forEach(node => {
    if (node.children?.length) {
      node.expanded = expanded
      toggleAll(node.children, expanded)
    }
  })
}

const expandAll = () => toggleAll(tree, true)
const collapseAll = () => toggleAll(tree, false)
</script>

<style scoped src="../styles/components/CategoryNav.scss" lang="scss"></style>
