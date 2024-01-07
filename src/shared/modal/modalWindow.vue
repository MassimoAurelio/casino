<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  width: 'auth' | 'info'
  height?: 'auth' | 'info'
}

const props = defineProps<Props>()

const { width = 'auth', height = 'auth' } = props
const classes = [`width_${width}`, `height_${height}`]
</script>

<template>
  <form class="modal popup" :class="classes">
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

  height: auto;
  border-radius: 15px;
  gap: 15px;
  background-color: var(--grayscale-lightest);
}

.width_auth {
  width: 500px;
}

.width_info {
  width: 70vh;
}

.height_auth {
  height: auto;
}

.height_info {
  height: 70vh;
}
</style>
