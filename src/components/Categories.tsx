import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setActiveCategory } from "../redux/slices/filtersSlice";
import { RootState } from "../redux/store";

const categoriesLabels = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = React.memo(() => {
  const activeCategory = useSelector(({ filters }: RootState) => filters.activeCategory);
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

export default Categories;
