import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { fetchMovieSearch } from 'helpers/api';
import SearchBg from 'components/SearchBg/SearchBg';
import NoVideo from 'components/NoVideo/NoVideo';

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

  return (
    <div>
      <SearchBg />
      <Search location={location} onSubmit={handleSubmit} />
      {movies.length === 0 ? (
        <NoVideo />
      ) : (
        // <>
        //   <p>Enter a search query to explore movies.</p>
        //   <motion.div
        //     initial={{ opacity: 0, x: 600, y: 0, overflow: 'hidden' }}
        //     whileInView={{ opacity: 1, x: 600, y: 100 }}
        //     transition={{ duration: 1.15 }}
        //     viewport={{ once: true }}
        //     // , amount: 0.2
        //   >
        //     <img src={spiderman} alt="spiderman" width={500} />
        //   </motion.div>
        // </>
        // <img src={kino} alt="films" width={400} align="center" />
        <MoviesList movies={movies} />
      )}
    </div>
  );
}

export default Movie;
