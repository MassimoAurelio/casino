<script setup lang="ts"></script>

<template>
  <div class="modal-overlay">
    <slot></slot>
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
  background-color: rgba(25, 21, 24, 0.95);
  z-index: 1000;
}
</style>
