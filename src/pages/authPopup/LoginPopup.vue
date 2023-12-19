<script setup lang="ts">
import { ref } from 'vue'
import ModalWindow from '@/shared/modal/modalWindow.vue'
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
  <div v-if="isOpen" class="modal-overlay">
    <ModalWindow class="login-popup" v-if="isOpen">
      <template v-slot:header>
        <div class="header-content">
          <Typography tag="h1" color="black">LogIn</Typography>
          <div class="close-button">
            <Button @click="togglePopup" size="small">
              <img :src="Close" alt="close" />
            </Button>
          </div>
        </div>
      </template>
      <div class="login-fields">
        <Field size="m" placeholder="Email" />
        <Field size="m" placeholder="Password" />
      </div>
      <div class="logIn-btn">
        <Button size="medium">Submit</Button>
      </div>
      <template v-slot:footer>
        <div class="to_registration">
          <Typography tag="h3" color="black">New user?</Typography>
          <div class="to_registration-link">
            <Typography tag="span" color="link">SignUp</Typography>
          </div>
        </div>
      </template>
    </ModalWindow>
  </div>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.login-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 350px;
  border-radius: 15px;
  background-color: var(--grayscale-lightest);
}

.close-button {
  width: 25px;
  height: 25px;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.login-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.to_registration {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

.to_registration-link {
  color: blue;
}
</style>
