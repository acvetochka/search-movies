import GenresListItem from 'components/GenresListItem/GenresListItem';
import { fetchGenre } from 'helpers/api';
import { useEffect, useState } from 'react';

function GenresList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () =>
      await fetchGenre().then(res => {
        setGenres(res.genres);
      });

    fetchGenres();
  }, []);

  return (
    <ul>
      {genres &&
        genres.map(g => (
          <li key={g.id}>
            <p>{g.name}</p>
            <GenresListItem genre={g} />
          </li>
        ))}
    </ul>
  );
}

export default GenresList;


