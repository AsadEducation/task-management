import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import TenstackProvider from './Provider/TenstackProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TenstackProvider>
        <div className='font-[roboto]'>
          <RouterProvider router={Routes} />
        </div>
      </TenstackProvider>
    </AuthProvider>
  </StrictMode>,
)
