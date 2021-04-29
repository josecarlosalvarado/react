

export default function Lista( { categoria, productos }) {

    return (
        <div>
            <h2 className="bg-dark text-light">{categoria}</h2>
            <ul className="list-group">
                {
                    productos.map(producto => {
                        return (
                            <li className="list-group-item bg-light ">
                                {producto.nombre}
                                {producto.marca}, 
                                {producto.modelo}
                                Precio: 
                                {producto.precio},
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


