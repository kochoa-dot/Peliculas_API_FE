import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //El primero almacena el valor y el segundo es la función que lo modifica
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, [])

  return (
    //Con react yo construyo UI con componentes 
    <div>
      {/* Ahora con este nuevo componente podemos separar el input del contador de hora porque internamente react lo que hace cuando se actualiza un valor con una precisión quirúrgica actualiza lo que tiene que actualizar y deja todo lo demás igual eso hace que sea super eficiente porque permite la mínima intervención posible para que tu app muestre lo que tu quieres */}
      <h3>Ejemplo React</h3>
      <input />
      {/* Aca yo debo usar estado que es algo que me permite tener un valor el cual va a ser persistido entre distintas renderizaciones del componente */}
      <div>{horaActual.toString()}</div>
    </div>
  )
}

export default App
