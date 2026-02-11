import React from "react";
import "./Navbar.css";
import GooeyNav from "./GooeyNav";

const Navbar = () => {
  const items = [
    { label: "Home", path:'/' },
    { label: "About", path:'/about' },
    { label: "Services",path:'/service' },
    {label:'Portfolios',path:'/portfolio'},
    { label: "Contact", path: "/contact" },
    
  ];
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Blush With SuSh</h1>
      </div>
      <div className="options">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div className="contact-btn">
        <button> 
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
