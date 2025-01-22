import React, { useState } from "react";
import { Navigation } from "./navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Footer from "./footer/footer";
import Product from "../pages/product/product";
import Banner from "./banner/banner";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="main-content container"></main>
      <main className="main-content container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
