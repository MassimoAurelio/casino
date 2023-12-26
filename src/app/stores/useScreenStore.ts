import { ref, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', () => {
  const platform = ref<'desktop' | 'tablet' | 'mobile'>('desktop')

  const setPlatform = (width: number) => {
    if (width >= 1208) return (platform.value = 'desktop')
    if (width >= 777) return (platform.value = 'tablet')
    return (platform.value = 'mobile')
  }

  onMounted(() => {
    setPlatform(window.innerWidth)
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  function handleResize() {
    setPlatform(window.innerWidth)
  }

  return { setPlatform, platform }
})
