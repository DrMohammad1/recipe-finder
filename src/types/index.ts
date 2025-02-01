export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  readyInMinutes?: number;
  servings?: number;
  instructions?: string;
  extendedIngredients?: Ingredient[];
}

export interface Ingredient {
  id: number;
  original: string;
  amount: number;
  unit: string;
  name: string;
}

export interface SearchResults {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}