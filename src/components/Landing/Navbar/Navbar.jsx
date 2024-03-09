import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const link = [
  {
    name: "Land",
    path: "/",
  },
  {
    name: "Shop",
    path: "shop",
  },
  {
    name: "Event",
    path: "event",
  },
];

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        {link.map((link, i) => {
          return (
            <li key={i}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
