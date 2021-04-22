



export default function Agenda({ contacto }) {


    return (
        <div className="row">
            {contacto.map((contacto,index) => {
                return (
                        <ul className="list-group mb-3 col-6" key={contacto.telefono}>
                            <li className="list-group-item active">contacto {index}</li>
                            <li className="list-group-item">{contacto.nombre}</li>
                            <li className="list-group-item">{contacto.apellidos}</li>
                            <li className="list-group-item">{contacto.telefono}</li>
                            <li className="list-group-item">{contacto.direccion}, {contacto.codigoPostal}, {contacto.ciudad}</li>
                            <li className="list-group-item"><button className=" btn btn-warning">Eliminar</button></li>
                        </ul>
                )
            })}
        </div>
    )

}


// return (
//     <>

//         {
//             props.contacto.map(contacto => {
//                 return <ul className="list-group m-auto w-50">
//                     <h2 style={style}>{props.titulo}</h2>
//                     <li className="list-group-item ">{contacto.nombre}</li>
//                     <li className="list-group-item">{contacto.apellidos}</li>
//                     <li className="list-group-item">{contacto.direccion}</li>
//                     <li className="list-group-item">{contacto.ciudad}</li>
//                     <li className="list-group-item">{contacto.codigoPostal}</li>
//                     <li className="list-group-item">{contacto.telefono}</li>
//                     <li><button className="btn btn-warning list-group-item">Eliminar</button></li>
//                 </ul>

//             })
//         }
//     </>
// )

