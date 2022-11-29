import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    main: "none"
  }),
  actions: {
    setMain(value: string) {
      this.main = value
    },
  },
  getters: {
    getMain: (state) => state.main,
  },
})