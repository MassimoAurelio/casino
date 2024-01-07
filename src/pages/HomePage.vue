<script setup lang="ts">
import Banner from '@/widgets/banner'
import Games from '@/pages/games'
import PromotionFooter from '@/widgets/promotionHomePage'
import 'swiper/css'
</script>

<template>
  <main>
    <Banner />
    <Games />
    <PromotionFooter title="Promotions" offerText="100% up to 500 AUD" :useContainer="true" />
  </main>
</template>

<style scoped></style>
@/widgets/promotionHomePage