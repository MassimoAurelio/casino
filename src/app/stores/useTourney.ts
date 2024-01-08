import { defineStore } from 'pinia'
import home from '@/app/assets/svg/home.svg'


interface tourneyStore {
  label: string
  icon: string
  href: string
}

export const useTourneyStore = defineStore('tourney', {
  state: () => ({
    items: [
      { label: 'Home', icon: home, href: '/' },
      
    ] as tourneyStore[]
  })
})
