import { useState, useEffect } from "react";
import "./Style.css";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  useEffect(() => {
    setCounter(initial)
  }, [initial])

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="container-btn">
      <h2>Cantidad: {counter}</h2>
      <div className="btns">
        <button variant="outlined" onClick={increment}>
          +
        </button>
        <button variant="contained" onClick={() => onAdd(counter)} className="agcar">
          agregar al carrito
        </button>
        <button variant="outlined" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  )
}

export default ItemCount;
