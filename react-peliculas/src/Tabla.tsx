import { useState } from "react";
import type Persona from "./persona.model";
import Fila from "./Fila";

export default function Tabla(){
    const personasFuente: Persona[] = [
        { id: 1, nombre: 'Kevin', departamento: 'Ingeniería'},
        { id: 2, nombre: 'Adriana', departamento: 'Ingeniería'},
        { id: 3, nombre: 'Alejandro', departamento: 'Recursos humanos'},
        { id: 4, nombre: 'Juan', departamento: 'Contabilidad'},
    ];

    const [personas, setPersonas] = useState(personasFuente);

    //La función filter me permite filtrar por lo tanto estoy diciendo que recibiré un objeto de tipo persona de parametro de esta función y estaría seleccionando la que coincide con el id del objeto que recibo
    const removerPersona = (persona: Persona) => {
        setPersonas(
            personas.filter(p => p.id !== persona.id)
        )
    }
    //En este caso se le asigna una llave única a cada fila del arreglo para que react sepa exactamente que fila borrar del arreglo que se recorre para generar la UI
    //Lo correcto es que siempre que trabajemos con un elemento map le coloquemos su key al elemento padre en este caso a la fila 
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map(p => <Fila key={p.id} persona={p} remover={removerPersona}/>)}
            </tbody>
        </table>
    )
}