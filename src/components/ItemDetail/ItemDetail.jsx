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
          <h4 className="fs-4">
            {title}
          </h4>
          <h5 className="fs-5" style={{ color: "#212529" }}>
            ${price} - {stock} unidades disponibles
          </h5>
            <p style={{ color: "#51585e" }}>{description}</p>
          <div className="d-flex justify-content-center mt-4">
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
