"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetail = ({ id }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                params: {
                    apiKey: '3023b13182f742f6bfd4f10c31647ca8',
                },
            });
            setRecipe(response.data);
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Ingredients</h2>
            <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;