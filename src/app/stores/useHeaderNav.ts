import { defineStore } from 'pinia'

interface navStore {
  label: string
  icon: string
  href: string
}

export const useHeaderNav = defineStore('header', {
  state: () => ({
    items: [
      { label: 'Home', icon: 'home', href: '/' },
      { label: 'Promotion', icon: 'promotion', href: '/promotion' },
      { label: 'All Games', icon: 'games', href: '/games' },
      { label: 'Tournament', icon: 'tournament', href: '/tournament' },
      { label: 'Support', icon: 'support', href: '/support' }
    ] as navStore[]
  })
})
