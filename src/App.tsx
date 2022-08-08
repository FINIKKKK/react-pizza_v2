import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { Header, Loader } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
