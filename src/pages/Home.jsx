import React from "react";
import axios from "axios";

import {
  Categories,
  Sort,
  PizzaItem,
  LoadingPizzaItem,
  Search,
  Pagination,
} from "../components";
import AppContext from "../context";

function Home() {
  const sortLabels = ["rating", "price", "name"];

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSortItem, setActiveSortItem] = React.useState(0);

  const [searchValue, setSearchValue] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(1);

  console.log(currentPage);

  React.useEffect(() => {
    setIsLoaded(false);
    axios
      .get(
        `https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas?page=${currentPage}&limit=4&${
          activeCategory > 0 ? `category=${activeCategory}` : ""
        }&sortBy=${sortLabels[activeSortItem]}&order=${
          activeSortItem === 2 ? "asc" : "desc"
        }&search=${searchValue}`
      )
      .then(({ data }) => {
        setPizzas(data);
        setIsLoaded(true);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSortItem, searchValue, currentPage]);

  return (
    <AppContext.Provider
      value={{
        activeCategory,
        activeSortItem,
        setActiveSortItem,
        setActiveCategory,
        searchValue,
        setSearchValue,
      }}
    >
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
        <Pagination onChangePage={(page) => setCurrentPage(page)} />
      </div>
    </AppContext.Provider>
  );
}

// .filter((obj) =>
//                   obj.name.toLowerCase().includes(searchValue.toLowerCase())
//                 )

export default Home;
