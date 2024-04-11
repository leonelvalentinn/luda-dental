import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutPage /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
