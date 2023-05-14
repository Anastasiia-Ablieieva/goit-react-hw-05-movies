import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
        <h2>Cast</h2> 

        {cast.length ? (
        <ul>
            {cast.map(actor => (
            <li key={actor.id}>
                {actor.profile_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={`${actor.name} profile`}
                />
                ) : (
                <img
                    src={`https://via.placeholder.com/200x300?text=No+Image`}
                    alt={`${actor.name} profile`}
                />
                )}
                <div>
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </div>
            </li>
            ))}
        </ul>
        ) : (
        <p>
            We don't have any information about the cast yet.
        </p>
      )}
    </>
  );
};

export default Cast;