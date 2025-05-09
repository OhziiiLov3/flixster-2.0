import "../styles/MovieCard.css"



const MovieCard = ({movie, onClick}) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500"
    return ( 
    <div className="movie-card" onClick={()=> onClick(movie.id)}>
     <img src={`${imageBaseUrl}${movie.poster_path}`}alt={movie.title} className="movie-poster" />
    <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p> Votes: {movie.vote_count}</p>
        <p className="movie-rating">⭐ {movie.vote_average}</p>
    </div>
    </div> 
    );
}
 
export default MovieCard;