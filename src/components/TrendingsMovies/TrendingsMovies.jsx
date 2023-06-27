import { Link } from 'react-router-dom';

function TrendingMovies({ movies }) {
  return (
    <ul>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <Link key={id} to={`/movies/${id}`}>
            {name || title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TrendingMovies;
