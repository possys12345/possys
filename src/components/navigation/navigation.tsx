import React from "react";
import Logo from "./logo/logo";
import "./navigation.css";
import { Link } from "react-router-dom";
import MenuNav from "./menu-nav";
import Cart from "./cart/cart";
export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
        <Cart />
      </div>
    </nav>
  );
};
