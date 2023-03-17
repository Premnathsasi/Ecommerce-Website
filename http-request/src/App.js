import React, { useState, useEffect, useCallback } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(true);

  const cancelRetry = () => {
    setRetry(false);
  };
  const retryFetch = () => {
    return new Promise((res) => setTimeout(res, 5000));
  };

  const fetchMovieHandler = useCallback(async function () {
    setisLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

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
    } catch (error) {
      setError(error.message);
      if (retry) retryFetch().then(fetchMovieHandler);
    }
    setisLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);
const addMovieHandler = (movie) =>{
  console.log(movie)
}
  let content = <p>No movies found</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {error && retry && (
          <div>
            <button onClick={cancelRetry}>Cancel Retrying</button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
