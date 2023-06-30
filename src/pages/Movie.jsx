import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { fetchMovieSearch } from 'helpers/api';

function Movie() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) return;
    fetchMovieSearch(query).then(res => setMovies([...res]));
  }, [query]);

  return (
    <>
      <Search location={location} onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}

export default Movie;
