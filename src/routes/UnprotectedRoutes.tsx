import { Routes, Route, Navigate } from "react-router-dom";
import UnprotectedWrapper from "./wrapper/UnprotectedWrapper";
import Home from "@/pages/home/Home";
import ProductDetails from "@/pages/product/ProductDetails";
// import About from "@/pages/about/About";
import Table from "@/pages/table/TableData";
import Dealers from "@/pages/authorizedDealers/Dealers";

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UnprotectedWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/product_details" element={<ProductDetails />} />
        <Route path="/dealers" element={<Dealers />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/table" element={<Table />} />
        {/* <Route path="/display/:label" element={<Display />} />
        <Route path="/product/:label/:id" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop_details/:id" element={<ShopDetails />} />
        <Route path="/best_selling" element={<BestSelling />} />
        // */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default UnprotectedRoutes;
