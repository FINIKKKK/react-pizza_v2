import classNames from "classnames";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { pizzasSliceSelector } from "../../redux/pizzas/selectors";
import { closePizzaPopup } from "../../redux/pizzas/slice";

import styles from "./PizzaPopup.module.scss";

export const PizzaPopup: React.FC = () => {
  const dispatch = useDispatch();
  const pizzaPopupRef = React.useRef<HTMLDivElement>(null);
  const { activeItem } = useSelector(pizzasSliceSelector);

  // const handleClickOutSide = (e: MouseEvent) => {
  //   const _event = e as MouseEvent & {
  //     path: Node[];
  //   };

  //   if (pizzaPopupRef.current && !_event.path.includes(pizzaPopupRef.current)) {
  //     dispatch(closePizzaPopup());
  //   }
  // };

  // React.useEffect(() => {
  //   document.body.addEventListener("click", handleClickOutSide);
  //   return () => {
  //     document.body.removeEventListener("click", handleClickOutSide);
  //   };
  // }, []);

  const onClosePopup = () => {
    dispatch(closePizzaPopup());
  };

  return (
    <div className={styles.wrapper}>
      <div ref={pizzaPopupRef} className={styles.pizza_popup}>
        <img src={activeItem.img} alt={activeItem.title} />
        <div className={styles.content}>
          <h2>{activeItem.title}</h2>
          <p>
            Томатный соус, моцарелла, острая чоризо из цыпленка, сладкий перец
          </p>
          <p>{activeItem.price}</p>
          <div className="pizza-block__selector"></div>
        </div>
        <div onClick={onClosePopup} className={styles.close}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z"
              fill="#787878"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
