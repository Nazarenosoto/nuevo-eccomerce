import { Link } from "react-router-dom";
import "./Style.css";

function Item({ title, price, img, id }){

    return(
      <>
      <div className="contenedor-imagen">
        <div className="imagen">
          <img src={img} alt="" />
        </div>  
      </div>
      <p>{title}</p>
      <div>
        <strong>${price}</strong>
      </div>
      <button as={Link} to={`/detail/${id}`}>Ver mas</button>
      </>
    )

};


export default Item;
