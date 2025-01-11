"use client";

import Link from 'next/link';

const RecipeCard = ({ recipe }) => (
    <div>
        <img src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <Link href={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
);

export default RecipeCard;