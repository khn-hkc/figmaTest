<template>
  <nav class="snb" :aria-label="labels.sideNav">
    <div class="snb__top">
      <button class="snb__button snb__button--menu" type="button" :aria-label="labels.menu">
        <img :src="snbAssets.menu" alt="" />
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
              <img :src="item.icon" alt="" />
            </button>
          </template>
          <span>{{ item.label }}</span>
        </v-tooltip>
      </div>
    </div>

    <v-tooltip location="right" content-class="snb-tooltip">
      <template #activator="{ props: tooltipProps }">
        <button v-bind="tooltipProps" class="snb__button" type="button" :aria-label="labels.settings">
          <img :src="snbAssets.settings" alt="" />
        </button>
      </template>
      <span>{{ labels.settings }}</span>
    </v-tooltip>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { snbAssets } from '../constants/figmaAssets'

const labels = {
  sideNav: '\uC0AC\uC774\uB4DC \uB0B4\uBE44\uAC8C\uC774\uC158',
  menu: '\uBA54\uB274',
  settings: '\uC124\uC815',
}

const activeKey = ref('knowledge')

const items = [
  { key: 'home', label: '\uD648', icon: snbAssets.home },
  { key: 'knowledge', label: '\uC9C0\uC2DD \uCF58\uD150\uCE20', icon: snbAssets.book },
  { key: 'dictionary', label: '\uC6A9\uC5B4\uC0AC\uC804', icon: snbAssets.dictionary },
  { key: 'folders', label: '\uD3F4\uB354', icon: snbAssets.folder },
  { key: 'approval', label: '\uC2B9\uC778\uAD00\uB9AC', icon: snbAssets.approve },
  { key: 'stats', label: '\uD1B5\uACC4', icon: snbAssets.chart },
  { key: 'users', label: '\uC0AC\uC6A9\uC790', icon: snbAssets.users },
]
</script>

<style scoped src="../styles/components/Snb.scss" lang="scss"></style>
