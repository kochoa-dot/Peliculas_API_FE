import type Persona from "./persona.model";
//Lo que hacemos es que para mandar un mensaje del componente hijo al componente padre yo lo que hago es que paso una función desde el componente padre hasta el componente hijo en este caso removerPersona y asi yo paso una referencia de la funcion y cuando yo quiera invocarla utilizo props.remover le paso la persona y eso automaticamente va al componente padre a invocar la función de removerPersona  
export default function Fila(props: FilaProps) {
    return (
        <tr >
            <td>{props.persona.nombre}</td>
            <td>{props.persona.departamento}</td>
            <td>
                <button onClick={() => props.remover(props.persona)}>Remover</button>
            </td>
        </tr>
    )
}

//una interfaz que recibe un objeto de tipo persona y un parametro que recibe una función con tipo de dato una función que recibe como parametro una persona y no retorna nada
interface FilaProps {
    persona: Persona;
    remover: (p: Persona) => void;
}

//Tambien se puede hacer de esta forma 
/* y de esta forma nos ahorramos el props lo que se hace es que se deconstruye el parametro de esta función fila ya que al destructurar podemos destructurar los parametros de la función 
export default function Fila({persona, remover} : FilaProps){
    return(
        <tr>
            <td>{persona.nombre}</td>
            <td>{persona.departamento}</td>
            <td>
                <button onClick={() => remover(persona)}>Remover</button>
            </td>
        </tr>
    )
}
    */