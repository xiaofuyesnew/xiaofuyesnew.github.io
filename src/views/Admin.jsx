import { Routes, Route } from 'react-router-dom'

import Index from './Admin/Index'
import List from './Admin/List'

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="list" element={<List />} />
    </Routes>
  )
}

export default Admin
