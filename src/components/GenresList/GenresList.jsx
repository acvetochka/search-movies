import GenresListItem from 'components/GenresListItem/GenresListItem';
import { fetchGenre } from 'helpers/api';
import { useEffect, useState } from 'react';

function GenresList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenre().then(res => {
      //   console.log(res.genres);
      setGenres(res.genres);
    });
  }, []);

  return (
    <ul>
      {genres &&
        genres.map(g => (
          <li key={g.id}>
            <p>{g.name}</p>
            <GenresListItem genre={g.name} />
          </li>
        ))}
    </ul>
  );
}

export default GenresList;
