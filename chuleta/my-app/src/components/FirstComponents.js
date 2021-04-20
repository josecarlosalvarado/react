import { Fragment } from "react";
export default function FirstComponents(props) { // siempre se recibe los  props como objetos 
    console.log(props, typeof props);
    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptas!</p>
        </Fragment>
    )
}
// solo se puede un export default pornarchivo 

function SecondComponents() {
    return (
        <Fragment>
            <h1>soy otro componente</h1>
        </Fragment>
    )
}

export {SecondComponents}