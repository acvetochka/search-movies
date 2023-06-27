import TrendingMovies from 'components/TrendingsMovies/TrendingsMovies';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'helpers/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      return await fetchTrendingMovies();
    };
    fetch().then(res => setMovies(movies => res));
  }, []);

  return <TrendingMovies movies={movies} />;
}

export default Home;
