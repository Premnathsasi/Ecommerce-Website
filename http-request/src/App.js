import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  async function fetchMovieHandler() {
    
    setisLoading(true)
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedData = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedData);
    setisLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movies.length >0 && <MoviesList movies={movies} /> }
       {!isLoading && movies.length === 0 && <p>No movies found!</p>}
       {isLoading && <p>Loading...</p>}

      </section>
    </React.Fragment>
  );
}

export default App;