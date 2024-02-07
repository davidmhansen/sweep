import React from "react";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <section className="header">
      <h1 className="header__heading">{title}</h1>
    </section>
  );
};

export default Hero;
