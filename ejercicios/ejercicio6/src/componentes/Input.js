import { useState } from "react";

export default function Input({ setTodos }) {

    const [newTodo, setNewTodo] = useState("");

    function handSubmit(e) {
        e.preventDefault();

        //añadimos los cambios a la copia y se la pasamos a la funcion para que cambie el estado del array
        setTodos(currentTodos => [{ title: newTodo, completed: false }, ...currentTodos]);

        setNewTodo("");
    }

    return (
        <form onSubmit={handSubmit} className="my-4 mx-4">
            <input
                type="text"
                placeholder="introduce un nuevo to do"
                className="form-control"
                //le pasamos a la funcion por parametros el valor del input
                onChange={e => setNewTodo(e.target.value)} value={newTodo}
            />
        </form>
    )
}

