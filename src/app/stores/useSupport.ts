import { defineStore } from 'pinia'


interface Store {
  text: string
}

export const useSupport = defineStore('burger', {
  state: () => ({
    items: [
      { text: 'We work for you daily from 16:00 to 10:00 GMT+11' },
      { text: 'We work for you daily from 16:00 to 10:00 GMT+11' },
      { text: 'We work for you daily from 16:00 to 10:00 GMT+11' },
      { text: 'We work for you daily from 16:00 to 10:00 GMT+11' }
    ] as Store[]
  })
})
