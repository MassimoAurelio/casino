import { defineStore } from 'pinia'

interface Store {
  label: string
  href: string
  icon: string
}

export const useFooterLink = defineStore('footer', {
  state: () => ({
    items: [
      { label: 'Home', href: '/' },
      { label: 'Promotion', href: '/offers' },
      { label: 'All Games', href: '/games' },
      { label: 'Tournaments', href: '/tourney' },
      { label: 'Support', href: '/support' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms and Conditions', href: '/terms-and-conditions' },
      { label: 'Responsible Gambling', href: '/responsible-gaming' },
      { label: 'Blog', href: '/blog' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'support@aureliofotrune.com' },
      { label: 'affiliate@aureliofotrune.com' }
    ] as Store[]
  })
})
