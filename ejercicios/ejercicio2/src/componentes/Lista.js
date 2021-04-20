import Tienda from "./Tienda";
export default function Lista() {
    return(
        <div>
            <ol>
                {
                    Tienda.producto.map (producto => {
                        <h1>{producto.category}</h1>;
                        <li>{producto.products}</li>
                    })
                }
            </ol>
        </div>
    )
      
}



