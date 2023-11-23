// importo el hook useState
import { useState } from "react";
import "./ItemCount.css";
import Button from "../Button/Button";

const ItemCount = ({initial, stock, onAdd }) => {
  // creo el estado count y la función setCount que va a modificar el estado
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1); // cada vez que ejecute increment, el estado count va a incrementar en 1
  };

  const decrement = () => {
    setCount(count - 1); // cada vez que ejecute increment, el estado count va a incrementar en 1
  };

  return (
    <div className="item-count">
      <div className="item-count__container">
        <Button
          onClick={decrement}
          fontSize={"1.2rem"}
          title={"-"}
          variant={"secondary"}
          disabled={count <= initial}
        />
        <div className="container__qty">{count}</div>
        <Button
          onClick={increment}
          fontSize={"1.2rem"}
          title={"+"}
          variant={"secondary"}
          disabled={count >= stock}
        />
      </div>

      <Button onClick={onAdd} variant={'primary'} title={'Añadir al carrito'} />
    </div>
  );
};

export default ItemCount;
