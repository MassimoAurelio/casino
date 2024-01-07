import { defineStore } from 'pinia'
import Girl from '@/app/assets/svg/promotion.webp'
import ImgPromo from '@/app/assets/svg/imgPromo.webp'

interface Store {
  label: string
  href: string
  icon: string
  text: string
  secondText: string
}

export const usePromotion = defineStore('promotion', {
  state: () => ({
    items: [
      {
        label: 'Home',
        href: '/',
        icon: ImgPromo,
        text: '1TH DEPOSIT BONUS',
        secondText: '150% up to 500 AUD + 50 FS in Wolf Gold'
      },
      {
        label: 'Promotion',
        href: '/offers',
        icon: ImgPromo,
        text: '2TH DEPOSIT BONUS',
        secondText: '100% up to 500 AUD'
      },
      {
        label: 'All Games',
        href: '/games',
        icon: ImgPromo,
        text: '3TH DEPOSIT BONUS',
        secondText: '100% up to 500 AUD'
      },
      {
        label: 'All Games',
        href: '/games',
        icon: ImgPromo,
        text: '4TH DEPOSIT BONUS',
        secondText: '150% up to 500 AUD + 50 FS in Wolf Gold'
      }
    ] as Store[]
  })
})
