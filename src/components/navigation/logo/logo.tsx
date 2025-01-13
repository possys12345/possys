import React from "react";
import LOGO from "./logo.svg";
import "./logo.css";

export default function Logo() {
  return (
    <div>
      <img className="logo-wrp" src={LOGO} alt="" />
    </div>
  );
}
