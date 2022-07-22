import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    // axios.get("./db.json").then((resp) => {
    //   setPizzas(resp);
    // });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={[]} />} />
          <Route exact path="/cart" element={<Cart items={[]} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
