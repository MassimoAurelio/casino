<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import ModalWindow from '@/shared/modal/modalWindow.vue'
import ModalOverlay from '@/shared/modalOverlay/ModalOverlay.vue'
import RestorePopup from '@/widgets/popups/restorePopup'
import Fields from '@/shared/field'
import Button from '@/shared/button/ButtonElement.vue'
import Close from '@/app/assets/svg/close.svg'
import Typography from '@/shared/typography/TypographyUi.vue'
import OpenEye from '@/app/assets/svg/eye.svg'
import CloseEye from '@/app/assets/svg/eye-close.svg'

const props = defineProps({
  toggleRegistrationPopup: Function
})

let isOpen = ref(true)

function togglePopup() {
  isOpen.value = !isOpen.value
}

let isRestore = ref(false)

function toggleRestorePopup() {
  isOpen.value = false
  isRestore.value = !isRestore.value
}

let showPassword = ref(false)

const passwordIconPath = computed(() => (showPassword.value ? OpenEye : CloseEye))

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <ModalOverlay v-if="isOpen">
    <ModalWindow width="auth" height="auth" v-if="isOpen">
      <template v-slot:header>
        <div class="header-content">
          <Typography tag="h2" color="black">LogIn</Typography>
          <div class="close-button">
            <Button @click="togglePopup" size="small" color="transparent">
              <img :src="Close" alt="close" />
            </Button>
          </div>
        </div>
      </template>
      <form class="login-fields">
        <Fields class="email-input" size="l" placeholder="Email" />
        <Fields class="password-input" size="l" placeholder="Password">
          <template #rightIcon>
            <img
              v-if="passwordIconPath"
              @click="togglePasswordVisibility"
              :src="passwordIconPath"
              alt="eye"
            />
          </template>
        </Fields>
        <div class="logIn-btn">
          <Button class="sum-btn" type="submit" size="big" color="red">Submit</Button>
        </div>
      </form>
      <template v-slot:footer>
        <div class="footer">
          <div class="to_registration">
            <Typography tag="p" color="black">New user?</Typography>
            <div class="to_registration-link" @click="props.toggleRegistrationPopup">
              <Typography tag="span" color="link">SignUp</Typography>
            </div>
          </div>
          <div class="restore-btn" @click="toggleRestorePopup">
            <Typography tag="span" color="link">Restore Password</Typography>
          </div>
        </div>
      </template>
    </ModalWindow>
  </ModalOverlay>
  <RestorePopup v-if="isRestore" />
</template>

<style scoped>
.is-invalid {
  border: 1px solid red;
}

.error-message {
  color: red;
}
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

.sum-btn:hover {
  background-color: var(--hover);
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
