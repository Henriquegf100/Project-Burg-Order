import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes/>
    <GlobalStyles/>
  </StrictMode>,
)
