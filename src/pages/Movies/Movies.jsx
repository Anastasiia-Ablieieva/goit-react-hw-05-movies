import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link} from 'react-router-dom';
import { fetchMovieByName } from "../../services/api";
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.error('No movies found');
          setMovies([]); 
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

      getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
    return (
        <div>
            <SearchMovies onSubmit={handleSubmit}/>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.title}
                        </Link>
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default Movies;

