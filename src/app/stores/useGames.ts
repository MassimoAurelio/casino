import { defineStore } from 'pinia'
import home from '@/app/assets/svg/home.svg'
import gift from '@/app/assets/svg/gift.svg'
import games from '@/app/assets/svg/games.svg'
import tourney from '@/app/assets/svg/tourney.svg'
import support from '@/app/assets/svg/support.svg'
import BookOfRa from '@/app/assets/svg/bookOfRa.jpg'

interface Store {
  label: string
  amount: number
  icon: string
}

export const useGames = defineStore('games', {
  state: () => ({
    items: [
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: BookOfRa, amount: 1234 },
      { label: 'mbl_lordofocean', icon: BookOfRa, amount: 1234 },
      { label: 'wild_wild_west', icon: BookOfRa, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: BookOfRa, amount: 1234 },
      { label: 'mbl_lordofocean', icon: BookOfRa, amount: 1234 },
      { label: 'wild_wild_west', icon: BookOfRa, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 },
      { label: 'bookofradeluxe', icon: home, amount: 1234, class: 'home' },
      { label: 'cool_diamonds', icon: gift, amount: 1234, class: 'gift' },
      { label: 'mbl_riseofmerlin', icon: games, amount: 1234 },
      { label: 'mbl_lordofocean', icon: tourney, amount: 1234 },
      { label: 'wild_wild_west', icon: support, amount: 1234 }
    ] as Store[]
  })
})
