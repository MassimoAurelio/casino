<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
  title: string
  isOpen: boolean
  close: () => void
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>


<template>
    <div v-if="props.isOpen" class="modal">
        <div class="modal_header">
        
        </div>
    </div>
</template>