import React from "react";
import { Plus, Minus } from "lucide-react";
import { CartItem, ProductTy } from "./types";
import "./products.css";
interface ProductCardProps {
  product: ProductTy;
  cartItem?: CartItem;
  onAddToCart: (product: ProductTy) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cartItem,
  onAddToCart,
  onUpdateQuantity,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <div className="product-content-text">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        <div className="product-footer">
          {!cartItem ? (
            <button
              onClick={() => onAddToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          ) : (
            <div className="quantity-controls">
              <button
                onClick={() =>
                  onUpdateQuantity(product.id, cartItem.quantity - 1)
                }
                className="quantity-button"
              >
                <Minus size={16} />
              </button>
              <span className="quantity-display">{cartItem.quantity}</span>
              <button
                onClick={() =>
                  onUpdateQuantity(product.id, cartItem.quantity + 1)
                }
                className="quantity-button"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
