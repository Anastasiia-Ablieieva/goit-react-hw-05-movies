import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import css from './Reviews.module.css';

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
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li className="review-card" key={review.id}>
              <h3> Author: {review.author} </h3>
              <p className={css.review}> {review.content} </p>
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