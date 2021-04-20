

export default function SegundoComponente() {
  const personas = [
      {nombre: "antonio"}, {apellidos: "sanchez"},
      {nombre: "agustin"}, {apellidos: "alvarado"},
  ]
    return (
        personas.map( persona => {
            return (
                <div>
                    <ol>
                        <li>{persona.nombre}{persona.apellidos}</li>
                    </ol>
                </div>
            )
        })
    )
}