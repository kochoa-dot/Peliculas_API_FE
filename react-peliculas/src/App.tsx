import React from "react";

export default function App() {
  return(
    <React.Fragment>
      {/* Si no quiero tener acá el div puedo utilizar un fragmento es como un placeholder algo que yo puedo colocar solo para satisfacer el echo de que necesito un solo elemento padre por jsx sin que ese elemento padre se traduzca a html*/}
    <h1>Hola mundo</h1>
    <h3>Esta es mi pagina</h3>
    </React.Fragment>
    // Es simplemente una forma de colocar un elemento padre que me permita transpilar esto sin problema sin embargo no tiene representación en html. También podemos representarlo de esta forma <></>
  );
}

 
