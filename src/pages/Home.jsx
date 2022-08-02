import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  PizzaItem,
  LoadingPizzaItem,
  Sort,
  Categories,
  Pagination,
  Search,
} from "../components";

const sortLabels = ["rating", "price", "name"];

function Home() {
  const { activeCategory, activeSortItem, currentPage, searchValue } = useSelector(
    ({ filters }) => filters
  );

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(false);
    axios
      .get(
        `https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas?page=${currentPage}&limit=4&search=${searchValue}&${
          activeCategory > 0 ? `category=${activeCategory}` : ""
        }&sortBy=${sortLabels[activeSortItem]}&order=${
          activeSortItem === 2 ? "asc" : "desc"
        }`
      )
      .then(({ data }) => {
        setPizzas(data);
        setIsLoaded(true);
      });
  }, [activeCategory, activeSortItem, currentPage, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <div className="content__header">
        <h2 className="content__title">Все пиццы</h2>
        <Search />
      </div>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => <PizzaItem key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingPizzaItem key={index} />)}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
