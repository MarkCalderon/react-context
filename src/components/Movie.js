import React from 'react'

export const Movie = ({name, price}) => {
    return (
        <div className="movie-item">
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}

export default Movie;