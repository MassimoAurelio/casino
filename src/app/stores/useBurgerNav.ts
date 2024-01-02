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

export const useBurgerMenu = defineStore('burger', {
  state: () => ({
    items: [
      { label: 'Home', icon: home, href: '/' },
      { label: 'Promotion', icon: gift, href: '/offers' },
      { label: 'All Games', icon: games, href: '/games' },
      { label: 'Tournaments', icon: tourney, href: '/tourney' },
      { label: 'Support', icon: support, href: '/support' }
    ] as Store[]
  })
})

