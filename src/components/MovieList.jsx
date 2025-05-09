import MovieCard from "./MovieCard";
import "../styles/MovieList.css";




const MovieList = ({movies, onMovieClick}) => {
    return (   
        <div className="movie-list">
            {movies.map((movie, idx)=>(
                <MovieCard key={idx} movie={movie} onClick={onMovieClick}/>
            ))}
        </div>
     );
}
 
export default MovieList;