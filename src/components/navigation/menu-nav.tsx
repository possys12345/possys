import React from "react";
import { Link } from "react-router-dom";
interface MenuNavProps {
  typeNaver: "leftNav" | "rightNav";
}

export default function MenuNav({ typeNaver }: MenuNavProps) {
  let leftNavArr = [
    { path: "/", label: "Restaurants" },
    { path: "/", label: "Services" },
    { path: "/", label: "Retail" },
    { path: "/", label: " Products" },
    { path: "/", label: "Resources" },
  ];

  let rightNavArr = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/about", label: "About" },
    { path: "/helpcenter", label: " Help Center" },
    { path: "/login", label: "  Log In" },
  ];
  const LeftNav = () => {
    return (
      <>
        {leftNavArr.map((item) => (
          <Link to={item.path} className="menu-item">
            {item.label}
          </Link>
        ))}
      </>
    );
  };
  const RightNav = () => {
    return (
      <>
        {rightNavArr.map((item) => (
          <a className="menu-item" href={item.path}>
            {item.label}
          </a>
        ))}
      </>
    );
  };
  return (
    <div className="menu-item">
      {typeNaver === "leftNav" ? <LeftNav /> : <RightNav />}
    </div>
  );
}
