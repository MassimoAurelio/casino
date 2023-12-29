<script setup lang="ts">
import { ref } from 'vue'
import { useGameSection } from '@/app/stores/useGameSection'
import Typography from '@/shared/typography'
import Button from '@/shared/button/ButtonElement.vue'

const sectionStore = useGameSection()
let activeButtonIndex = ref<number | null>(null)

function toggleBorder(index: number) {
  activeButtonIndex.value = index === activeButtonIndex.value ? null : index
}
</script>

<template>
  <div class="section-container">
    <div class="main-section" v-for="(item, index) in sectionStore.items" :key="item.label">
      <div class="button-container">
        <Button
          color="white"
          @click="() => toggleBorder(index)"
          :class="{ active: index === activeButtonIndex }"
        >
          <img :src="item.icon" alt="" />
          <Typography tag="span" size="s" bold color="black">{{ item.label }}</Typography>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
}

.main-section {
  width: 100px;
}


::v-deep Button {
  border-radius: 8px;
  padding: 5px;
  height: 40px;
  width: 100px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.active {
  border: 2px solid var(--field-input-border-color-active);
}
</style>
