<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/shared/container'
import Typography from '@/shared/typography'
import PromotionOfferPage from '@/widgets/promotionOfferPage'
import HowBonusWorkPopup from '@/widgets/popups/howBonusWorkPopup'

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
        <Typography @click="togglePopup" tag="span" color="grey">How do bonuses work?</Typography>
        <div class="popup">
          <HowBonusWorkPopup v-if="isOpen" />
        </div>
      </div>
      <div class="promotion-items">
        <PromotionOfferPage />
      </div>
    </Container>
  </div>
</template>

<style scoped>
.main-container {
  padding-top: 5vh;
  padding-bottom: 5vh;
  min-height: 50vh;
  background-color: var(--header-bg);
}

.how-bonus-work_link {
  cursor: pointer;
  text-decoration: underline;
  user-select: none;
  width: 30vh;
}

@media screen and(max-width: 840px) {
}
</style>
