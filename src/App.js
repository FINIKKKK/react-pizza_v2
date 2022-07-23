import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas")
      .then(({ data }) => {
        setPizzas(data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home items={pizzas} isLoaded={isLoaded} />}
          />
          <Route exact path="/cart" element={<Cart items={[]} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
