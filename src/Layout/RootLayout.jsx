import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavTrigger from "../components/NavTrigger";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <NavTrigger />
      <Outlet />
    </div>
  );
}

export default RootLayout;
