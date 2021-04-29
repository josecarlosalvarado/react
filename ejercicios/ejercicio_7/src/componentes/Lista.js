

export default function lista( { Movies } ) {

    const IMG_URL = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-ES" 

    return (
            <div className="">
                 {Movies.map(pelicula => {
                    return (
                       <div className="card container mb-5 mt-5">
                            <img src={`https://api.themoviedb.org/3/movie/${pelicula?.poster_path}/images?api_key=<<api_key>>&language=en-ES`} alt=""/>
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
