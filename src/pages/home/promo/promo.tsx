import React from "react";
import "./promo.css";
import PromoImg from "./promo.png";

export default function Promo() {
  return (
    <div className="promo-wrp">
      <div className="image-section">
        <img src={PromoImg} />
      </div>

      <div className="text-section"></div>
    </div>
  );
}
