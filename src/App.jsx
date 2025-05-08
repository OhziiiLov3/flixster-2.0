import { useState, useEffect } from 'react'
import './App.css'

 // After
const App = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("API Key:", apiKey);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const data = await res.json();
        console.log(data)
        setMovies(data);
      } catch (error) {
        console.log("Failed to fetch movies", error)
      }
    }
    fetchMovies();
  },[apiKey])




  return (
    <div className="App">
      <h1>Movies</h1>

    </div>
  )
}

export default App
