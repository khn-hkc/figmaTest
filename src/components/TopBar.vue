<template>
  <header class="top-bar">
    <div class="top-bar__brand" aria-label="AI P-KMS">
      <img class="top-bar__brand-ai" :src="headerAssets.logoAi" alt="AI" />
      <img class="top-bar__brand-p" :src="headerAssets.logoP" alt="P" />
      <img class="top-bar__brand-kms" :src="headerAssets.logoKms" alt="-KMS" />
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
        <img :src="headerAssets.bell" alt="" />
        <span class="top-bar__badge">3</span>
      </button>

      <button class="top-bar__profile" type="button" :aria-label="labels.profile">
        <span class="top-bar__avatar-wrap" :style="avatarMaskStyle">
          <img :src="headerAssets.profileImage" alt="" />
        </span>
        <span class="top-bar__profile-status"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { headerAssets } from '../constants/figmaAssets'

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

const avatarMaskStyle = computed(() => ({
  maskImage: `url(${headerAssets.profileMask})`,
  WebkitMaskImage: `url(${headerAssets.profileMask})`,
}))
</script>

<style scoped src="../styles/components/TopBar.scss" lang="scss"></style>
