import Loadable from "react-loadable";
import { Routes, Route } from "react-router-dom";

import { Header, Loader } from "./components";

const Home = Loadable({
  loader: () => import("./pages/Home"),
  loading: () => <Loader />,
});
const Cart = Loadable({
  loader: () => import("./pages/Cart"),
  loading: () => <Loader />,
});

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
