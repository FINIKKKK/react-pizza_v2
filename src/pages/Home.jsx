import React from "react";

import { Categories, Sort, PizzaItem } from "../components";
import pizzas from "../assets/pizzas.json";

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((obj, index) => (
          <PizzaItem
            key={`${obj.title}_${index}`}
            img={obj.imageUrl}
            title={obj.name}
            price={obj.price}
            types={obj.types}
            sizes={obj.sizes}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
