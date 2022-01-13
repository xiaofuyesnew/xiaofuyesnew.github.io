import { HashRouter, Routes, Route } from 'react-router-dom'
import Provider from './components/Store'

import Index from './views/Index'
import About from './views/About'

const theme = localStorage.theme

const App = () => {
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
