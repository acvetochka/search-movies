import { useState } from 'react';
import { Container } from './MovieDescription.styled';
// import error from './images/error.jpg';

// import { fetchImages } from 'helpers/api';

function MovieDescription({ details, id }) {
  const [genresStr, setGernesStr] = useState('');
  const { title, release_date, vote_average, overview, genres, poster_path } =
    details;
  // console.log(genres);
  const date = new Date(release_date).getFullYear();
  // const genresArr = [];
  let genreString = '';
  setTimeout(() => {
    // [...genres].forEach(genre => genresArr.push(genre.name));
    if (genres) {
      for (const genre of genres) {
        // console.log(genre.name);
        genreString += genre.name + '  ';
        // console.log(genreString);
        // setGernesStr(genre.name);
        // genresArr.push(genre.name);
      }
      setGernesStr(genreString);
    }
    // setGernesStr(genresArr.join(' '));
  }, 200);

  // fetchImages(id).then(res => console.log(res));

  return (
    <>
      <Container>
        {poster_path ? (
          <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt="" />
        ) : (
          // <img src={error} alt="заглушка" />
          <p>Not found</p>
        )}
        {/* <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt="" /> */}
        <div>
          <h2>
            {title} ({date})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresStr}</p>
        </div>
      </Container>
      <div>
        <h3>Additional information</h3>
      </div>
    </>
  );
}

export default MovieDescription;
