import { defineStore } from 'pinia'
import home from '@/app/assets/svg/home.svg'
import gift from '@/app/assets/svg/gift.svg'
import games from '@/app/assets/svg/games.svg'
import tourney from '@/app/assets/svg/tourney.svg'
import support from '@/app/assets/svg/support.svg'

interface navStore {
  label: string
  icon: string
  href: string
}

export const useUnAuthHeaderNav = defineStore('header', {
  state: () => ({
    items: [
      { label: 'Home', icon: home, href: '/' },
      { label: 'Promotion', icon: gift, href: '/offers' },
      { label: 'All Games', icon: games, href: '/#game' },
      { label: 'Tournaments', icon: tourney, href: '/tournament' },
      { label: 'Support', icon: support, href: '/support' }
    ] as navStore[]
  })
})

export const useAuthHeaderNav = defineStore('header', {
  state: () => ({
    items: [
      { label: 'Home', icon: 'home', href: '/' },
      { label: 'Promotion', icon: 'promotion', href: '/promotion' },
      { label: 'All Games', icon: 'games', href: '#games' },
      { label: 'Tournament', icon: 'tournament', href: '/tournament' },
      { label: 'Withdraw', icon: 'withdraw', href: '/withdraw' },
      { label: 'History', icon: 'history', href: '/history' },
      { label: 'Profile', icon: 'profile', href: '/profile' },
      { label: 'Support', icon: 'support', href: '/support' }
    ] as navStore[]
  })
})

export const useMobileHeader = defineStore('mobileHeader', {
  state: () => ({
    items: [
      { label: 'Promotion', icon: gift, href: '/promotion' },
      { label: 'Games', icon: games, href: '#games' },
      { label: 'Tournaments', icon: tourney, href: '/tournament' },
      { label: 'Support', icon: support, href: '/support' }
    ] as navStore[]
  })
})
