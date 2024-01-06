<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderElement from '@/widgets/header/HeaderElement.vue'
import FooterElement from '@/widgets/footer/FooterElement.vue'
</script>

<template>
  <HeaderElement />
  <RouterView />
  <FooterElement />
</template>

<style scoped></style>
