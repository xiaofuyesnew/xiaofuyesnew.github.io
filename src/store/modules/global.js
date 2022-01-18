const global = {
  state: {
    mode: 'dark',
  },
  mutations: {
    'toggle_mode': (state, payload) => {
      if (state.mode === 'dark') {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
      return { ...state, mode: state.mode === 'dark' ? 'light' : 'dark' }
    }
  }
}

export default global