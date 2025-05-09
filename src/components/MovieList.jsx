import MovieCard from "./MovieCard";
import "../styles/MovieList.css";




const MovieList = ({movies}) => {
    return (   
        <div className="movie-list">
            {movies.map((movie, idx)=>(
                <MovieCard key={idx} movie={movie} />
            ))}
        </div>
     );
}
 
export default MovieList;