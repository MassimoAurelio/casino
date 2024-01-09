import { defineStore } from 'pinia'
import home from '@/app/assets/svg/home.svg'
import back from '@/app/assets/svg/background.webp'

interface tourneyStore {
  label: string
  icon: string
  href: string
  back: string
}

export const useTourneyStore = defineStore('tourney', {
  state: () => ({
    items: [{ label: 'Home', icon: home, href: '/', back: back }] as tourneyStore[]
  })
})
