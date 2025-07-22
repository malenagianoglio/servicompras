import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Registro from "./pages/Registro";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registro />
  </StrictMode>,
)
