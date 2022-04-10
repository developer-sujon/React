import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className={(navInfo) => (navInfo.isActive ? "s" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={(navInfo) => (navInfo.isActive ? "s" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={(navInfo) => (navInfo.isActive ? "s" : "")}
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
