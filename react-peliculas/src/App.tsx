export default function App() {

  const subtitulo = "Esta es una variable";

  const duplicar = (valor: number) => valor*2;

  const imageURL = '/vite.svg';

  return(
    <>
      <h1>Hola mundo</h1>
      <h3>{subtitulo.toUpperCase()}</h3> 
      {/* expresión de JSX */}
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img src={imageURL} alt="logo vite"></img>
      {/* podemos usar expresiones de jsx para mostrar el valor de una variable al usuario, mostrar el resultado de una función, o para asignarle el valor a un atributo de un elemento html */}
    </>
  );
}

 
