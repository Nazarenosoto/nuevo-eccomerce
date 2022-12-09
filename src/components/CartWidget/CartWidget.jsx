
import { Link } from "react-router-dom";
import carrito from "./carrito.png"

export const CartWidget = () => {
  return <Link to='/CartWidget'><img src={carrito} alt="" className="carritoImg" /></Link>;
};
