<script setup lang="ts">
import { useBurgerMenu } from '@/app/stores/useBurgerNav'
import Avatar from '@/app/assets/svg/avatar.svg'
import Container from '@/shared/container'
import Button from '@/shared/button/ButtonElement.vue'

const burgerStore = useBurgerMenu()
</script>

<template>
  <Container>
    <div class="profile-menu">
      <div>
        <a href=""><img :src="Avatar" alt="avatar" /></a>
      </div>
      <div class="user-info">
        <div class="user-name">Welcome Package <a href=""></a></div>
        <div class="balance">150% up to 1000 AUD <span>+25 Free Spins</span></div>
        <div class="reg-btn">
          <Button size="small"> SignUp </Button>
        </div>
      </div>
    </div>
    <nav class="nav-panel">
      <div class="nav-containre">
        <a :href="item.href" v-for="item in burgerStore.items" :key="item.label">
          <img :src="item.icon" alt="icon" />
          <span>{{ item.label }}</span>
        </a>
      </div>
    </nav>
  </Container>
</template>

<style scoped>
.profile-menu {
  width: 100%;
  height: 100%;
  background-color: aqua;
}

.user-info {
  width: 100%;
  height: 100%;
}

.nav-containre {
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
