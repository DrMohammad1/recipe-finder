'use client';

import { useEffect, useState } from 'react';
import { Recipe } from '@/types';
import RecipeCard from '@/components/RecipeCard';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center">
          No favorites yet. Start saving your favorite recipes!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}