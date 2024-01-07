<script setup lang="ts">
import { defineProps } from 'vue'
import { usePromotion } from '@/app/stores/usePromotion'
import Typography from '@/shared/typography'
import Container from '@/shared/container'

interface Props {
  title?: String
  offerText: String
  useContainer: Boolean
}

//НУЖНО БУДЕТ ПЕРЕРАБОТАТЬ КАК PromotionOfferPage

const props = defineProps<Props>()

const promotionStore = usePromotion()
</script>

<template>
  <div :class="{ 'main-container': useContainer }">
    <Container v-if="useContainer">
      <div class="contant-container">
        <div class="promotion-h2">
          <Typography tag="h2" bold>{{ title }}</Typography>
        </div>
        <div class="offers-container">
          <div class="offers-item" v-for="item in promotionStore.items" :key="item.label">
            <div class="offers-img">
              <img :src="item.icon" alt="icon" />
            </div>
            <div class="offers-description">
              <div class="offers-text">
                <Typography tag="p" bold size="s">{{ item.text }}</Typography>
              </div>
              <div class="second_offers-text">
                <Typography tag="p" size="m" bold>{{ offerText }}</Typography>
              </div>
            </div>
            <a :href="item.href" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.main-container {
  background-color: var(--header-bg);
}

.contant-container {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding-top: 3vh;
  padding-bottom: 3vh;
}

.offers-item {
  cursor: pointer;
  position: relative;
  width: 50vh;
  height: 20vh;
  overflow: hidden;
  border-radius: 15px;
  background-color: aqua;
  transition: transform 0.3s ease;
}

.offers-item:hover {
  transform: translateY(-10px);
}

.offers-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  gap: 1vh;
  padding: 2vh;
  word-break: break-word;
}

.offers-container {
  display: flex;
  flex-direction: row;
  gap: 2vh;
}

.offers-img {
  width: 100%;
  height: 100%;
}

.offers-img img {
  width: 100%;
  height: 100%;
}

.offers-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

@media screen and (max-width: 840px) {
  .offers-container {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
  }

  .offers-item {
    cursor: pointer;
    position: relative;
    width: 100%;
    background-color: aqua;
  }
}

@media screen and (max-width: 510px) {
  .offers-container {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }

  .offers-item {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 210px;
    background-color: aqua;
  }
}
</style>
