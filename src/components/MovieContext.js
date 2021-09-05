import React, {useState, createContext} from 'react';

export const MovieContext = createContext();
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'The Mark',
            price: '$10',
            id: 1
        },
        {
            name: 'The Joy',
            price: '$15',
            id: 2
        },
        {
            name: 'Christmas The Movie',
            price: '$32',
            id: 3
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};