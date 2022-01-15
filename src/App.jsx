import { useContext } from 'react'
import Provider, { Context } from './store'
import Router from './router'

const App = () => {
  const { state, dispatch } = useContext(Context)

  if (localStorage.theme) {
    dispatch({ type: 'set_theme', theme: localStorage.theme })
  } else {
    localStorage.theme = state.mode
  }

  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
