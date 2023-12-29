import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'helpers/api';
// import BestMovie from 'components/BestMovies/BestMovies';
import Background from 'components/Background/Background';
import Title from 'components/Title/Title';

function Home() {
  const [movies, setMovies] = useState([]);
  const [bestMovie, setBestMovie] = useState({});

  // const movie = movies[0];

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      console.log(res);
      const allMovies = res.filter(m => m.title);
      setMovies(allMovies);
      setBestMovie(allMovies[0]);
    });
  }, []);

  useEffect(() => {
    setMovies(movies);
  }, [movies]);

  return (
    // movies && (
    <>
      {bestMovie && <Background movie={bestMovie} />}
      {/* <BestMovie movies={movies} /> */}
      <Title>Trending today</Title>

      <MoviesList movies={movies} />
      {/* </Background> */}
    </>
  );
  // );
}

export default Home;
