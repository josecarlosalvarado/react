import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './componentes/activeClassName.css';


import Ejercicio1 from './paginas/Ejercicio1';
import Ejercicio2 from './paginas/Ejercicio2';
import Ejercicio3 from './paginas/Ejercicio3';
import Ejercicio4 from './paginas/Ejercicio4';

export const GlobalContext = createContext({});


import './App.css';
import { createContext,useState,useFetch } from 'react';

function App() {


  //ejercicio3
  const initialContactState = [
    {nombre: "carlos", apellidos: "alvarado", direccion:"calle alvarez", ciudad:"Malaga", codigoPostal:"20465", telefono:"666666666"},
    {nombre: "Jose", apellidos: "gamez", direccion:"calle molina", ciudad:"madrid", codigoPostal:"45678", telefono:"777777777"},
    {nombre: "carlota", apellidos: "martinez", direccion:"calle larios", ciudad:"Malaga", codigoPostal:"87695", telefono:"888888888"}
  ]

  const [contactos, setContactos] = useState(initialContactState)
  //fin ejercicio3


  //ejercicio4
  //creamos un estado a la array para cuando sea modificada lo haga de forma automatica
  const [todos, setTodos] = useState([]);

  //añadimos la url a una variable
  const AP_TODOS = "https://jsonplaceholder.typicode.com/todos";

  //hacemos una llamada a la API
  useFetch(AP_TODOS, setTodos);
  //fin de ejercicio4



  return (
    <div className="App">

       <BrowserRouter>


        <nav className="bg-dark container mb-5 mt-3 navbar">
          <NavLink exact  className="mr-5 text-light text-decoration-none" to="/" activeClassName="active">ejercicio1</NavLink>
          <NavLink className="mr-5 text-light text-decoration-none" to="/ejercicio2" activeClassName="active">ejercicio2</NavLink>
          <NavLink className="mr-5 text-light text-decoration-none" to="/ejercicio3" activeClassName="active">ejercicio3</NavLink>
          <NavLink className="text-light text-decoration-none" to="/ejercicio4" activeClassName="active">ejercicio4</NavLink>
        </nav>
        
       <GlobalContext.Provider value={{contactos, setContactos,todos,setTodos }}>
        <Switch>
            <Route  exact path="/" component={Ejercicio1}/>
            <Route path="/Ejercicio2" component={Ejercicio2}/>
            <Route path="/Ejercicio3" component={Ejercicio3}/>
            <Route path="/Ejercicio4" component={Ejercicio4}/>

        </Switch>
       </GlobalContext.Provider>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
