import { defineStore } from 'pinia'
import { setStorage, getStorage } from '@/utils'

export const useGlobal = defineStore('global', {
  state() {
    return {
      theme: 'dark',
      loading: false
    }
  },
  getters: {},
  actions: {
    showLoading() {
      this.loading = true
    },
    hideLoading() {
      this.loading = false
    },
    setTheme() {
      this.theme = getStorage('theme') || 'dark'
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      setStorage('theme', this.theme)

      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
})
