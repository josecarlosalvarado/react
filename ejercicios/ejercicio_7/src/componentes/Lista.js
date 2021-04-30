

export default function lista( { Movies } ) {

    const IMG_URL = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-ES" 

    return (
            <div className="w-50 h-50 container">
                 {Movies.map(pelicula => {
                    return (
                       <div className="card container mb-5 mt-5">
                            <img className="h-50 w-50 m-auto" src={"https://image.tmdb.org/t/p/w500"+ pelicula.poster_path} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{pelicula?.title}</h5>
                                <p className="card-text">{pelicula?.overview}</p>
                                <button className="btn btn-primary">Informacion</button>
                            </div>
                       </div>
                    )
                })}
            </div>
               
           
    )
}
