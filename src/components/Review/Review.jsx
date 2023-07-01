import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from 'helpers/api';
import { ReviewList, ReviewItem, Name, Comment } from './Review.styled';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchAddition(movieId, 'reviews')
      .then(res => {
        const reviewArr = res.results;
        setReviews([...reviewArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ReviewList>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <Name>Author: {author}</Name>
              <Comment>{content}</Comment>
            </ReviewItem>
          ))
        ) : (
          <div>Wie don't have any reviews for this movie</div>
        )}
      </ReviewList>
    </div>
  );
}

export default Review;
