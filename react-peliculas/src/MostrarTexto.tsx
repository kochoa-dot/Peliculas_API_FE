export default function MostrarTexto(props: MostrarTextoProps){
    //Los componentes pueden tener parametros
    return(
        <div>
            <p>Haz escrito: {props.texto}</p>
        </div>
    )
}

//Props es el estandar en React para nombrar los parametros de un componente 
interface MostrarTextoProps{
    texto: string;
}