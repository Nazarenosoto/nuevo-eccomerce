import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ id, title, stock, price, img, description }) {
  function handleOnAdd(quantity) {
    alert(`Agregaste ${quantity} de ${title}`);
  }

  return (
    <>
    <div>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h4>
            {title}
          </h4>
          <h5>
            ${price} - {stock} unidades disponibles
          </h5>
            <p>{description}</p>
          <div>
            <ItemCount
              initial={0}
              stock={stock}
              onAdd={handleOnAdd}
            />
          </div>
        </div>
    </div>
    </>
  );
}

export default ItemDetail;
