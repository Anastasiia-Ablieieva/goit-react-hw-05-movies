import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import Layout from "./Layout/Layout";

const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDitails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
// const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />} /> 
          <Route path="movies/:movieId" element={<MovieDitails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
 