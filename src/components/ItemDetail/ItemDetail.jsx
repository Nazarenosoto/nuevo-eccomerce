import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ element }) => {
  return (
    <>
    <div>
        <div>
          <img src={element.img} alt={element.title} />
        </div>
        <div>
          <h4>
            {element.title}
          </h4>
          <h5>
            ${element.price} - {element.stock} unidades disponibles
          </h5>
            <p>{element.description}</p>
          <div>
            <ItemCount
              initial={0}
            />
          </div>
        </div>
    </div>
    </>
  );
}

export default ItemDetail;
