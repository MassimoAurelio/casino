<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderElement from '@/widgets/header/HeaderElement.vue'
import FooterElement from '@/widgets/footer/FooterElement.vue'

const router = useRouter()
const isNavigating = ref(false)

router.beforeEach((to, from, next) => {
 isNavigating.value = true
 next()
})

router.afterEach(() => {
 isNavigating.value = false
})
</script>

<template>
 <div v-if="!isNavigating">
 <HeaderElement />

 <RouterView />

 <FooterElement />
 </div>
</template>

<style scoped></style>