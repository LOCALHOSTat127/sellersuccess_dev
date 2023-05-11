import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div  className="app_layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
