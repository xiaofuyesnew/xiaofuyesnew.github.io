import { useContext } from 'react'
import Provider, { Context } from './store'
import Router from './router'

import LoginItem from '@/components/Login/Item'

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
      <LoginItem />
    </Provider>
  )
}

export default App
