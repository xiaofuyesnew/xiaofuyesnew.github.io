
export const setStorage = (key, value, encrypt = false) => {
  if (encrypt) {
    window.localStorage.setItem(key, window.btoa(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

export const getStorage = (key, decrypt = false) => {
  if (decrypt) {
    return window.atob(window.localStorage.getItem(key))
  } else {
    return window.localStorage.getItem(key)
  }
}
