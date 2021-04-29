export default function Card({  imagen, title, textoBoton, parrafo, href }) {
    return (
        <div className="container">
            <div className="card w-50 m-auto" >
                    <img className="card-img-top" src={imagen} alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{parrafo}</p>
                    <a href={href} className="btn btn-primary">{textoBoton}</a>
                </div>
            </div>
        </div>
    )
}