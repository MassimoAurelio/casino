<script setup lang="ts">
import { ref } from 'vue'
import { useGameSection } from '..//../app/stores/useGameSection'
import Typography from '@/shared/typography'
import Container from '@/shared/container'
import Button from '@/shared/button/ButtonElement.vue'

const sectionStore = useGameSection()
</script>

<template>
  <Container>
    <div class="section-container">
      <div class="main-section" v-for="item in sectionStore.items" :key="item.label">
        <div class="button-container">
          <Button size="medium" color="primary" decoration="default">
            <img :src="item.icon" alt="img" />
            <Typography tag="span" bold color="black">{{ item.label }}</Typography>
          </Button>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.section-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main-section {
  width: 100px;
}

</style>
