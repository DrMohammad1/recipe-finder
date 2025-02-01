'use client';

import { Recipe } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.some((fav: Recipe) => fav.id === recipe.id)) {
      favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Recipe added to favorites!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.summary?.replace(/<[^>]*>/g, '')}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={addToFavorites}
            className="text-orange-500 hover:text-orange-600"
          >
            Save to Favorites
          </button>
          <Link
            href={`/recipe/${recipe.id}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}