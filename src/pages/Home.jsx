import React from "react";

import { Categories, Sort, PizzaItem, LoadingPizzaItem } from "../components";

function Home({ items, isLoaded }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj, index) => (
              <PizzaItem
                key={`${obj.title}_${index}`}
                img={obj.imageUrl}
                title={obj.name}
                price={obj.price}
                types={obj.types}
                sizes={obj.sizes}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingPizzaItem key={index} />)}
      </div>
    </div>
  );
}

export default Home;
