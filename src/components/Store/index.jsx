import { createContext, useReducer } from 'react'

const initialState = {}

const reducer = (state, action) => {
  switch (action.type) {
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
