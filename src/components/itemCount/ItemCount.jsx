import { useState } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Style.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button key={count} onClick={decrease}>
         -
      </button>
      <span>{count}</span>
      <button key={count >= 1} onClick={increase}>
         +
      </button>
      <div>
        <button>
          <CartWidget />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
