import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import MovieList from './components/MovieList';
import LoadMoreButton from './components/LoadMoreButton';

 // After
const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [mode, setMode] = useState("now_playing");
  const [searchQuery, setSearchQuery] = useState("");


  const apiKey = import.meta.env.VITE_API_KEY;

 
//  fetch all movies(20) and load more
  const fetchMovies = async (page = 1) => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`);
      const data = await res.json();

      // if no movies, stop loading
      if(data.results.length === 0 || page >= data.total_pages){
        setHasMore(false);
      }
  
      setMovies((prev)=> [...prev, ...data.results]);
    } catch (error) {
      console.log("Failed to fetch movies", error)
    }
  }

    // Fetch Search Results
    const fetchSearchResults = async (query) => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
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
    setPage(1);
    setMovies([]);
    setHasMore(true);
  };

  useEffect(() => {
    fetchMovies(page);
  },[page]);

  const loadMoreMovies = () =>{
    setPage((prev => prev + 1));
  };

  return (
    <div className="App">
        <Header onSearch={handleSearch}/>
        {/* Toogle Now Playing or Search */}
        <div className="header-controls">
        <button onClick={handleNowPlaying} disabled={mode === "now_playing"}>
          Now Playing
        </button>
      </div>
      <h1 className='app-title'>{mode === "search" ? `Search Results for "${searchQuery}"` : "Now Playing"}</h1>
     <MovieList movies={movies}/>
     <LoadMoreButton onClick={loadMoreMovies} hasMore={hasMore}/>
    </div>
  )
}

export default App
