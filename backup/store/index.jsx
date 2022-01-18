import { createContext, useReducer } from 'react'

const initialState = {
  mode: 'dark',
  authInfo: {},
  loginShow: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_theme':
      if (state.mode === 'dark') {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
      return { ...state, mode: state.mode === 'dark' ? 'light' : 'dark' }
    case 'toggle_login':
      return { ...state, loginShow: !state.loginShow }
    default:
      throw new Error(`no such action: ${action.type}`)
  }
}

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
})

const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[ state, dispatch ]}>{children}</Context.Provider>
  )
}

export default Provider
