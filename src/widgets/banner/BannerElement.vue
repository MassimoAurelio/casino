<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useBanner } from '@/app/stores/useBanner'
import 'swiper/css'
import Container from '@/shared/container/ContainerElement.vue'
import BannerImg from '@/app/assets/svg/banner.webp'
import Typography from '@/shared/typography/TypographyUi.vue'

const bannerStore = useBanner()
</script>

<template>
  <section class="section">
    <Container class="container">
      <div class="slider">
        <Swiper :slides-per-view="1" :space-between="50" :loop="true" :speed="1300" class="swiper">
          <SwiperSlide class="swiper" v-for="item in bannerStore.items" :key="item.label">
            <img :src="item.icon" alt="banner" />
            <div class="banner-text">
              <Typography tag="h1" bold color="white">{{ item.label }}</Typography>
              <Typography tag="p" color="white">{{ item.description }}</Typography>
              <Typography tag="p" color="white">{{ item.description }}</Typography>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  background: var(--grayscale-hardest);
}
.slider {
  padding-top: 5%;
  z-index: 1;
}

.swiper {
  border-radius: 15px;
  width: 100%;
  height: 400px;
}

.banner-text {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  text-align: left;
  padding-left: 3%;
  padding-right: 3%;
}

@media screen and (max-width: 776px) {
  .swiper {
    border-radius: unset;
  }
  .container {
    padding-left: unset;
    padding-right: unset;
  }
}
</style>
