import { useEffect, useState } from "react"
//Algo que logra el useEffect es ejecutar una funcionalidad al cargar el componente por lo tanto al tener el UseEffect le pasamos el efecto que es la función que yo quiero que se ejecute
export default function EjemploUseEffect(){
    
    const [clicks, setClicks] = useState(0);

    const [hora, setHora] = useState(new Date());
    //Colocamos al final un array vacío de dependencias lo que provoca que el efecto solo se ejecute una vez justo después del primer render cuando el componente se monta (dependencia vacía)
    useEffect(() => {
        console.log('el componente ha cargado');

        return() => console.log('Desmontando el componente');
    }, []);
    //También podemos ejecutar una función al momento de desmontar un componente o destruir el componente

    //Es muy importante que a tus useEffect le coloques un listado de dependencias si es algo que se tiene que ejecutar siempre con cada renderizado no importa pero lo normal es que se ejecuten en condiciones específicas
    useEffect(() => {
        console.log('Hook del click');
        document.title = `${clicks} veces`;
    }, [clicks]);
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return() => clearInterval(timerId);
    })

    return(
        <>
        <h2>Ejemplo UseEffect</h2>
        {/* Acá se renderiza el componente cada que clickeamos el botón ya que el efecto se va a ejecutar al cargar el componente y con cada renderizado del componente */}
        <div>
            <button onClick={() => setClicks(clicks + 1)}>Me has clickeado {clicks} veces</button>
        </div>
        <div>
            La hora actual es {hora.toTimeString()}
        </div>
        </>
    )
}