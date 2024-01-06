<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/shared/container'
import Typography from '@/shared/typography'
import Promotion from '@/widgets/promotion'
import HowBonusWorkPopup from '@/widgets/howBonusWorkPopup'

const isOpen = ref(false)

function togglePopup() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="main-container">
    <Container>
      <Typography tag="h1" color="white">Promotions</Typography>
      <div class="how-bonus-work_link">
        <Typography @click="togglePopup" tag="span" color="white">How do bonuses work?</Typography>
        <div class="popup">
          <HowBonusWorkPopup v-if="isOpen" />
        </div>
      </div>
      <div class="promotion-items">
        <Promotion />
      </div>
    </Container>
  </div>
</template>

<style scoped>
.main-container {
  padding-top: 5vh;
  min-height: 40vh;
  background-color: var(--header-bg);
}

.how-bonus-work_link{
  cursor: pointer;
}
</style>
