"use client";

import { useEffect, useState } from 'react';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Logic to fetch or manage favorites
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div>
            <h1>Your Favorite Recipes</h1>
            {favorites.length === 0 ? (
                <p>No favorites added yet!</p>
            ) : (
                <ul>
                    {favorites.map((recipe, index) => (
                        <li key={index}>{recipe.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;