<script setup lang="ts">
import { ref } from 'vue'
import { useScreenStore } from '@/app/stores/useScreenStore'
import ModalOverlay from '@/shared/modalOverlay'
import Modal from '@/shared/modal'
import Img from '@/app/assets/svg/684x300.webp'
import Typography from '@/shared/typography/TypographyUi.vue'
import closeImg from '@/app/assets/svg/close-infoPopup.svg'

const screenStore = useScreenStore()

const isOpen = ref(true)

function togglePopup() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <ModalOverlay v-if="isOpen">
    <Modal width="info" height="info" v-if="isOpen" class="modals">
      <div class="close-btn">
        <Button @click="togglePopup" class="qq" size="small" color="transparent">
          <img :src="closeImg" alt="" />
        </Button>
      </div>
      <div class="main-container">
        <div class="top-content">
          <div class="img">
            <img :src="Img" alt="icon" />
          </div>
          <div class="contant-info">
            <Typography tag="h3" size="l" color="white" bold>What is a bonus?</Typography>
            <Typography tag="span" size="l" color="white" bold>A bonus is free money</Typography>
          </div>
        </div>
        <div class="footer-content"></div>
      </div>
    </Modal>
  </ModalOverlay>
</template>

<style scoped>
.modals {
  position: relative;
  background-color: var(--header-bg);
}
.popup {
  background-color: unset;
}

.contant-info {
  padding: 2vh;
}

.footer-content {
  padding: 2vh;
}

.main-container {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
}
.close-btn {
  position: absolute;
  padding-top: 4vh;
  right: -20px;
  top: 0;
}

.top-content {
  min-height: 100vh;
  overflow: hidden;
  background-color: black;
}

.footer-content {
  background-color: white;
  height: 200px;
}

.qq {
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

@media screen and (max-width: 700px) {
  .modal {
    padding: unset;
  }

  .modals {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--header-bg);
    z-index: 999;
  }

  .close-btn {
    position: absolute;
    padding-top: 1vh;
    padding-right: 1vh;
    right: 0;
    top: 0;
  }

  .main-container {
    width: 100%;
    height: 100%;
    border-radius: unset;
    top: 0;
    left: 0;
  }
}
</style>
