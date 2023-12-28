<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Container from '@/shared/container/ContainerElement.vue'
import BannerImg from '@/app/assets/svg/banner.webp'
import Typography from '@/shared/typography/TypographyUi.vue'
</script>

<template>
  <Container>
    <section>
      <div class="slider">
        <Swiper :slides-per-view="1" :space-between="50" :loop="true" :speed="1300" class="swiper">
          <SwiperSlide class="swiper"
            ><img :src="BannerImg" alt="banner" />
            <div class="banner-text">
              <Typography tag="h2" color="white">Ваш текст на баннере</Typography>
            </div></SwiperSlide
          >
          <SwiperSlide class="swiper"
            ><img :src="BannerImg" alt="banner" />
            <div class="banner-text">
              <Typography tag="h2" color="white">Ваш текст на баннере</Typography>
            </div></SwiperSlide
          ><SwiperSlide class="swiper"
            ><img :src="BannerImg" alt="banner" />
            <div class="banner-text">
              <Typography tag="h2" color="white">Ваш текст на баннере</Typography>
            </div></SwiperSlide
          >
        </Swiper>
      </div>
    </section>
  </Container>
</template>

<style scoped>
.slider {
  padding: 50px 0;
  z-index: 1;
}

.swiper {
  border-radius: 15px;
  width: 100%;
  height: 400px;
}

.banner-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
