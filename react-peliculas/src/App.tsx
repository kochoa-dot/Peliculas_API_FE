export default function App() {

  const manejarClick = () => alert('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => texto = e.currentTarget.value;

  let texto = '';

  return(
    <>
    {/* Eventos en react por ejemplo cuando yo de click sobre ese elemento  */}
      <h1 className="rojo" onClick={() => alert('Me has clickeado')}>Hola mundo</h1>
      <button onClick={manejarClick}>Clickeame</button>
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)}/> {/*Cuando yo presiono una tecla y la dejo de presionar */}
      </div>
      <div>
        <p>Haz escrito: {texto}</p>
      </div>
    </>
  );
}

 
