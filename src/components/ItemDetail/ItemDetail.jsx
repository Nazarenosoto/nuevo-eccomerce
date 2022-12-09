import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail() {

const [goToCart, setGoToCart] = useState(false);

  return (
    <div className="container">
    <div className="detail">
    <img className="detail__img" src={detail.imgurl} alt=""/>
    <div className="content">
    <h1>{detail.title}</h1>
        {
            goToCart
            ?  <Link to="/CartWidget">Finalizar mi compra</Link>
            : <ItemCount />
        }
    </div>
    </div>
    </div>
  );
}

export default ItemDetail;
