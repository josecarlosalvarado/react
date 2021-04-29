

export default function lista( { Movie } ) {
    return (
            <ul>
                {Movie.map(pelicula => {
                    return (
                        <li>{pelicula.results.title}</li>
                    )
                })}
            </ul>
    )
}
