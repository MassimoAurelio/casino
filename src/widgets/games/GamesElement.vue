<script setup lang="ts">
import Typography from '../../shared/typography'
import Container from '@/shared/container/ContainerElement.vue'
import Section from '@/widgets/sections'
</script>

<template>
  <section class="section">
    <Container>
      <div class="main-h1">
        <Typography tag="h1" bold color="black">Главный заголовок главной страницы</Typography>
      </div>
      <Section />
    </Container>
  </section>
</template>

<style scoped></style>
