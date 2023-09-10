import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-50 flex items-center justify-between px-2 py-1">
      <div className="logo">
        <h2 className="text-xl">Love Sonkar</h2>
      </div>
      <nav>
        <p>Home</p>
      </nav>
    </header>
  );
};

export default Header;
