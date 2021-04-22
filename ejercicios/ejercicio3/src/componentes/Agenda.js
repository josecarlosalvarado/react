export default function Agenda(props) {

    const style = {
        color: 'white',
        backgroundColor: 'blue',
    }

    return(
        <>
            
                {
                    props.contacto.map(contacto => {
                        return <ul className="list-group m-auto w-50">
                                    <h2 style={style}>{props.titulo}</h2>
                                    <li className="list-group-item ">{contacto.nombre}</li>
                                    <li className="list-group-item">{contacto.apellidos}</li>
                                    <li className="list-group-item">{contacto.direccion}</li>
                                    <li className="list-group-item">{contacto.ciudad}</li>
                                    <li className="list-group-item">{contacto.codigoPostal}</li>
                                    <li className="list-group-item">{contacto.telefono}</li>
                               </ul>
                        
                    })
                }
        </>
    )
}




// <li className="list-group-item m-auto">{contacto.nombre} {contacto.apellidos} {contacto.direccion} {contacto.ciudad}
//                                 {contacto.codigopostal} {contacto.telefono}
//                                 </li> 