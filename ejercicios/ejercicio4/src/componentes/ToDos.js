// import { useState } from 'react';
export default function ToDos({ ToDo }) {

// function completedtoDo(id, ToDo) {

// //     // const [Completed, setCompleted] = useState(false);

// //     // const style = {
// //     //     backgroundColor: "red",
// //     //     "text-decoration": "line-through"
// //     // }


// //     return (e) => {
// //         return 
// //     }
// }

    return (
        <div>
            {ToDo.map((toDo,index) => {
                return (
                    <ul className="list-group">
                        <li className="list-group-item">{toDo.userId}:{toDo.title} <button className="btn btn-Danger">X</button></li>
                        

                    </ul>
                )
            })}

        </div>
    )
}
