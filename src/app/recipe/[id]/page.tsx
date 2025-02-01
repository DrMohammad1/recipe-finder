import { getRecipeById } from '@/lib/api';
import Image from 'next/image';

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipeById(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Ingredients</h2>
            <ul className="list-disc pl-5">
              {recipe.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Details</h2>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
      </div>
    </div>
  );
}