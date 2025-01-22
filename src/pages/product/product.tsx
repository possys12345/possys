import React, { useState } from "react";
import { productsData } from "./products/products-data";
import { ProductCard } from "./products/products";
import { CartItem, ProductTy } from "./products/types";

export default function Product() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: ProductTy) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <div className="products-list">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={cartItems.find((item) => item.id === product.id)}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
    </div>
  );
}
