export interface Ingredients {
  id: number;
  name: string;
  img: string;
}
export interface Images {
  sm?: string;
  lg?: string;
}
export interface Burger {
  id: number;
  name: string;
  images: Images[];
  desc: string;
  ingredients: Ingredients[];
  price: number;
  veg: boolean;
}
