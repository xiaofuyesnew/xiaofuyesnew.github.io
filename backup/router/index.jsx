import { HashRouter, Route, Routes } from 'react-router-dom'

import Index from '@/views/Index'
import About from '@/views/About'
import Admin from '@/views/Admin'
import AdminList from '@/views/Admin/List'

const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'list',
        element: <AdminList />,
      },
    ],
  },
]

const setRoute = (routes) => {
  return routes.map((route, index) => {
    const { path, element, children } = route
    if (children) {
      return (
        <Route key={index} path={`${path}/*`} element={element}>
          {setRoute(children)}
        </Route>
      )
    } else {
      return (
        <Route key={index} path={path} element={element} />
      )
    }
  })
}

const Router = () => {
  return (
    <HashRouter>
      <Routes>{setRoute(routes)}</Routes>
    </HashRouter>
  )
}

export default Router
