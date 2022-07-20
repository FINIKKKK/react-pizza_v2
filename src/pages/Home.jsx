import React from "react";

import { Categories, Sort, PizzaItem } from "../components";

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* {items.map((obj, index) => (
          <PizzaItem
            key={`${obj.title}_${index}`}
            img={obj.img}
            title={obj.title}
            price={obj.price}
          />
        ))} */}

        <PizzaItem />
      </div>
    </div>
  );
}

export default Home;
