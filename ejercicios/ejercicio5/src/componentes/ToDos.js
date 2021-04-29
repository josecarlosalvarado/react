import "./TodoList.css";
import { useContext } from "react";
import { GlobalContext } from '../App';


//nos pasamos por props el estado del array y la funcion para posteriormente ser modificada 
export default function ToDos() {

    const { todos, setTodos } = useContext(GlobalContext)

    const removeToDo = (titulo) => {
        setTodos(todos.filter(todo => todo.title !== titulo));

    }
    // creamos una funcion para que todo lo que no sea una boton se tache, esto solucionara que cuando hagamos click al boton de eliminar no
    //funcione
    const toggleCompleted = (e, index) => {
        if (e.target.tagName !== "button") {
            //hacemos una copia del estado que nos llega por los props
            const newTodos = [...todos];
            //aqui cambiamos el valor del completed
            newTodos[index].completed = !newTodos[index].completed;
            //aqui añadimos los cambios a la funcion para que lo modifique
            setTodos(newTodos);
        }
        //alternativa

        //        setTodos(currentTodos => currentTodos.map((todo,idx) => {
        //            return  idx === index ? {...todo, completed: !todo.completed} : todo;
        //        }))

    }

    return (
        <ul className="list-group">
            {todos.map((todo, index) => {
                return (
                    <li className={` d-flex justify-content-between list-group-item ${todo.completed ? "completed" : ""}`}
                        onClick={e => toggleCompleted(e, index)}>
                        <span>{index}: {todo.title} </span>
                        <button className="btn btn-danger" onClick={() => removeToDo(todo.title)}>X</button>
                    </li>
                )
            })}
        </ul>
    )
}
