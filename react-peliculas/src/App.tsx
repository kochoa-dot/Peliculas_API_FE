import { useState } from "react";
import ContenidoDinamico from "./ContenidoDinamico";

export default function App() {

const [mostrar, setMostrar] = useState(false);
//Dependiendo el estado que yo he colocado en el componente padre estamos utilizando un operador ternario para mostrar contenido dinamicamente en el componente hijo
  return(
    <>
      <input type="checkbox" onChange={e => setMostrar(e.target.checked)}/>
      <label>Mostrar el mensaje oculto</label>

      <ContenidoDinamico mostrarContenido={mostrar} />
    </>
  );
}

 
