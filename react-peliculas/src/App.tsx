export default function App() {

  const manejarClick = () => alert('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => texto = e.currentTarget.value;

  let texto = '';

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

 
