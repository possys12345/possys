import React, { useState } from "react";
import Logo from "./logo/logo";
import "./navigation.css";
import { Link } from "react-router-dom";
import MenuNav from "./menu-nav";
import { Cart } from "../../pages/product/products/cart/cart";
import { CartItem } from "../../pages/product/products/types";
import { ShoppingCart } from "lucide-react";

export const Navigation: React.FC = () => {
  return (
    <nav className="topNav">
      <div className="leftNav ">
        <Logo />
        <MenuNav typeNaver={"leftNav"} />
      </div>
      <div className="rightNav">
        <MenuNav typeNaver={"rightNav"} />
        <Link className="get-start-btn" to="/contact">
          Contact sales
        </Link>
        {/* 
        <button className="cart-button">
          <ShoppingCart size={24} />
        </button> */}
      </div>
    </nav>
  );
};
