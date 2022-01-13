const mode = () => {
  if (localStorage.theme && localStorage.theme === 'light') {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}

export default {
  mode,
}
