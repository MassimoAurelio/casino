<script setup lang="ts">
interface Props {
  tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  bold?: boolean
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  color?: 'white' | 'black' | 'red' | 'link'
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <component
      :is="props.tag"
      :class="[
        'typography',
        size ? `size_${size}` : '',
        bold ? 'bold' : '',
        `tag${tag}`,
        `color_${color}`
      ]"
    >
      <slot> </slot>
    </component>
  </div>
</template>

<style scoped>
.typography {
  font-style: normal;
  line-height: 150%;
  color: var(--main-on-primary);
}

.size_xs {
  font-size: 12px;
}

.size_s {
  font-size: 14px;
}

.size_m {
  font-size: 16px;
}

.size_l {
  font-size: 24px;
}

.size_xl {
  font-size: 36px;
}

.tag_h1 {
  font-size: 64px;
}
.tag_h2 {
  font-size: 48px;
}
.tag_h3 {
  font-size: 36px;
}
.tag_h4 {
  font-size: 24px;
}
.tag_h5 {
  font-size: 18px;
}

.bold {
  font-weight: 700;
}

.color_white {
  color: var(--main-surface);
}
.color_black {
  color: var(--base-body-bg);
}

.color_link {
  color: var(--form-text-link-color);
}



</style>
