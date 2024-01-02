<script setup lang="ts">
import { ref } from 'vue';
import { useGames } from '@/app/stores/useGames';

const gamesStore = useGames();

const isHovered = ref(Array(gamesStore.items.length).fill(false));

const handleMouseOver = (index: number) => {
  isHovered.value[index] = true;
};

const handleMouseOut = (index: number) => {
  isHovered.value[index] = false;
};
</script>

<template>
  <div class="games-container">
    <div class="games-item" v-for="(item, index) in gamesStore.items" :key="item.label">
      <div class="img">
        <img
          class="img-item"
          :class="{ 'img-item-hover': isHovered[index] }"
          :src="item.icon"
          alt="img"
          @mouseover="() => handleMouseOver(index)"
          @mouseout="() => handleMouseOut(index)"
        />
        <div class="buttons" v-if="false">
          <button>Play</button>
          <a href="">Demo</a>
        </div>
      </div>
      <div class="description">
        <div class="game-name">{{ item.label }}</div>
        <div>
          <div class="description-footer">
            <span class="amount">{{ item.amount }} $</span>
            <span class="users"> 79 </span>
          </div>
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
  cursor: pointer;
  width: 100%;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.img {
  height: 70px;
  width: 100%;
  background-color: bisque;
}

.img-item {
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease;
}

.img-item-hover {
  filter: blur(5px);
}

.description-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.users {
  width: 20%;
  justify-self: end;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1vh;
  background-color: cadetblue;
  height: 50px;
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
