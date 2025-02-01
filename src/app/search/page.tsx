import { searchRecipes } from '@/lib/api';
import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/types';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) {
  const query = searchParams.q || '';
  const page = parseInt(searchParams.page || '1');
  
  const data = await searchRecipes(query, page);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.results.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}