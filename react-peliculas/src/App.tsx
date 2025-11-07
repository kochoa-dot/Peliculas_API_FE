import { useState } from "react";
import ContenidoDinamicoIf from "./ContenidoDinamicoIf";

export default function App() {

//Dependiendo el estado que yo he colocado en el componente padre estamos utilizando un operador ternario para mostrar contenido dinamicamente en el componente hijo
  const[calificacion, setCalificacion] = useState<number | null>(null);

  return(
    <>
      <label>Ingrese la calificación:</label>
      <input type="number" onChange={e => setCalificacion(Number(e.target.value))}/>

      {calificacion ? <ContenidoDinamicoIf calificacion={calificacion}/> : undefined}

    </>
  );
}

 
