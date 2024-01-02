import { defineStore } from 'pinia'
import home from '@/app/assets/svg/banner.webp'

interface Store {
  label: string
  description: string
  icon: string
}

export const useBanner = defineStore('banner', {
  state: () => ({
    items: [
      {
        description: 'description description description',
        label: 'Label Label',
        icon: home
      },
      {
        description: 'description description description',
        label: 'Label Label',
        icon: home
      },
      {
        description: 'description description description',
        label: 'Label Label',
        icon: home
      },
      {
        description: 'description description description',
        label: 'Label Label',
        icon: home
      },
      {
        description: 'description description description',
        label: 'Label Label',
        icon: home
      }
    ] as Store[]
  })
})
