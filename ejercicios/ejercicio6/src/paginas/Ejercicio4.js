import ToDos from '../componentes/ToDos';
import Input from '../componentes/Input';
import { useState  } from 'react';
import { useFetch } from "../hooks/useFetch";


function Ejercicio4() {

  //creamos un estado a la array para cuando sea modificada lo haga de forma automatica
  const [todos, setTodos] = useState([]);

  //añadimos la url a una variable
  const AP_TODOS = "https://jsonplaceholder.typicode.com/todos";

  //hacemos una llamada a la API
  useFetch(AP_TODOS, setTodos);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <Input setTodos={setTodos} />
      <ToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Ejercicio4;
