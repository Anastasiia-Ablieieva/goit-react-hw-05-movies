
import { useEffect, useState } from "react";
import { fetchTrendMovies } from "../../services/api";
import MovieList from "components/MoviesList/MoviesList";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
          try {
            const { results } = await fetchTrendMovies();
            setTrendingMovies(results);
          } catch (error) {
            console.log(error.message);
          } 
        };
        fetchTrendingMovies();
      }, []);

    return (
        <MovieList trendingMovies={trendingMovies} />
    );
};

export default Home;
