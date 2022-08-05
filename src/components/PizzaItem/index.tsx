import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

const typeNames = ["тонкое", "традиционное"];
const sizeNames = [26, 30, 40];

type PizzaItemProps = {
  id: string;
  img: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

const PizzaItem: React.FC<PizzaItemProps> = ({
  id,
  img,
  title,
  price,
  types,
  sizes,
}) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(({ cart }: RootState) =>
    cart.items.find((item) => item.id === id)
  );

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);

  const onAddItem = () => {
    const itemParams = {
      id,
      img,
      title,
      price,
      type: typeNames[activeType],
      size: sizeNames[activeSize],
      count: 0,
    };

    dispatch(addItem(itemParams));
  };

  const addedCount = itemCount ? itemCount.count : 0;

  return (
    <div className="pizza-block">
      <div className="pizza-block__content">
        <img className="pizza-block__image" src={img} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {typeNames.map((type, index) => (
              <li
                key={`${type}_${index}`}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}
                onClick={() => setActiveType(index)}
              >
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {sizeNames.map((size, index) => (
              <li
                key={`${size}_${index}`}
                className={classNames({
                  active: activeSize === index,
                  disabled: !sizes.includes(sizeNames[index]),
                })}
                onClick={() => setActiveSize(index)}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            onClick={onAddItem}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
