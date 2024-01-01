<script setup lang="ts">
import { ref } from 'vue'
import Typography from '@/shared/typography'
import Container from '@/shared/container/ContainerElement.vue'
import Section from '@/widgets/sections'
import SearchInput from '@/widgets/search/SearchInput.vue'
import Button from '@/shared/button'
import PostImg from '@/app/assets/svg/post.svg'
import ProvidersElement from '@/widgets/providers/ProvidersElement.vue'
import { useGames } from '@/app/stores/useGames'
import UserImg from '@/app/assets/svg/user.svg'

let isProviders = ref(false)

const gamesStore = useGames()

function toggleProviders() {
  isProviders.value = !isProviders.value
}
</script>

<template>
  <section>
    <Container>
      <div class="main">
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
        <div class="games-container">
          <div class="games-item" v-for="item in gamesStore.items" :key="item.label">
            <div class="img">
              <img class="img-item" :src="item.icon" alt="" />
              <div class="buttons" v-if="false">
                <button>Play</button>
                <a href="">Demo</a>
              </div>
            </div>
            <div class="description">
              <div class="game-name">{{ item.label }}</div>
              <div>
                <span class="amount">{{ item.amount }} $</span>
                <span class="users">
                  <img :src="UserImg" alt="user" />
                  79
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 5vh;
}

.input-btn {
  display: flex;
  flex-direction: row;
  gap: 1%;
}

.button {
  border: 1px solid var(--grayscale-hard);
  border-radius: 8px;
}

.games-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3vh;
  width: 100%;
}

.games-item {
  width: 100%;
  border-radius: 15px;
}
.img {
  height: 70px;
  width: 100%;
  background-color: bisque;
}

.img-item {
  width: 100%;
  height: 100%;
}

.description {
  padding: 1vh;
  background-color: cadetblue;
}
</style>
