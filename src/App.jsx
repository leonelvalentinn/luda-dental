import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage.jsx'
import { Page404 } from './pages/Page404.jsx'

function App () {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
