import Header from './Layout/Header'
import Content from './Layout/Content'
import Footer from './Layout/Footer'

const Layout = ({ children }) => {
  return (
    <main className='f-full h-full overflow-hidden relative'>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </main>
  )
}

export default Layout
