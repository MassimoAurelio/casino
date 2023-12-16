<script setup lang="ts">
import { useHeaderNav } from '@/app/stores/useHeaderNav'
import Icon from '@/shared/icon'
import Container from '@/shared/container/ContainerElement.vue'
import Button from '@/shared/button'
import Typography from '@/shared/typography/TypographyUi.vue'

const headerNavStore = useHeaderNav()
</script>

<template>
  <header class="header_main">
    <div>
      <Container class="header_container">
        <div class="auth-btn">
          <div class="header_login-btn">
            <Button size="medium" color="primary" decoration="default" disabled="disabled"
              ><Typography size="m" bold tag="span">LogIn</Typography></Button
            >
          </div>
          <div class="header_signup-btn">
            <Button size="medium" color="primary" decoration="default" disabled="disabled"
              ><Typography size="m" bold tag="span">SignUp</Typography></Button
            >
          </div>
        </div>
        <div class="header_navigation">
          <nav class="navigation-button" v-for="item in headerNavStore.items" :key="item.label">
            <div>
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
  background-color: blanchedalmond;
}
.header_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 142px;
  background-color: #193737;
}

.auth-btn {
  display: flex;
  width: 100%;
  margin-top: 3%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
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
  height: 100%;
  background-color: aqua;
}

.first-button {
  border-radius: 16px 0 0 16px;
}

.last-button {
  border-radius: 0 16px 16px 0;
}
</style>
