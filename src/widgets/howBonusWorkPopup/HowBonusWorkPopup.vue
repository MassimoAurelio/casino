<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/shared/container'
import Typography from '@/shared/typography'
import Promotion from '@/widgets/promotion'
import ModalOverlay from '@/shared/modalOverlay'
import Modal from '@/shared/modal'

const isOpen = ref(true)

function togglePopup() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <ModalOverlay v-if="isOpen">
    <Modal v-if="isOpen">
      <div>text</div>
      <Button @click="togglePopup" size="small" color="transparent"> close </Button>
    </Modal>
  </ModalOverlay>
</template>

<style scoped>
.main-container {
  padding-top: 5vh;
  min-height: 40vh;
  background-color: var(--header-bg);
}
</style>
