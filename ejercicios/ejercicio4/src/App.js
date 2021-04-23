import ToDos from './componentes/ToDos';
import Input from './componentes/Input';
import { usetate } from 'react';
import './App.css';

function App() {

  const arrayToDos = [
    {userId: 1, title: "Hacer Deberes", completed: false},
    {userId: 2, title: "Hacer Deporte", completed: false},
    {userId: 3, title: "Dormir", completed: false}  
  ]

  const [ToDosArray, setToDosArray] = useState(arrayToDos);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <Input/>
      <ToDos ToDo={arrayToDos}/>
    </div>
  );
}

export default App;
