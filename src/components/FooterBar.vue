<template>
  <footer class="footer-bar">
    <div class="footer-bar__controls">
      <button class="footer-bar__arrow" type="button" :aria-label="labels.prev">
        <v-icon size="14">mdi-chevron-left</v-icon>
      </button>
      <button class="footer-bar__arrow" type="button" :aria-label="labels.next">
        <v-icon size="14">mdi-chevron-right</v-icon>
      </button>
    </div>

    <div class="footer-bar__notice">
      <v-icon size="16">mdi-bullhorn-outline</v-icon>
      <span>{{ labels.notice }}</span>
    </div>

    <div class="footer-bar__copy">All copyrights owned by Hankook Cloud Co., Ltd.</div>
  </footer>
</template>

<script setup>
const labels = {
  prev: '\uC774\uC804 \uACF5\uC9C0',
  next: '\uB2E4\uC74C \uACF5\uC9C0',
  notice: '\uD604\uC7AC \uB4F1\uB85D\uB41C \uAE34\uAE09\uACF5\uC9C0\uC0AC\uD56D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.',
}
</script>

<style scoped src="../styles/components/FooterBar.scss" lang="scss"></style>
