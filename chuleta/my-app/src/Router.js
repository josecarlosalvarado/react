import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Index from './paginas/Index';
import DashBoard from './paginas/DashBoard';
import Record from './paginas/Record';
import Error from './paginas/Error';


export default function Router() {
    return (
        <div>
            <BrowserRouter>

                <NavLink className="my-1 mr-5 btn btn-primary w-25 ml-5" to="/">Inicio</NavLink>
                <NavLink className="my-1 mr-5 btn btn-warning w-25" to="/dashboard">dashboard</NavLink>
                <NavLink className="my-1 mr-5 btn btn-danger  w-25" to="/record/5">Hola paco</NavLink>

                <Switch>  
                    <Route exact path="/" component={Index}/>
                    <Route path="/dashboard" component={DashBoard}/>
                    <Route path="/record/:user" component={Record}/>

                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
