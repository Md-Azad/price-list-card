import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "home",
    },
    {
      id: 2,
      path: "/about",
      name: "about",
    },
    {
      id: 3,
      path: "/contact",
      name: "contact",
    },
    {
      id: 4,
      path: "/products",
      name: "products",
    },
    {
      id: 5,
      path: "/products/:id",
      name: "product-details",
    },
  ];
  return (
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
          <li>{route.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
