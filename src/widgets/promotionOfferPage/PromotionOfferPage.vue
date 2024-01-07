<script setup lang="ts">
import { usePromotion } from '@/app/stores/usePromotion'
import PromoConstructor from '@/shared/promoConstructor'
import Typography from '@/shared/typography'

const promotionStore = usePromotion()
</script>

<template>
  <PromoConstructor>
    <template v-slot:offers>
      <div class="offers-item" v-for="item in promotionStore.items" :key="item.label">
        <div class="items">
          <div class="offers-img">
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="offers-description">
            <div class="offers-text">
              <Typography tag="p" bold size="s">{{ item.text }}</Typography>
            </div>
            <div class="second_offers-text">
              <Typography tag="p" size="m" bold>{{ item.text }}</Typography>
            </div>
          </div>
          <a :href="item.href" />
        </div>
      </div>
    </template>
  </PromoConstructor>
</template>
