export default function ProyectarContenido2(props: ProyectarContenido2Props){
    //Podemos pasar contenido también a traves de atributos
    return(
        <>
            {props.parteSuperior}
            <hr/>
            {props.parteIntermedia}
            <hr/>
            {props.parteInferior}
        </>
    )
}

interface ProyectarContenido2Props{
    parteSuperior: React.ReactNode;
    parteIntermedia: React.ReactNode;
    parteInferior: React.ReactNode;
}