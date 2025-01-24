import React, { useState } from "react";
import { productsData } from "./products/products-data";
import { ProductCard } from "./products/products";
import { CartItem, ProductTy } from "./products/types";
import { ShoppingCart } from "lucide-react";
import { Cart } from "./products/cart/cart";

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
      <header className="product-header">
        <div className="container header-content">
          <h1 className="store-title">Premium Store</h1>
          <button onClick={() => setIsCartOpen(true)} className="cart-button">
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
        </div>
      </header>
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

      {isCartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onClose={() => setIsCartOpen(false)}
          />
        </>
      )}
    </div>
  );
}
