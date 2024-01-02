<script setup lang="ts">
import { ref } from 'vue'
import { useScreenStore } from '@/app/stores/useScreenStore'
import Typography from '@/shared/typography'
import Container from '@/shared/container/ContainerElement.vue'
import Section from '@/widgets/sections'
import SearchInput from '@/widgets/search/SearchInput.vue'
import Button from '@/shared/button'
import PostImg from '@/app/assets/svg/post.svg'
import ProvidersElement from '@/widgets/providers/ProvidersElement.vue'
import GamesArray from '@/widgets/games'
import MobileHeader from '@/widgets/header/mobileHeader/MobileHeader.vue'

const screenStore = useScreenStore()
let isProviders = ref(false)

function toggleProviders() {
  isProviders.value = !isProviders.value
}
</script>

<template>
  <section>
    <Container>
      <div class="main">
        <div class="mobile-header" v-if="screenStore.platform === 'mobile'">
          <MobileHeader />
        </div>
        <div class="main-h1">
          <Typography tag="h1" bold color="black">Главный заголовок главной страницы</Typography>
        </div>
        <Section />
        <div class="input-btn">
          <SearchInput />
          <div class="button">
            <Button @click="toggleProviders" size="small" color="white">
              <img :src="PostImg" alt="button" />
            </Button>
          </div>
        </div>
        <div class="provider">
          <ProvidersElement v-if="isProviders" />
        </div>
        <div class="game-array">
          <GamesArray />
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.main-h1 {
  padding-top: 5px;
  padding-bottom: 5px;
}

.input-btn {
  display: flex;
  flex-direction: row;
  gap: 2%;
}

.button {
  border: 1px solid var(--grayscale-hard);
  border-radius: 8px;
}
</style>
