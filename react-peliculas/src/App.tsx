import { useState } from "react";

export default function App() {
  //En este caso al escribir se está volviendo a ejecutar la función completa 
  // Cuando yo cambio el estado del componente yo lo estoy volviendo a renderizar (la función completamente) En este caso el useState me permite que aunque se vuelve a ejecutar vamos a mantener el valor en diferentes renderizados
  const [texto, setTexto] = useState("");
  
  let texto2 = '';

  console.log("Renderizando el componente app");

  console.log(texto2);

  const manejarClick = () => alert('click');

  //Al hacer esto se va a volver a renderizar la función y por tanto se va a volver a escribir el valor de texto
  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value) 
  };

  return(
    <>
      <h1 className="rojo" onClick={() => alert('Me has clickeado')}>Hola mundo</h1>
      <button onClick={manejarClick}>Clickeame</button>
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)}/>
      </div>
      <div>
        <p>Haz escrito: {texto}</p>
      </div>
    </>
  );
}

 
