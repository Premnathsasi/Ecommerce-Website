import React, { useState, useEffect, useCallback } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const fetchMovieHandler = useCallback(async function () {
    setisLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://http-request-30a26-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const newMovies = [];
      for (const key in data) {
        newMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      };

      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
  
    }
    setisLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  async function addMovieHandler(movie) {
    const response =await fetch(
      "https://http-request-30a26-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data)
  }
  const deleteHandler = async (event) => {
    const delID =event.target.id;
    const res = await fetch(`https://http-request-30a26-default-rtdb.firebaseio.com/movies/${delID}.json`, {method: 'DELETE'});
    const data = await res.json();
    if(!data) {
      fetchMovieHandler();
    }
    console.log('deleted')
  }
  let content = <p>No movies found</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} onClick={deleteHandler} id={movies.id} />;
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
