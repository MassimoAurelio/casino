<script setup lang="ts">
import { useMobileHeader } from '@/app/stores/useHeaderNav'
import Container from '@/shared/container/ContainerElement.vue'
import Typography from '@/shared/typography/TypographyUi.vue'

const mobileHeader = useMobileHeader()
</script>

<template>
  <nav class="nav">
    <div class="container" v-for="item in mobileHeader.items" :key="item.label">
      <a class="item" :href="item.href">
        <img :src="item.icon" alt="icon" />
        <Typography class="label" tag="span" color="black">{{ item.label }}</Typography>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: azure;
}
.container {
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.label {
  width: 100%;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
