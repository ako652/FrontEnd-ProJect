let Image: (string| string|string )[];

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
 

  category: {
    id: number;
    name: string;
    image: string;
    
  };
};
export type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;

  category: {
    id: number;
    name: string;
    image: string;
  };
};