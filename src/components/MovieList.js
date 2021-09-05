import React, {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

export const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <section className="movie">
            <div className="movie-inner">
                <h2>MOVIES</h2>
                <ul className="movie-list">
                    {movies.map((item) => (
                        <Movie key={item.id} name={item.name} price={item.price} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default MovieList;