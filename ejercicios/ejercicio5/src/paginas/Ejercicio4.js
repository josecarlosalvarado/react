import ToDos from '../componentes/ToDos';
import Input from '../componentes/Input';
import { useState  } from 'react';
import { useFetch } from "../hooks/useFetch";


function Ejercicio4() {
  return (
    <div className="container">
      <h2>Todo List</h2>
      <Input/>
      <ToDos/>
    </div>
  );
}

export default Ejercicio4;
