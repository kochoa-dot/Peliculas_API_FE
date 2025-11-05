import Cabecera from "./cabecera";
import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";

export default function App() {
//Tenemos libertad en como pasar contenido a un componente ya sea utilizando children como el ejemplo 1 o simplemente utilizando atributos normales como en el ejemplo 2
  return(
    <>
      <h2>Ejemplo 1</h2>

      <ProyectarContenido>
        <>
          <button onClick={() => alert("He sido clickeado")}>Clickeame</button>
          <h4>Este es un h4</h4>
        </>
      </ProyectarContenido>

      <h2>Ejemplo 2</h2>

      <ProyectarContenido2 
        parteSuperior={<button>Boton superior</button>}
        parteIntermedia={<>
        <Cabecera/>
        <p>Lo que yo quiera</p>
        </>}
        parteInferior={<> </>}
      />
    </>
  );
}

 
