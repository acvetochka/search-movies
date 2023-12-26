import { Image, ImageSmall, Title, Wrapper } from './BestMovies.styles';

function BestMovie({ movies }) {
  //   const movie = movies[0];
  // const allMovies = movies.filter(m => m.title);
  //   if (!movies) {
  //     return;
  //     }
  let bestMovies;
  if (movies) {
    const bestThree = movies.slice(0, 3);
    bestMovies = [bestThree[1], bestThree[0], bestThree[2]];
    console.log(bestMovies);
  }

  //   console.log(allMovies);
  return (
    bestMovies !== undefined && (
      <Wrapper>
        {bestMovies.map((movie, id) => (
          <li key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              width={id !== 1 && '200px'}
            />
          </li>
        ))}
        {/* <li>
          <ImageSmall
            src={`https://image.tmdb.org/t/p/w300/${movies[1].poster_path}`}
            alt={movies[1].title}
            width={`80%`}
          />
        </li>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movies[0].poster_path}`}
          alt={movies[0].title}
        />
        <ImageSmall
          src={`https://image.tmdb.org/t/p/w300/${movies[2].poster_path}`}
          alt={movies[2].title}
          width={`80%`}
        /> */}
      </Wrapper>
    )
  );
}

export default BestMovie;
