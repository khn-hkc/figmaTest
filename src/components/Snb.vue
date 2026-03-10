<template>
  <nav class="snb" :aria-label="labels.sideNav">
    <div class="snb__top">
      <button class="snb__button snb__button--menu" type="button" :aria-label="labels.menu">
        <v-icon size="24">mdi-menu</v-icon>
      </button>

      <div class="snb__list">
        <v-tooltip
          v-for="item in items"
          :key="item.key"
          location="right"
          content-class="snb-tooltip"
        >
          <template #activator="{ props: tooltipProps }">
            <button
              v-bind="tooltipProps"
              class="snb__button"
              :class="{ 'is-active': item.key === activeKey }"
              type="button"
              :aria-label="item.label"
              @click="activeKey = item.key"
            >
              <v-icon size="22">{{ item.icon }}</v-icon>
            </button>
          </template>
          <span>{{ item.label }}</span>
        </v-tooltip>
      </div>
    </div>

    <v-tooltip location="right" content-class="snb-tooltip">
      <template #activator="{ props: tooltipProps }">
        <button v-bind="tooltipProps" class="snb__button" type="button" :aria-label="labels.settings">
          <v-icon size="22">mdi-cog-outline</v-icon>
        </button>
      </template>
      <span>{{ labels.settings }}</span>
    </v-tooltip>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const labels = {
  sideNav: '\uC0AC\uC774\uB4DC \uB0B4\uBE44\uAC8C\uC774\uC158',
  menu: '\uBA54\uB274',
  settings: '\uC124\uC815',
}

const activeKey = ref('knowledge')

const items = [
  { key: 'home', label: '\uD648', icon: 'mdi-home' },
  { key: 'knowledge', label: '\uC9C0\uC2DD \uCF58\uD150\uCE20', icon: 'mdi-book-open-page-variant' },
  { key: 'dictionary', label: '\uC6A9\uC5B4\uC0AC\uC804', icon: 'mdi-sort-alphabetical-variant' },
  { key: 'folders', label: '\uD3F4\uB354', icon: 'mdi-folder-open' },
  { key: 'approval', label: '\uC2B9\uC778\uAD00\uB9AC', icon: 'mdi-check-decagram' },
  { key: 'stats', label: '\uD1B5\uACC4', icon: 'mdi-chart-bar' },
  { key: 'users', label: '\uC0AC\uC6A9\uC790', icon: 'mdi-account-group' },
]
</script>

<style scoped src="../styles/components/Snb.scss" lang="scss"></style>
