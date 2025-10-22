import { createBrowserRouter } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Search from "../pages/Search/Search";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />
    },
    {
        path: "movie/:id",
        element: <MovieDetails />    
    }
])