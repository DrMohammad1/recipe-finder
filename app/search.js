import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';

const SearchResults = ({ query }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
                params: {
                    query,
                    apiKey: '3023b13182f742f6bfd4f10c31647ca8', // Replace with your actual API key
                },
            });
            setRecipes(response.data.results);
        };

        fetchRecipes();
    }, [query]);

    return (
        <div>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default SearchResults;