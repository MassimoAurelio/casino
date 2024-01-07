<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="h2">
      <slot name="header"></slot>
    </div>
    <div class="offer-items">
      <slot name="offers"></slot>
    </div>
  </div>
</template>

<style scoped></style>
