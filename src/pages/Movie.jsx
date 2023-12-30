import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { fetchMovieSearch } from 'helpers/api';
import SearchBg from 'components/SearchBg/SearchBg';
import NoVideo from 'components/NoVideo/NoVideo';
import GenresList from 'components/GenresList/GenresList';

// import kino from '../images/kino.png';
// import films from '../images/films.webp';

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
    fetchMovieSearch(query).then(res => {
      const allMovies = res.filter(m => m.title);
      setMovies([...allMovies]);
    });
    // console.log(movies);
  }, [query]);

  // useEffect(() => {
  //   fetchGenre().then(res => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <div>
      <SearchBg />
      <Search location={location} onSubmit={handleSubmit} />
      <GenresList />
      {movies.length === 0 ? <NoVideo /> : <MoviesList movies={movies} />}
    </div>
  );
}

export default Movie;
