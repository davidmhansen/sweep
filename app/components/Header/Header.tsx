import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <section className="header">
      <h1 className="header__heading">{title}</h1>
    </section>
  );
};

export default Header;
