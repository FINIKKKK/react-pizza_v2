import React from "react";
import { useSelector } from "react-redux";

import ImgSearch from "../assets/img/search.svg";
import { filtersSliceSelector } from "../redux/slices/filtersSlice";

const NotFoundSearch: React.FC = () => {
  const { searchValue } = useSelector(filtersSliceSelector);

  return (
    <div className="notfound-search">
      <img src={ImgSearch} alt="Empty cart" />
      <h2>Ничего не найдето 😕</h2>
      <p>По вашему запросу {searchValue && `"${searchValue}"`} ничего не найдено </p>
    </div>
  );
};

export default NotFoundSearch;
