<script setup lang="ts">
import { ref } from 'vue'
import { useGames } from '@/app/stores/useGames'
import Button from '@/shared/button/ButtonElement.vue'
import Typography from '@/shared/typography/TypographyUi.vue'
import { useScreenStore } from '@/app/stores/useScreenStore'

const gamesStore = useGames()
const screenStore = useScreenStore()

const isHovered = ref(Array(gamesStore.items.length).fill(false))

const handleMouseOver = (index: number) => {
  isHovered.value[index] = true
}

const handleMouseOut = (index: number) => {
  isHovered.value[index] = false
}

const isShow = (index: number, show: boolean) => {
  isHovered.value[index] = show
}
</script>

<template>
  <div class="games-container">
    <div
      class="games-item"
      v-for="(item, index) in gamesStore.items"
      :key="item.label"
      @mouseover="() => handleMouseOver(index)"
      @mouseout="() => handleMouseOut(index)"
    >
      <div
        class="img"
        @mouseover="() => isShow(index, true)"
        @mouseout="() => isShow(index, false)"
      >
        <img
          class="img-item"
          :class="{ 'img-item-hover': isHovered[index] }"
          :src="item.icon"
          alt="img"
        />
        <div class="buttons" v-show="isHovered[index]">
          <div class="button-play">
            <Button size="small"><Typography tag="span" bold size="l">Play</Typography></Button>
          </div>
          <a href=""><Typography tag="span" bold size="s">Demo</Typography></a>
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

.games-item:hover {
  transform: translateY(-5px);
}

.button-hover {
  transition: transform 0.3s ease;
}

.games-item {
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.img {
  position: relative;
  height: 150px;
  width: 100%;
  background-color: bisque;
  overflow: hidden;
}

.buttons {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.button-play {
  width: 15vh;
  border-radius: 10px;
  overflow: hidden;
}

.img-item {
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease;
}

.img-item-hover {
  filter: blur(3px);
  transition: transform 0.3s ease;
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
  background-color: azure;
  height: 67px;
}

@media screen and (max-width: 1440px) {
  .img {
    position: relative;
    height: 110px;
    width: 100%;
    background-color: rgb(60, 104, 48);
    overflow: hidden;
  }
}

@media screen and (max-width: 840px) {
  .games-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3vh;
    width: 100%;
  }
}

@media screen and (max-width: 510px) {
  .games-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3vh;
    width: 100%;
  }
}
</style>
