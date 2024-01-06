<script setup lang="ts"></script>

<template>
  <form class="modal popup">
    <div class="modal_header">
      <slot name="header"></slot>
    </div>
    <div class="modal_content">
      <slot></slot>
    </div>
    <div class="modal_footer">
      <slot name="footer"></slot>
    </div>
  </form>
</template>

<style scoped>
.modal {
  padding: 25px;
}
.modal_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.modal_header {
  width: 100%;
}

.modal_footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: auto;
  border-radius: 15px;
  gap: 15px;
  background-color: var(--grayscale-lightest);
}

</style>
