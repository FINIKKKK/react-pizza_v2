import React from "react";

const categoriesLabels = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(null);

  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>

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
