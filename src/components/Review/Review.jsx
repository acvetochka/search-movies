import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'helpers/api';
import { ReviewList, ReviewItem, Name, Comment } from './Review.styled';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    fetchReview(movieId)
      .then(res => setReviews([...res]))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ReviewList>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <Name>Author: {author}</Name>
              <Comment>{content}</Comment>
            </ReviewItem>
          ))}
        {/* : (
          <li>Oops, no one has left anything here yet</li>
        )} */}
      </ReviewList>
    </div>
  );
}

export default Review;
