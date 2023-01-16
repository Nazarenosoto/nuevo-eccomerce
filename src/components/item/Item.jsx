import "./Style.css"
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <div className="cardPadre">
      <img src={element.img}/>
      <div className="infoProduc">
        <h4>{element.title}</h4>
        <p>
          {element.description}
        </p>
        <h5>
          ${element.price}
        </h5>
      
        
          <button className="buttonDeta">
            <Link to={`/ItemDetail/${element.id}`}>Ver detalles</Link>
          </button>
        
        </div>
    </div>
  )
}

export default Item;
