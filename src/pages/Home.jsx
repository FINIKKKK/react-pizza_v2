import React from "react";
import axios from "axios";

import { Categories, Sort, PizzaItem, LoadingPizzaItem } from "../components";
import AppContext from "../context";

function Home() {
  const sortLabels = ["rating", "price", "name"];

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSortItem, setActiveSortItem] = React.useState(0);

  React.useEffect(() => {
    setIsLoaded(false);
    axios
      .get(
        `https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas?${
          activeCategory > 0 ? `category=${activeCategory}` : ""
        }&sortBy=${sortLabels[activeSortItem]}&order=${activeSortItem === 2 ? 'asc' : 'desc'}`
      )
      .then(({ data }) => {
        setPizzas(data);
        setIsLoaded(true);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSortItem]);

  return (
    <AppContext.Provider
      value={{
        activeCategory,
        activeSortItem,
        setActiveSortItem,
        setActiveCategory,
      }}
    >
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? pizzas.map((obj, index) => (
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
    </AppContext.Provider>
  );
}

export default Home;
