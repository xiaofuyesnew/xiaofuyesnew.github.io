import { createContext, useReducer } from 'react'

const initialState = {
  mode: 'dark'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_theme':
      if (action.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      return { ...state, mode: action.theme }
    default:
      throw new Error(`no such action: ${action.type}`)
  }
}

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
})

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export default Provider
