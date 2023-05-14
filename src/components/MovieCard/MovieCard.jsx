import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <img src={posterUrl} alt={`${title} poster`} />

        <div>
          <h2> {title ?? 'Unknown'} ({releaseYear}) </h2>
          <p>User Score: {userScore}</p>
          <div>
            <p> Overview: </p> {overview}
          </div>

          {genres && genres.length > 0 && (
            <div>
              <p>Genres:</p>
              {genres.map(genre => genre.name).join(', ')}
            </div>
          )}
        </div>

        <div>
            <p>Additional information</p>

        <ul>
          <li>
            <NavLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
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