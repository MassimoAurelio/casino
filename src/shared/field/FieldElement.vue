<script lang="ts" setup>
import { useSlots } from 'vue'

interface Props {
  disabled?: boolean
  size?: 'm' | 'l'
  placeholder?: string
  type?: string
}

const slots = useSlots()
const props = defineProps<Props>()
const { disabled = false, size = 'm', placeholder = '', type = 'text' } = props
</script>

<template>
  <div
    :class="[
      'field',
      `disabled_${disabled}`,
      `size_${size}`,
      `left-icon_${Boolean(slots.leftIcon)}`,
      `right-icon_${Boolean(slots.rightIcon)}`
    ]"
  >
    <slot name="label"></slot>
    <div class="field__container">
      <div v-if="slots.leftIcon" class="field__left-icon">
        <slot name="leftIcon"></slot>
      </div>
      <input class="field__input" :type="type" :placeholder="placeholder" :disabled="disabled" />
      <slot></slot>
      <div v-if="slots.rightIcon" class="field__right-icon">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field:deep(.typography) {
  color: var(--grayscale-hard);
}

.field__input {
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--grayscale-light);
  background: var(--main-surface);
  color: var(--main-on-surface);
  transition: 0.3s ease-in-out;
}

.field__input:focus {
  border: 2px solid var(--field-input-border-color-active);
}

.field__input:disabled {
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--grayscale-lightest);
}

.field__container {
  position: relative;
}

.field__right-icon,
.field__left-icon {
  position: absolute;
  cursor: pointer;
}

.field__input::placeholder {
  color: var(--grayscale-hard);
}

.field.size_m .field__input {
  padding: 8px 16px;
  font-size: 16px;
}
.field.size_l .field__input {
  padding: 12px 16px;
  font-size: 16px;
}

.field.left-icon_true.size_m .field__left-icon {
  top: 8px;
  left: 8px;
}

.field.left-icon_true.size_m .field__input {
  padding-left: 40px;
}

.field.right-icon_true.size_m .field__right-icon {
  top: 8px;
  right: 8px;
}

.field.left-icon_true.size_l .field__left-icon {
  top: 8px;
  left: 8px;
  padding: 6px;
}

.field.left-icon_true.size_l .field__input {
  padding-left: 56px;
}

.field.right-icon_true.size_l .field__right-icon {
  top: 8px;
  right: 8px;
  padding: 6px;
}

.field.right-icon_true.size_l .field__input {
  padding-left: 40px;
}
</style>
