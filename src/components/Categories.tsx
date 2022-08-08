import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { activeCategorySelector } from "../redux/filters/selectors";
import { setActiveCategory } from "../redux/filters/slice";

const categoriesLabels = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories: React.FC = React.memo(() => {
  const activeCategory = useSelector(activeCategorySelector);
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
});