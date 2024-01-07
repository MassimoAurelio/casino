<script setup lang="ts">
import { ref, defineProps } from 'vue'
import ModalWindow from '@/shared/modal/modalWindow.vue'
import ModalOverlay from '@/shared/modalOverlay/ModalOverlay.vue'
import Field from '@/shared/field'
import Button from '@/shared/button/ButtonElement.vue'
import Close from '@/app/assets/svg/close.svg'
import Typography from '@/shared/typography/TypographyUi.vue'
import checkboxImg from '@/app/assets/svg/checkbox.svg'

const props = defineProps({
  toggleLoginPopup: Function
})

const checkBox = ref(false)

function toggleCheckBox() {
  checkBox.value = !checkBox.value
}

const isOpen = ref(true)

function togglePopup() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <ModalOverlay v-if="isOpen">
    <ModalWindow width="auth" v-if="isOpen">
      <template v-slot:header>
        <div class="header-content">
          <Typography tag="h2" color="black">Grab your Welcome Offer!</Typography>
          <div class="close-button">
            <Button @click="togglePopup" size="small" color="transparent">
              <img :src="Close" alt="close" />
            </Button>
          </div>
        </div>
      </template>
      <div class="login-fields">
        <Field class="emeil-input" size="l" placeholder="Email" />
        <Field class="name-input" size="l" placeholder="Name" />
        <Field class="surname-input" size="l" placeholder="Surname" />
        <Field class="birth-input" size="l" placeholder="Date of birth (YYYY-MM-DD)" />
        <Field class="password-input" size="l" placeholder="Password"
          ><template #rightIcon>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> </template
        ></Field>
        <label class="checkbox-container">
          <Field
            class="checkbox"
            size="l"
            type="checkbox"
            name="acceptTerms"
            @click="toggleCheckBox"
            style="display: none"
          />
          <span class="push-checkbox">
            <img
              :src="checkboxImg"
              alt="checkbox"
              style="max-width: 100%; max-height: 100%"
              v-if="checkBox"
            />
          </span>
          <Typography tag="span" color="black" size="s">
            I accept the <a class="terms" href="#">Terms & Conditions</a> and confirm that I am over
            18 years of age
          </Typography>
        </label>
        <div class="logIn-btn">
          <Button class="reg-btn" size="big" color="red">SignUp</Button>
        </div>
      </div>
      <template v-slot:footer>
        <div class="footer">
          <div class="to_registration">
            <Typography tag="p" color="black">Already registered?</Typography>
            <div class="to_registration-link" @click="props.toggleLoginPopup">
              <Typography tag="span" color="link">LogIn</Typography>
            </div>
          </div>
          <div class="restore-btn">
            <Typography tag="span" color="link"
              >Up to 4000 C$ + 150 FS for the first 4 deposits</Typography
            >
          </div>
        </div>
      </template>
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

.terms {
  color: var(--form-text-link-color);
}

.push-checkbox {
  align-items: center;
  background: #fff;
  border: 2px solid #dbdcee;
  border-radius: 8px;
  display: inline-flex;
  height: 32px;
  justify-content: center;
  margin-right: 8px;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
  transition: background 0.2s ease;
  width: 32px;
}

.checkbox-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vh;
}
.login-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;
}

.emeil-input,
.password-input,
.surname-input,
.birth-input,
.name-input {
  width: 100%;
}

.logIn-btn {
  width: 100%;
  border-radius: 52px;
}

.reg-btn:hover {
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
