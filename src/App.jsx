import { useContext } from 'react'
import Provider, { Context } from './components/Store'
import Router from './router/index'

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
