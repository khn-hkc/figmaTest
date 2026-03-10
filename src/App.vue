<template>
  <v-app>
    <div class="app-frame">
      <Snb />

      <div class="app-shell">
        <TopBar v-model:search="searchQuery" />

        <main class="page-body" :style="pageBodyStyle">
          <aside class="page-sidebar">
            <CategoryNav
              v-model:search="sidebarSearch"
              :active-key="activeCategory"
              :collapsed="sidebarCollapsed"
              @select="onCategorySelect"
              @toggle-panel="toggleSidebar"
            />
          </aside>

          <section class="page-content">
            <ContentArea
              :search="searchQuery"
              :selected-category="activeCategory"
            />
          </section>
        </main>

        <FooterBar />
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { computed, ref } from 'vue'
import Snb from './components/Snb.vue'
import TopBar from './components/TopBar.vue'
import CategoryNav from './components/CategoryNav.vue'
import ContentArea from './components/ContentArea.vue'
import FooterBar from './components/FooterBar.vue'

const searchQuery = ref('')
const sidebarSearch = ref('')
const activeCategory = ref('consult-guide')
const sidebarCollapsed = ref(false)

const pageBodyStyle = computed(() => ({
  '--sidebar-width': sidebarCollapsed.value ? '84px' : '400px',
}))

const onCategorySelect = key => {
  activeCategory.value = key
}

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}
</script>

<style scoped src="./styles/app.scss" lang="scss"></style>
