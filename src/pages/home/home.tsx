import React from "react";
import Banner from "../../components/banner/banner";
import Promo from "./promo/promo";
import { HeroContent } from "../../types";
import HeroSection from "../../components/heroSection/heroSection";
import "./home.css";
export default function Home() {
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
  ];
  return (
    <div>
      <Banner />
      <Promo />
      <div className="hero-card-wrp">
        {heroContents.map((content, index) => (
          <HeroSection key={index} {...content} />
        ))}
      </div>
    </div>
  );
}
