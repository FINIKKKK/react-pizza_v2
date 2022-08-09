import React from "react";
import { useSelector } from "react-redux";

import {
  PizzaItem,
  LoadingPizzaItem,
  Sort,
  Categories,
  Pagination,
  Search,
  NotFoundSearch,
  PizzaPopup
} from "../components";
import { filtersSliceSelector } from "../redux/filters/selectors";
import { pizzasSliceSelector } from "../redux/pizzas/selectors";
import { fetchPizzas } from "../redux/pizzas/slice";

import { useAppDispatch } from "../redux/store";

function Home() {
  const dispatch = useAppDispatch();
  const { activeCategory, activeSortItem, currentPage, searchValue } =
    useSelector(filtersSliceSelector);
  const { items, openPizzaPopup } = useSelector(pizzasSliceSelector);

  const getPizzas = async () => {
    try {
      dispatch(
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
        {items.length > 0
          ? items.map((obj: any) => <PizzaItem key={obj.id} {...obj} />)
          : Array(4)
              .fill(0)
              .map((_, index) => <LoadingPizzaItem key={index} />)}
      </div>

      {openPizzaPopup && <PizzaPopup />}
      <Pagination />
    </div>
  );
}

export default Home;
