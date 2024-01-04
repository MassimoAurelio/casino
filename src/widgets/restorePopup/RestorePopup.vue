<script setup lang="ts">
import { ref } from 'vue'
import ModalWindow from '@/shared/modal/modalWindow.vue'
import ModalOverlay from '@/shared/modalOverlay/ModalOverlay.vue'
import Field from '@/shared/field'
import Button from '@/shared/button/ButtonElement.vue'
import Close from '@/app/assets/svg/close.svg'
import Typography from '@/shared/typography/TypographyUi.vue'

let isOpen = ref(true)

function togglePopup() {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <ModalOverlay v-if="isOpen">
    <ModalWindow v-if="isOpen">
      <template v-slot:header>
        <div class="header-content">
          <Typography tag="h2" color="black">Restore Password</Typography>
          <div class="close-button">
            <Button @click="togglePopup" size="small" color="transparent">
              <img :src="Close" alt="close" />
            </Button>
          </div>
        </div>
      </template>
      <div class="login-fields">
        <Field class="email-input" size="m" placeholder="Email"/>
        
        <div class="logIn-btn">
          <Button
            size="medium"
            type="submit"
            >Restore</Button
          >
        </div>
      </div>
    </ModalWindow>
  </ModalOverlay>
</template>

<style scoped>
.close-button {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
}

.email-input,
.password-input {
  width: 100%;
}

.logIn-btn {
  width: 100%;
  border-radius: 52px;
}

.to_registration {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.to_registration-link,
.restore-btn {
  cursor: pointer;
  text-decoration: underline;
}
</style>
