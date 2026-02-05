import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Entregas from './spa/Entregas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entregas />
  </StrictMode>,
)
