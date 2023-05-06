import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="app_layout">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
