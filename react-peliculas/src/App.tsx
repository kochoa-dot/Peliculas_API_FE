import styles from './app.module.css'//se puede importar el modulo de estilos para no interferir con otros que se puedan encontrar en la aplicacion

export default function App() {

  const subtitulo = "Esta es una variable";

  const duplicar = (valor: number) => valor*2;

  const imageURL = '/vite.svg';

  const cuadradoRojo = {
    backgroundColor: 'red',
    width: '50px',
    height: '50px',
    marginLeft: '1rem'
  };

  return(
    <>
      <h1 className="rojo">Hola mundo</h1>{/* Yo puedo asignar valores de css al codigo de react a través de el atributo className*/}
      <div style={cuadradoRojo}></div> {/* También puedo hacerlo a traves de style con una expresión */}
      <h3 className={styles.color}>{subtitulo.toUpperCase()}</h3> 
      <h4>El doble de 3 es {duplicar(3)}</h4> { /* ya que aplicamos un estilo al tipo de componente se le colocarán las propiedades a cualquiera de ese tipo que es lo que impedimos con los módulos */}
      <img src={imageURL} alt="logo vite"></img>
    </>
  );
}

 
