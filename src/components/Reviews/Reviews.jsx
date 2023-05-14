import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]); 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length ? (
        <ul className="reviews-container">
          {reviews.map(review => (
            <li className="review-card" key={review.id}>
              <p> Author: {review.author} </p>
              <p> {review.content} </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          We don't have any reviews for this movie yet.
        </p>
      )}
    </>
  );
};
export default Reviews;