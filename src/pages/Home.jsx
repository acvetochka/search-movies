import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'helpers/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
}

export default Home;
