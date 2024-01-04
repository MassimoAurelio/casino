<script setup lang="ts">
import { useSlots } from 'vue'
import Typography from '../typography/TypographyUi.vue'

interface Props {
  color?: 'primary' | 'secondary' | 'erorr' | 'greyscale' | 'link' | 'transparent' | 'white' | 'red'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'small' | 'medium' | 'big'
  text?: string
  withText?: boolean
}

const props = defineProps<Props>()
const slots = useSlots()
const { color = 'primary', decoration = 'default', size = 'small' } = props

const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]
</script>

<template>
  <button :class="classes">
    <slot name="leftIcon"> </slot>
    <Typography v-if="slots.default" class="button__text" tag="p" size="s" bold
      ><slot> </slot
    ></Typography>
    <slot name="rightIcon"> </slot>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  cursor: pointer;
}

.size_small {
  grid-gap: 3px;
  padding: 3px;
}

.size_medium {
  grid-gap: 10px;
  padding: 10px;
}

.button.color_primary {
  background-color: var(--main-secondary);
  color: var(--main-on-primary);
}

.button.color_white {
  background-color: var(--main-surface);
  color: var(--base-body-bg);
}
.button.color_secondary {
  background-color: var(--main-primary);
  color: var(--main-surface);
}

.button.color_red {
  background-color: var( --form-text-link-color);
  color: var(--main-surface);
}
.button.color_link {
  color: blue;
}

.button.color_transparent {
  background-color: var(--main-surface);
}

.size_big {
  grid-gap: 12px;
  padding: 12px;
}

.button__text {
  width: 100%;
  text-align: center;
  color: var(--main-surface);
}
</style>
