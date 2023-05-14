import { Suspense, useEffect, useState } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { fetchMovieById } from '../../services/api';
import MovieCard from "components/MovieCard/MovieCard";
import css from './MovieDitails.module.css';

const MovieDitails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        const fetchSelectedMovie = async movieId => {
            try {
                const movieData = await fetchMovieById(movieId);
                setSelectedMovie(movieData);
            } catch (error) {
                console.log(error)
            }
        };
        fetchSelectedMovie(movieId);
    }, [movieId])

    return (
        <>
            <Link className={css.movieDetBtn} to={location?.state?.from ?? '/'}> Go back </Link>
            <MovieCard movie={selectedMovie} />
            <Suspense>
                <Outlet />
            </Suspense> 
        </>
    )
}

export default MovieDitails;