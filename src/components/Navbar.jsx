import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="bg-pink-400 py-4 w-1/6 h-screen"
      style={{ position: "fixed", zIndex: 1000 }}
    >
      {" "}
      <div className=" max-w-[1100px] m-auto px-2 flex justify-between items-center">
        <ul className="flex flex-col text-lg gap-x-8 gap-y-12">
          <li>
            <NavLink
              className="text-white text-2xl [&.active]:underline"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white text-2xl [&.active]:underline"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white text-2xl [&.active]:underline"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white text-2xl [&.active]:underline"
              to="/cv"
            >
              CV
            </NavLink>
          </li>

          <li>
            <NavLink
              className="text-white text-2xl [&.active]:underline"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
