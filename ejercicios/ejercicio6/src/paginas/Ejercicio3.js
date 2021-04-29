
import Agenda from "../componentes/Agenda";
import Formulario from "../componentes/Formulario";
import { useState } from "react";


function Ejercicio3() {

const initialContactState = [
    {nombre: "carlos", apellidos: "alvarado", direccion:"calle alvarez", ciudad:"Malaga", codigoPostal:"20465", telefono:"666666666"},
    {nombre: "Jose", apellidos: "gamez", direccion:"calle molina", ciudad:"madrid", codigoPostal:"45678", telefono:"777777777"},
    {nombre: "carlota", apellidos: "martinez", direccion:"calle larios", ciudad:"Malaga", codigoPostal:"87695", telefono:"888888888"}
]

const [contactos, setContactos] = useState(initialContactState)

  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
        <Agenda contacto={contactos} eliminar={setContactos}/>

        <h2 className="my-4">Formulario</h2>
        <Formulario setContactos={setContactos} />
    </div>
  );
}

export default Ejercicio3;