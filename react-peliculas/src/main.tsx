import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Create root nos permite mostrar nuestros componentes de react en un navegador luego tenemos el getElementById me permite obtener un elemento por su id y ese elemento es root que se encuentra en nuestro index.html que es donde queremos que se renderice el componente 
createRoot(document.getElementById('root')!).render(
  //El Strict mode nos avise si estamos comentiendo malas practicas en nuestro codigo
  <StrictMode>
    <App />
  </StrictMode>,
)
