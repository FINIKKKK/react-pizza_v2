import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PizzaPage() {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    try {
      const fetchPizza = async () => {
        const { data } = await axios.get(
          `https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas/${id}`
        );
        setPizza(data);
      };
      fetchPizza();
    } catch (error) {
      alert("Ошибка!");
      console.log("Не удалось получить информацию о пицце :(");
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      {pizza ? (
        <>
          <img src={pizza.img} />
          <h1>{pizza.title}</h1>
          <p>{pizza.price}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default PizzaPage;
