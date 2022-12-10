import ItemCount from "../ItemCount/ItemCount";
import "./Style.css";

function Item(props) {
  return (
    <div className="ContenedorCard">
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt={props.title} />
      </div>
    <div className="card-detail">
        <h3>{props.title}</h3>
        <span>{props.description}</span>
        <p>U$D {props.price}</p>
        <span>{props.category}</span>
      </div>
      <ItemCount />
    </div>
    </div>
  );
}

export default Item;
