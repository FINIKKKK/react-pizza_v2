import React from "react";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Categories,
  Sort,
  PizzaItem,
  LoadingPizzaItem,
  Search,
  Pagination,
} from "../components";
import { setUrlFilters } from "../redux/slices/filtersSlice";
import AppContext from "../context";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isURL = React.useRef(false);
  const isMounted = React.useRef(true);

  const sortLabels = ["rating", "price", "name"];

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const { activeCategory, activeSortItem, currentPage } = useSelector(
    ({ filters }) => filters
  );

  const [searchValue, setSearchValue] = React.useState("");

  const fetchPizzas = () => {
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
  };

  React.useEffect(() => {
    if (window.location.search) {
      const paramsUrl = qs.parse(window.location.search.substring(1));
      dispatch(setUrlFilters(paramsUrl));
      isURL.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isURL.current) {
      fetchPizzas();
    }
    isURL.current = false;
  }, [activeCategory, activeSortItem, searchValue, currentPage]);

  React.useEffect(() => {
    if (!isMounted.current) {
      const urlPage = qs.stringify({
        currentPage,
        activeCategory,
        activeSortItem,
      });
      navigate(`?${urlPage}`);
    }
    isMounted.current = false;
  }, [activeCategory, activeSortItem, currentPage]);

  return (
    <AppContext.Provider
      value={{
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
        <Pagination />
      </div>
    </AppContext.Provider>
  );
}

// .filter((obj) =>
//                   obj.name.toLowerCase().includes(searchValue.toLowerCase())
//                 )

export default Home;
