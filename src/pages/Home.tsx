import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  PizzaItem,
  LoadingPizzaItem,
  Sort,
  Categories,
  Pagination,
  Search,
} from "../components";
import { filtersSliceSelector } from "../redux/slices/filtersSlice";
import { fetchPizzas, pizzasSliceSelector } from "../redux/slices/pizzasSlice";

function Home() {
  const dispatch = useDispatch();
  const { activeCategory, activeSortItem, currentPage, searchValue } =
    useSelector(filtersSliceSelector);
  const { items, status } = useSelector(pizzasSliceSelector);

  const getPizzas = async () => {
    try {
      dispatch(
        // @ts-ignore
        fetchPizzas({
          activeCategory,
          activeSortItem,
          currentPage,
          searchValue,
        })
      );
      window.scrollTo(0, 0);
    } catch (error) {
      alert("Ошибка!");
      console.log("Ошибка при получении пицц");
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPizzas();
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
        {status === "success"
          ? items.map((obj: any) => <PizzaItem key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingPizzaItem key={index} />)}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
