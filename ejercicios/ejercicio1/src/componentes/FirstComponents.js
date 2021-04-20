export default function Card(props) {
    return (
      <div className="card w-50 m-auto ">
        <img src={props.imagen} className="card-img-top" alt="header"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.parrafo}</p>
            <a href={props.href} className="btn btn-primary">{props.textoBoton}</a>
          </div>
      </div>
    )
  }

