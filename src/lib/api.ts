const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export async function searchRecipes(query: string, page = 1) {
  const offset = (page - 1) * 12;
  
  if (!API_KEY) {
    throw new Error('API key is not configured');
  }

  try {
    const url = new URL(`${BASE_URL}/complexSearch`);
    url.searchParams.append('apiKey', API_KEY);
    url.searchParams.append('query', query);
    url.searchParams.append('number', '12');
    url.searchParams.append('offset', offset.toString());
    url.searchParams.append('addRecipeInformation', 'true');

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}