
import { Link } from "react-router-dom";
import carrito from "./carrito.png"

export const CartWidget = () => {

  return(
    <Link to='/cart'><img src={carrito} alt="" className="carritoImg"/></Link>
  );
};
