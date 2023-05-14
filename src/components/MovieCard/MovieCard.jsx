import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieCard.module.css'

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
  movie;
  const location = useLocation(); 
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return;
  }

  return (
    <>
      <div className={css.movieCardContainer}>
        <img src={posterUrl} alt={`${title} poster`} />
      
        <div >
          <h2> {title ?? 'Unknown'} ({releaseYear}) </h2>
          <h3 className={css.title}> User Score: </h3>
          <p> {userScore}</p>
          <h3 className={css.title}> Overview: </h3> 
          <p> Overview: {overview} </p> 
          <h3 cclassName={css.title}>Genres</h3>
          {genres && genres.length > 0 && (
          <p>{genres.map(genre => genre.name).join(', ')} </p>
          )}
        </div>
      </div>

      <div className={css.movieCardInform}>
        <h3>Additional information</h3>
        <ul lassName={css.movieCardInformList}>
          <li>
            <NavLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: location?.state?.from ?? '/' }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;