import { defineStore } from 'pinia'
import home from '@/app/assets/svg/home.svg'
import gift from '@/app/assets/svg/gift.svg'
import games from '@/app/assets/svg/games.svg'
import tourney from '@/app/assets/svg/tourney.svg'
import support from '@/app/assets/svg/support.svg'

interface Store {
  label: string
  href: string
  icon: string
}

export const useProviders = defineStore('providers', {
  state: () => ({
    items: [
      { label: '3oaks', icon: home },
      { label: '3oaks', icon: gift },
      { label: '3oaks', icon: games },
      { label: '3oaks', icon: tourney },
      { label: '3oaks', icon: support }
    ] as Store[]
  })
})
