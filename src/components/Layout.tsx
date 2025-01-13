import React from "react";
import { Navigation } from "./navigation/navigation";

import { HeroContent } from "../types";
import Banner from "./banner/banner";
import Home from "../pages/home/home";

const heroContents: HeroContent[] = [
  {
    title: "Innovative Solutions",
    description:
      "Transform your business with cutting-edge technology solutions designed to drive growth and efficiency.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    ctaText: "Learn More",
  },
  {
    title: "Expert Support",
    description:
      "Get 24/7 access to our team of experts who are dedicated to helping you succeed every step of the way.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    ctaText: "Contact Us",
  },
  {
    title: "Global Reach",
    description:
      "Connect with customers worldwide through our comprehensive platform and international network.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    ctaText: "Get Started",
  },
];

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Home />
    </div>
  );
};
