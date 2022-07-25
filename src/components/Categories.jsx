import React from "react";

import AppContext from "../context";

const categoriesLabels = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const { activeCategory, setActiveCategory } = React.useContext(AppContext);

  return (
    <div className="categories">
      <ul>
        {categoriesLabels.map((label, index) => (
          <li
            key={`${label}_${index}`}
            className={activeCategory === index ? "active" : ""}
            onClick={() => setActiveCategory(index)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
