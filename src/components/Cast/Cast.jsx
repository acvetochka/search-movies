import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from 'helpers/api';
import photo from './photo.jpg';
import { CastList, CastItem, CastText, Name } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    fetchAddition(movieId, 'credits')
      .then(res => {
        const castArr = res.cast;
        setCast([...castArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w300' + profile_path
                    : photo
                }
                width="80"
                height="120"
                alt={name}
              />
              <CastText>
                <Name>{name}</Name>
                {character && <p>{character}</p>}
              </CastText>
            </CastItem>
          ))}
      </CastList>
    </div>
  );
}

export default Cast;
