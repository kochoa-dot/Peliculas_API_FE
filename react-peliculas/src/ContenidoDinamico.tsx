//Es para mostrar contenido de una pieza u otra dependiendo de una expresión booleana

export default function ContenidoDinamico(props: ContenidoDinamicoProps){

    return(
        <div>
            {props.mostrarContenido ? <p>Mostrando el mensaje secreto</p> : <p>Ocultando el mensaje</p>}
        </div>
    )

}

interface ContenidoDinamicoProps{
    mostrarContenido: boolean;
}