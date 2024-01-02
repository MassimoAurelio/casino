<script setup lang="ts">
import { useMobileHeader } from '@/app/stores/useHeaderNav'
import Container from '@/shared/container/ContainerElement.vue'

const mobileHeader = useMobileHeader()
</script>

<template>
  <Container>
    <nav class="nav">
      <div class="container" v-for="item in mobileHeader.items" :key="item.label">
        <a class="item" :href="item.href">
          <img :src="item.icon" alt="icon" />
          <span class="label">{{ item.label }}</span>
        </a>
      </div>
    </nav>
  </Container>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
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
