import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        showNav: false,
    }),
    getters: {},
    actions: {
        toggleNav(val: boolean) {
            this.showNav = val
            val ? (document.querySelector('body')!.style.overflow = 'hidden') : (document.querySelector('body')!.style.overflow = 'auto')
        },
    },
})
