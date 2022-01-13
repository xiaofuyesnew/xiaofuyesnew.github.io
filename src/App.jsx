import { useContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Provider, { Context } from './components/Store'

import Index from './views/Index'
import About from './views/About'

const App = () => {
  const { state, dispatch } = useContext(Context)

  if (localStorage.theme) {
    dispatch({ type: 'set_theme', theme: localStorage.theme })
  } else {
    localStorage.theme = state.mode
  }

  return (
    <Provider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App
