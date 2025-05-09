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

  const apiKey = import.meta.env.VITE_API_KEY;


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
  

  useEffect(() => {
    fetchMovies(page);
  },[page]);

  const loadMoreMovies = () =>{
    setPage((prev => prev + 1));
  };

  return (
    <div className="App">
        <Header/>
        <h1>Now Playing</h1>
     <MovieList movies={movies}/>
     <LoadMoreButton onClick={loadMoreMovies} hasMore={hasMore}/>
    </div>
  )
}

export default App
