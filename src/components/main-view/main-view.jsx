import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
          id: 1, 
          title: "Inside Out",
          image: "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
          director: "Pete Docter"
        },
        {
          id: 2, 
          title: "Toy Story",
          image: "https://lumiere-a.akamaihd.net/v1/images/p_toystory3_19639_3c584e1f.jpeg",
          director: "John Lasseter"
        },
        {
          id: 3, 
          title: "Elemental",
          image: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_elemental_poster_rebrand_a0788af2.jpeg",
          director: "Peter Sohn"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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