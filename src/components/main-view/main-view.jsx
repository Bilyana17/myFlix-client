import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://dashboard.heroku.com/apps/movie-api/movies")
        .then((response) => response.json())
        .then((data) => {
            const moviesFromApi = movies.map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    Image: movie.image,
                    description: movie.description,
                    director: movie.director,
                    Genre: NavigationHistoryEntry.genre,
                };
            });
            setMovies(moviesFromApi);
        })
    }, []);

    if (selectedMovie) {
        return (
         <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={() => setSelectedMovie(movie)} 
                />
            ))}
        </div>
    );
};