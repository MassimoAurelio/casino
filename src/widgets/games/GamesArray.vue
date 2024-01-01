<script setup lang="ts">
import { useGames } from '@/app/stores/useGames'
import UserImg from '@/app/assets/svg/user.svg'

const gamesStore = useGames()
</script>

<template>
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
</template>

<style scoped>
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

@media screen and (max-width: 776px) {
  .games-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2dvh;
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    .games-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1vh;
      width: 100%;
    }
  }
}
</style>
