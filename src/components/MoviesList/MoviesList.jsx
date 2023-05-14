import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ trendingMovies }) => {
    return (
      <div>
           <h2>Trending today</h2>
            <ul>
            {trendingMovies.map(trendingMovie => (
                    <li key={trendingMovie.id}>
                        <Link to={`/movies/${trendingMovie.id}`}>
                            {trendingMovie.title}
                        </Link> 
                    </li>
                ))} 
            </ul>
      </div>
 
    );   
};

MoviesList.propTypes = {
    trendingMovies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default MoviesList;

