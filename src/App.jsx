import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import LoadMoreButton from "./components/LoadMoreButton";
import MovieModal from "./components/MovieModal";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [mode, setMode] = useState("now_playing");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  //  fetch all movies(20) and load more
  const fetchMovies = async (page = 1) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`
      );
      const data = await res.json();

      // if no movies, stop loading
      if (data.results.length === 0 || page >= data.total_pages) {
        setHasMore(false);
      }
      // prevents deduplicates 
      setMovies((prev) => {
        const combined = [...prev, ...data.results];
        const uniqueMovies = [];
      
        for (let movie of combined) {
          if (!uniqueMovies.find((m) => m.id === movie.id)) {
            uniqueMovies.push(movie);
          }
        }
      
        return uniqueMovies;
      });
    } catch (error) {
      console.log("Failed to fetch movies", error);
    }
  };

  // Fetch Search Results
  const fetchSearchResults = async (query) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setMovies(data.results);
      setHasMore(false); // No "Load More" in search mode
    } catch (error) {
      console.log("Failed to fetch search results", error);
    }
  };

  const handleSearch = (query) => {
    setMode("search");
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  const handleNowPlaying = () => {
    setMode("now_playing");
  };

  useEffect(() => {
    if (mode === "now_playing") {
      setMovies([]);
      setPage(1);
      setHasMore(true);
    }
  }, [mode]);
  

  useEffect(() => {
    if (mode === "now_playing") {
      fetchMovies(page);
    }
  }, [page]);

  const loadMoreMovies = () => {
    setPage((prev) => prev + 1);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setMode("now_playing");
    setPage(1);
    setMovies([]);
    setHasMore(true);
  };

  // fetch movie details and display in modal
  // const handleMovieClick = async (movieId) => {
  //   console.log("Click")
  //   try {
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  //     );
  //     const data = await res.json();
  //     setSelectedMovie(data);
  //   } catch (err) {
  //     console.error("Failed to fetch movie details", err);
  //   }
  // };



  const handleMovieClick = async (movieId) => {
    try {
      const [detailsRes, videoRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`),
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
      ]);
  
      const details = await detailsRes.json();
      const videos = await videoRes.json();
  
      const trailer = videos.results.find(
        (v) => v.site === "YouTube" && v.type === "Trailer"
      );
  
      details.trailerKey = trailer ? trailer.key : null;
      setSelectedMovie(details);
    } catch (err) {
      console.error("Failed to fetch movie details or trailer", err);
    }
  };

  // sort movies
  const handleSort = (criteria) => {
    const sortFunctions = {
      "title-asc": (a, b) => a.title.localeCompare(b.title),
      "release-date": (a, b) => new Date(b.release_date) - new Date(a.release_date),
      "rating-desc": (a, b) => b.vote_average - a.vote_average,
    };
  
    const sortFn = sortFunctions[criteria];
    if (sortFn) {
      const sortedMovies = [...movies].sort(sortFn);
      setMovies(sortedMovies);
    }
  };
  
  
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} onClear={handleClearSearch} onSort={handleSort}/>
      {/* Toogle Now Playing or Search */}
      <div className="header-controls">
        <button onClick={handleNowPlaying} disabled={mode === "now_playing"}>
          Now Playing
        </button>
      </div>
      <h1 className="app-title">
        {mode === "search"
          ? `Search Results for "${searchQuery}"`
          : "Now Playing"}
      </h1>
      <MovieList movies={movies} onMovieClick={handleMovieClick}/>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
      <LoadMoreButton onClick={loadMoreMovies} hasMore={hasMore} />
      <Footer/>
    </div>
  );
};

export default App;
