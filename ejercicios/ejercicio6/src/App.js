import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './componentes/activeClassName.css';


import Ejercicio1 from './paginas/Ejercicio1';
import Ejercicio2 from './paginas/Ejercicio2';
import Ejercicio3 from './paginas/Ejercicio3';
import Ejercicio4 from './paginas/Ejercicio4';


import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>


        <nav className="bg-dark container mb-5 mt-3 navbar">
          <NavLink exact  className="mr-5 text-light text-decoration-none" to="/" activeClassName="active">ejercicio1</NavLink>
          <NavLink className="mr-5 text-light text-decoration-none" to="/ejercicio2" activeClassName="active">ejercicio2</NavLink>
          <NavLink className="mr-5 text-light text-decoration-none" to="/ejercicio3" activeClassName="active">ejercicio3</NavLink>
          <NavLink className="text-light text-decoration-none" to="/ejercicio4" activeClassName="active">ejercicio4</NavLink>
        </nav>
        

       <Switch>
          <Route  exact path="/" component={Ejercicio1}/>
          <Route path="/Ejercicio2" component={Ejercicio2}/>
          <Route path="/Ejercicio3" component={Ejercicio3}/>
          <Route path="/Ejercicio4" component={Ejercicio4}/>

       </Switch>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
