import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="bg-emerald-600 py-4 pt-20 h-screen fixed z-50 opacity-0 scale-95 hover:opacity-100 hover:scale-100 duration-500 ease-in-out transition-opacity"
      style={{ position: "fixed", zIndex: 1000 }}
    >
      {" "}
      <div className="m-0 p-0 flex justify-between items-center w-full">
        <ul className="flex flex-col text-lg w-full">
          <li className="hover:bg-emerald-700 px-4 py-4">
            <NavLink className="text-white text-2xl " to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:bg-emerald-700 px-4 py-4">
            <NavLink className="text-white text-2xl " to="/about">
              About
            </NavLink>
          </li>
          <li className="hover:bg-emerald-700 px-4 py-4">
            <NavLink className="text-white text-2xl " to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="hover:bg-emerald-700 px-4 py-4">
            <NavLink className="text-white text-2xl " to="/cv">
              CV
            </NavLink>
          </li>

          <li className="hover:bg-emerald-700 px-4 py-4">
            <NavLink className="text-white text-2xl " to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
