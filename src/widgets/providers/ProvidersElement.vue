<script setup lang="ts">
import Typography from '@/shared/typography'
import Container from '@/shared/container'
import { useProviders } from '@/app/stores/useProviders'

const storeProviders = useProviders()
</script>

<template>
  <Container class="container">
    <div class="provider-container">
      <div class="provider-item" v-for="item in storeProviders.items" :key="item.label">
        <img :src="item.icon" alt="" />
        <Typography size="s" tag="span" color="black" bold>{{ item.label }}</Typography>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  padding-left: unset;
  padding-right: unset;
}
.provider-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2vh;
}

.provider-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 1vh;
  border-radius: 8px;
  background-color: aqua;
  padding: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 776px){.provider-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vh;
}
}
</style>
