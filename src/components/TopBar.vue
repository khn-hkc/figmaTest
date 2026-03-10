<template>
  <header class="top-bar">
    <div class="top-bar__brand" aria-label="AI P-KMS">
      <span class="top-bar__brand-ai">AI</span>
      <span class="top-bar__brand-dot top-bar__brand-dot--pink"></span>
      <span class="top-bar__brand-dot top-bar__brand-dot--blue"></span>
      <span class="top-bar__brand-p">P</span>
      <span class="top-bar__brand-kms">-KMS</span>
    </div>

    <div class="top-bar__search-shell">
      <v-text-field
        v-model="searchLocal"
        density="compact"
        variant="plain"
        hide-details
        :placeholder="labels.searchPlaceholder"
        class="top-bar__search"
      >
        <template #append-inner>
          <v-btn icon variant="text" density="comfortable" :aria-label="labels.searchAction">
            <v-icon size="18">mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="top-bar__actions">
      <button class="top-bar__alert" type="button" :aria-label="labels.alert">
        <v-icon size="20">mdi-bell-outline</v-icon>
        <span class="top-bar__badge">3</span>
      </button>

      <button class="top-bar__profile" type="button" :aria-label="labels.profile">
        <span class="top-bar__avatar-wrap">상</span>
        <span class="top-bar__profile-status"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const labels = {
  searchPlaceholder: '\uC624\uB298\uC740 \uC5B4\uB5A4 \uB0B4\uC6A9\uC774 \uAD81\uAE08\uD558\uC138\uC694?',
  searchAction: '\uAC80\uC0C9',
  alert: '\uC54C\uB9BC',
  profile: '\uD504\uB85C\uD544',
}

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:search'])

const searchLocal = computed({
  get: () => props.search,
  set: value => emit('update:search', value),
})
</script>

<style scoped src="../styles/components/TopBar.scss" lang="scss"></style>
