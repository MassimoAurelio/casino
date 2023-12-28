import { defineStore } from 'pinia'
import home from '@/app/assets/svg/home.svg'
import gift from '@/app/assets/svg/gift.svg'
import games from '@/app/assets/svg/games.svg'
import tourney from '@/app/assets/svg/tourney.svg'
import support from '@/app/assets/svg/support.svg'

interface Store {
  label: string
  icon: string
}

export const useGameSection = defineStore('section', {
  state: () => ({
    items: [
      { label: 'Slots', icon: home },
      { label: 'Live', icon: gift },
      { label: 'HOT', icon: games },
      { label: 'NEW', icon: tourney },
      { label: 'Table', icon: support }
    ] as Store[]
  })
})
