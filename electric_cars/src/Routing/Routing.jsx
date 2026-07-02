import React from "react";
import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info";
import InfoDetail from "../pages/InfoDetail/InfoDetail";
// import Product from "../pages/Product/Product";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Charging from "../pages/Charging/Charging";
import Announcement from "../pages/Announcement/Announcement";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/info/:id" element={<InfoDetail />} />
      {/* <Route path="/product" element={<Product />} /> */}
      <Route path="/charging" element={<Charging />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/announcement/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routing;
