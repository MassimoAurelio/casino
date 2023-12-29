<script setup lang="ts">
import Header from '@/widgets/header/HeaderElement.vue'
import Banner from '@/widgets/banner'
import Games from '@/pages/games'
import 'swiper/css'
</script>

<template>
  <main>
    <Header />
    <Banner />
    <Games />
  </main>
</template>

<style scoped>
main {
  height: 1000px;
}
</style>
