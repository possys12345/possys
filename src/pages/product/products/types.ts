export interface ProductTy {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends ProductTy {
  quantity: number;
}
