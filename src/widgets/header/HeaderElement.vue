<script setup lang="ts">
import { useUnAuthHeaderNav } from '@/app/stores/useHeaderNav'
import Container from '@/shared/container/ContainerElement.vue'
import Button from '@/shared/button'
import Typography from '@/shared/typography/TypographyUi.vue'

const headerNavStore = useUnAuthHeaderNav()
</script>

<template>
  <header class="header_main">
    <div class="first">
      <Container class="header_container">
        <div class="auth-btn">
          <div class="header_login-btn">
            <Button size="medium" color="primary" decoration="default" disabled="disabled"
              ><Typography size="m" bold tag="span">LogIn</Typography></Button
            >
          </div>
          <div class="header_signup-btn">
            <Button size="medium" color="primary" decoration="default" disabled="disabled"
              ><Typography size="m" bold tag="span">SignUp</Typography>
            </Button>
          </div>
        </div>
        <div class="header_navigation">
          <nav class="navigation-button" v-for="item in headerNavStore.items" :key="item.label">
            <div class="button-value">
              <img :src="item.icon" alt="" />
              <a class="navigation-link" :href="item.href"> {{ item.label }}</a>
            </div>
          </nav>
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
  align-items: flex-start;
  gap: 10px;
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
  align-items: center;
  justify-content: center;
  background-color: var(--mc-skip-btn-bg);
  flex-grow: 1;
  height: 100%;
  padding: 15px 0 13px;
}

.navigation-button:hover{
  background-color: var( --grayscale-hard);
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
</style>
