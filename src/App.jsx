import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import CheckoutSideMenu from "./components/CheckoutSideMenu";

import { useState } from "react";

const App = () => {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [isCheckoutOpen, setIsCheckoutOpen] =
    useState(false);

  return (

    <BrowserRouter basename="/Shopie_Clone">

      <Navbar
        setSelectedCategory={setSelectedCategory}
        setIsCheckoutOpen={setIsCheckoutOpen}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              selectedCategory={selectedCategory}
              setIsCheckoutOpen={setIsCheckoutOpen}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

      </Routes>

      <CheckoutSideMenu
        isOpen={isCheckoutOpen}
        CloseSidebar={() =>
          setIsCheckoutOpen(false)
        }
      />

    </BrowserRouter>
  );
};

export default App;