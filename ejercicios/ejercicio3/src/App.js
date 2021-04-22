import './App.css';
import Agenda from "./componentes/Agenda";
// import Formulario from "./componentes/Formulario";


function App() {

const contactos = {
  contacto1: [
    {nombre: "carlos", apellidos: "alvarado", direccion:"calle alvarez", ciudad:"Malaga", codigoPostal:"20465", telefono:"666666666"}
  ],
  contacto2: [
    {nombre: "Jose", apellidos: "gamez", direccion:"calle molina", ciudad:"madrid", codigoPostal:"45678", telefono:"777777777"}
  ],
  contacto3: [
    {nombre: "carlota", apellidos: "martinez", direccion:"calle larios", ciudad:"Malaga", codigoPostal:"87695", telefono:"888888888"}
  ]
}

  return (
    <div className="App">
        <Agenda contacto={contactos.contacto1} titulo={"contacto 1"}/>
        <Agenda contacto={contactos.contacto2} titulo={"contacto 2"}/>
        <Agenda contacto={contactos.contacto3} titulo={"contacto 3"}/>

        {/* <Formulario /> */}
    </div>
  );
}

export default App;
