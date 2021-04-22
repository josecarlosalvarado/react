import { useState } from "react";


export default function Formulario({ setContactos }) {

    // const [nombre, setNombre] = useState("");
    // const [apellidos, setApellidos] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [direccion, setDireccion] = useState("");
    // const [codigoPostal, setCodigoPostal] = useState("");
    // const [ciudad, setCiudad] = useState("");

    // function handleName(e) {
    //     setNombre(e.target.value);
    // };
    // function handleApellidos(e) {
    //     setApellidos(e.target.value);
    // };
    // function handletelefono(e) {
    //     setTelefono(e.target.value);
    // };
    // function handleDireccion(e) {
    //     setDireccion(e.target.value);
    // };
    // function handleCodigoPostal(e) {
    //     setCodigoPostal(e.target.value);
    // };
    // function handleCiudad(e) {
    //     setCiudad(e.target.value);
    // };


    const initialState = {
        nombre:"",
        apellidos:"",
        direccion:"",
        codigoPostal:"",
        telefono:"",
        ciudad:"",

    }


    const [form, setForm] = useState(initialState)


    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;

        setForm({ ...form, ...{[inputName]: newValue} })
    }




    function submit(e) {
        // e.preventDefault();

        // const nuevoContacto = { nombre, apellidos, direccion, codigoPostal, ciudad, telefono };


        // //el currentcontact  recibe la array anterior y la modifica con los nuevos valores
        // setContactos(currentContact => [...currentContact, nuevoContacto]);

        // e.target.reset();

        // const nuevoContacto = {
        //     nombre: nombre,
        //     apellidos: apellidos,
        //     direccion: direccion,
        //     codigoPostal: codigoPostal,
        //     ciudad: ciudad,
        //     telefono: telefono,
        // };
    }

    return (
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text"  value={form.nombre} id="nombre" onChange={handleInput} placeholder="introduce el nombre" />

            <input className="form-control mb-3" type="text"  value={form.apellidos} id="apellidos" onChange={handleInput} placeholder="introduce los apellidos" />

            <input className="form-control mb-3" type="text"  value={form.telefono} id="telefono" onChange={handleInput} placeholder="introduce el telefono" />

            <input className="form-control mb-3" type="text"  value={form.direccion} id="direccion" onChange={handleInput} placeholder="introduce la direccion" />

            <input className="form-control mb-3" type="text"  value={form.codigoPostal} id="codigpPostal" onChange={handleInput} placeholder="introduce el codigo postal" />

            <input className="form-control mb-3" type="text"  value={form.ciudad} id="ciudad" onChange={handleInput} placeholder="introduce la ciudad" />

            <input type="submit" className="btn btn-warning" value="Registrar" />
        </form>

    )
}

