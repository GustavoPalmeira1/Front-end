import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Filmes from './Filmes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Filmes />
  </StrictMode>,
)
