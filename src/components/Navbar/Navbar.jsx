import React, { useState } from "react";
import "./Navbar.css";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
