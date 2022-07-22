import React from "react";

const categoriesLabels = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

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
