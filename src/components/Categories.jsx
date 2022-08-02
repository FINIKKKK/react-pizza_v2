import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setActiveCategory } from "../redux/slices/filterSlice";

const categoriesLabels = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const activeCategory = useSelector(
    ({filters}) => filters.activeCategory
  );
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categoriesLabels.map((label, index) => (
          <li
            key={`${label}_${index}`}
            className={activeCategory === index ? "active" : ""}
            onClick={() => dispatch(setActiveCategory(index))}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
