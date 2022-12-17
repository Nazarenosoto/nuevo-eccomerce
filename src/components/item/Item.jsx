import "./Style.css"
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <div className="cardPadre">
      <img src={element.img}/>
      <div>
        <h3>{element.name}</h3>
        <h5 variant="body1" color="text.secondary" align="center">
          {element.description}
        </h5>
        <h2 variant="body1" color="secondary" align="center">
          ${element.price}
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${element.id}`} style={{textDecoration: "none"}}>
          <button>
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Item;
