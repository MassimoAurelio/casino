<script setup lang="ts">
import Container from '@/shared/container'
import Typography from '@/shared/typography'
import { useTourneyStore } from '@/app/stores/useTourney'
const tourneyStore = useTourneyStore()
</script>

<template>
  <Container>
    <div class="main-container">
      <div class="items-container">
        <div class="offers-item" v-for="item in tourneyStore.items" :key="item.label">
          <div class="offers-img">
            <img :src="item.back" alt="icon" class="responsive-image" />
          </div>
          <div class="offers-description">
            <Typography tag="h3" bold size="xxl" color="white">TEXT</Typography>
            <Typography tag="h2" size="xl" bold color="white">TEXT</Typography>
          </div>
          <a :href="item.href" />
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

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
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.offers-img {
  background-color: aquamarine;
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

@media screen and (max-width: 980px) {
  .items-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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
}
</style>
