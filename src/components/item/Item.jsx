import "./Style.css"
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <div className="cardPadre">
      <img src={element.img}/>
      <div>
        <h3>{element.name}</h3>
        <h5>
          {element.description}
        </h5>
        <h2>
          ${element.price}
        </h2>
      </div>
      <div>
        <Link to={`/itemDetail/${element.id}`}>
          <button>
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Item;
