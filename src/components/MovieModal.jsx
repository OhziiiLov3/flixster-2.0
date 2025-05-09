import { FiX } from "react-icons/fi";
import "../styles/MovieModal.css"

const MovieModal = ({movie, onClose}) => {
    if (!movie) return null;
    return ( 
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
          <FiX size={24} />
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title}
            className="modal-backdrop"
          />
          <div className="modal-details">
            <h2>{movie.title}</h2>
            <p><strong>Runtime:</strong> {movie.runtime} min</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
            </p>
            
               {/* Add Trailer */}
          {movie.trailerKey && (
            <div className="modal-trailer">
              <iframe
                src={`https://www.youtube.com/embed/${movie.trailerKey}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      </div>
     );
}
 
export default MovieModal;