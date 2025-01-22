import React from "react";
import "./heroSection.css";
interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
}
export default function HeroSection({
  title,
  description,
  image,
  ctaText,
}: HeroSectionProps) {
  return (
    <div className="hero-section-wrp">
      <div className="img-wrp">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="hero-content-wrp">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-description">{description}</p>
        <button className="hero-button">{ctaText}</button>
      </div>
    </div>
  );
}
