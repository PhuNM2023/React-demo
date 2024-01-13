export interface Ingredient {
  name: string;
  amount: number;
}

export interface Recipe {
  id:string;
  name: string;
  imgUrl: string;
  description: string;
  ingredients: Ingredient[];
}