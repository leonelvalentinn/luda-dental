import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import { AboutPage } from './pages/AboutPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'about',
    element: <AboutPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
