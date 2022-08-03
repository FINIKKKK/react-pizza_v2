import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Cart } from "./pages";
import PizzaPage from "./pages/PizzaPage";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizzas/:id" element={<PizzaPage />} />
      </Route>
    </Routes>
  );
}

export default App;
