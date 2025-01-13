import React from "react";
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
    { path: "/", label: "Shop systems" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
    { path: "/helpcenter", label: " Help Center" },
    { path: "/login", label: "  Log In" },
  ];
  const LeftNav = () => {
    return (
      <>
        {leftNavArr.map((item) => (
          <a className="menu-item" href={item.path}>
            {item.label}
          </a>
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
