<script setup lang="ts">
import { usePromotion } from '@/app/stores/usePromotion'
import PromoConstructor from '@/shared/promoConstructor'
import Typography from '@/shared/typography'

const promotionStore = usePromotion()
</script>

<template>
  <PromoConstructor>
    <template v-slot:offers>
      <div class="items-container">
        <div class="offers-item" v-for="item in promotionStore.items" :key="item.label">
          <div class="offers-img">
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="offers-description">
            <Typography tag="h3" bold size="xxl" color="white">{{ item.text }}</Typography>
            <Typography tag="h2" size="xl" bold color="white">{{ item.secondText }}</Typography>
          </div>
          <a :href="item.href" />
        </div>
      </div>
    </template>
  </PromoConstructor>
</template>

<style scoped>
.items-container {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 2vh;
}
.offers-item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  transition: transform 0.5s ease;
}
.offers-item:hover {
  transform: scale(1.02);
}

.offers-img {
  min-height: 240px;
  object-fit: cover;
  object-position: top center;
  width: 100%;
}

.offers-description {
  background-color: black;
  width: 100%;
  min-height: 243px;
  padding: 2vh;
}
</style>
