import { defineStore } from 'pinia'
import Girl from '@/app/assets/svg/promotion.webp'

interface Store {
  label: string
  href: string
  icon: string
  text: string
}

export const usePromotion = defineStore('promotion', {
  state: () => ({
    items: [
      { label: 'Home', href: '/', icon: Girl, text: '1TH DEPOSIT BONUS' },
      { label: 'Promotion', href: '/offers', icon: Girl, text: '2TH DEPOSIT BONUS' },
      { label: 'All Games', href: '/games', icon: Girl, text: '3TH DEPOSIT BONUS' },
      { label: 'All Games', href: '/games', icon: Girl, text: '4TH DEPOSIT BONUS' }
    ] as Store[]
  })
})
