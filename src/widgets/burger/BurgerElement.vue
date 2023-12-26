<script setup lang="ts">
import { ref } from 'vue'
import { useBurgerMenu } from '@/app/stores/useBurgerNav'
import Avatar from '@/app/assets/svg/avatar.svg'
import Container from '@/shared/container'
import Button from '@/shared/button/ButtonElement.vue'
import Close from '@/app/assets/svg/close.svg'
import Typography from '@/shared/typography/TypographyUi.vue'

const props = defineProps({
  toggleRegistrationPopup: Function
})

const burgerStore = useBurgerMenu()
let isOpen = ref(true)

function toggleBurger() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <Container v-show="isOpen">
    <div class="main-container">
      <div class="profile-menu">
        <div class="close-container">
          <div class="close">
            <Button @click="toggleBurger" size="small">
              <img :src="Close" alt="close" />
            </Button>
          </div>
        </div>

        <div class="user-info">
          <div class="user-name">
            <Typography size="l" bold tag="span">Welcome Package</Typography>
          </div>
          <div class="info">
            <Typography size="m" bold tag="span">150% up to 1000 AUD</Typography
            ><Typography size="m" bold tag="span">+25 Free Spins</Typography>
          </div>
          <div class="reg-btn">
            <Button size="small" @click="props.toggleRegistrationPopup"> SignUp </Button>
          </div>
        </div>
      </div>
      <nav class="nav-panel">
        <div class="nav-containre">
          <a class="nav-item" :href="item.href" v-for="item in burgerStore.items" :key="item.label">
            <img class="nav-icon" :src="item.icon" alt="icon" />
            <span>{{ item.label }}</span>
          </a>
        </div>
      </nav>
    </div>
  </Container>
</template>

<style scoped>
.main-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
}

.close-container {
  display: flex;
  justify-content: flex-end;
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.profile-menu {
  padding: 3%;
  background-color: rgb(158, 126, 126);
}

.reg-btn {
  width: 100px;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.nav-containre {
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 1000px;
}

.nav-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  width: 100%;
  padding: 3%;
  border-bottom: 2px solid rgb(224, 224, 224);
}
</style>
