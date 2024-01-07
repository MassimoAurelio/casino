<script setup lang="ts">
import { ref } from 'vue'
import { useUnAuthHeaderNav } from '@/app/stores/useHeaderNav'
import { useScreenStore } from '@/app/stores/useScreenStore'
import Container from '@/shared/container/ContainerElement.vue'
import Button from '@/shared/button'
import Typography from '@/shared/typography/TypographyUi.vue'
import LoginPopup from '@/widgets/popups/authPopup'
import RegistrationPopup from '@/widgets/popups/registrationPopup'
import Burger from '@/widgets/burger'

const headerNavStore = useUnAuthHeaderNav()
const screenStore = useScreenStore()

let isLogin = ref(false)
let isBurger = ref(false)
let isRegistr = ref(false)

function toggleLoginPopup() {
  isLogin.value = !isLogin.value
  isRegistr.value = false
}

function toggleRegistrationPopup() {
  isRegistr.value = !isRegistr.value
  isLogin.value = false
}

function toggleBurgerMenu() {
  isBurger.value = !isBurger.value
  isRegistr.value = false
  isLogin.value = false
}
</script>

<template>
  <header class="header_main">
    <div class="first">
      <Container class="header_container">
        <div class="burger-btn" v-if="screenStore.platform === 'mobile'">
          <Button @click="toggleBurgerMenu" size="small" color="primary" decoration="default">
            <img src="@/app/assets/svg/burger-btn.svg" alt="burger-btn" />
          </Button>
        </div>
        <div class="burger-menu">
          <Burger v-if="isBurger" :toggleRegistrationPopup="toggleRegistrationPopup" />
        </div>
        <div class="auth-btn">
          <div class="header_login-btn">
            <Button @click="toggleLoginPopup" size="medium" color="primary" decoration="default"
              ><Typography size="m" bold tag="span">LogIn</Typography></Button
            >
            <div class="login-popup">
              <LoginPopup v-if="isLogin" :toggleRegistrationPopup="toggleRegistrationPopup" />
            </div>
          </div>
          <div class="header_signup-btn">
            <Button
              @click="toggleRegistrationPopup"
              size="medium"
              color="primary"
              decoration="default"
              ><Typography size="m" bold tag="span">SignUp</Typography>
            </Button>
            <div class="reg-popup">
              <RegistrationPopup v-if="isRegistr" :toggleLoginPopup="toggleLoginPopup" />
            </div>
          </div>
        </div>
        <div class="header_navigation">
          <a
            class="navigation-button"
            :href="item.href"
            v-for="item in headerNavStore.items"
            :key="item.label"
          >
            <div class="button-value">
              <img :src="item.icon" alt="" />
            </div>
            <span>{{ item.label }}</span>
          </a>
        </div>
      </Container>
    </div>
  </header>
</template>

<style scoped>
.header_main {
  background: var(--header-bg);
}

.first {
  position: relative;
}

.header_container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
  height: 142px;
}

.auth-btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-top: 2%;
}

.header_login-btn:deep(.button),
.header_signup-btn:deep(.button) {
  border-radius: 52px;
}

.header_navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.navigation-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--mc-skip-btn-bg);
  flex-grow: 1;
  min-height: 72px;
  width: 100%;
  padding: 15px 0 13px;
}

.navigation-button:hover {
  background-color: var(--grayscale-hard);
  transition: background-color 0.3s;
}

.button-value {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigation-button:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.navigation-button:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.navigation-button:not(:last-child) {
  border-right: 1px solid #363636;
}

@media screen and (max-width: 776px) {
  .header_navigation {
    display: none;
  }
  .header_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 62px;
  }

  .auth-btn {
    margin-top: unset;
    width: 100%;
  }
}
</style>
