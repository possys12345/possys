import React from "react";
import BannerImg from "./banner11.png";
import "./banner.css";

export default function Banner() {
  return (
    <div
      className="banner-img"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}
    ></div>
  );
}
