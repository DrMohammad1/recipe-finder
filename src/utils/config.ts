export const getApiKey = () => {
    const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    if (!apiKey) {
      throw new Error('Spoonacular API key is not configured');
    }
    return apiKey;
  };