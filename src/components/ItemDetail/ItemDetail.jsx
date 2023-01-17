import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './detail.css'

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityBiId } = useContext(CartContext)

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })

    alert("Agregaste el producto al carrito! :)")

  }

  const quantity = getQuantityBiId(product.id)

  return (
    <div className="Container-detail">
      <div>
        <img src={product.img} alt="" />
      </div>

      <div>
        <h2>
          <span>Nombre:</span> {product.name}
        </h2>
        <h2>
          <span>Descripcion:</span>{" "}
          {product.description}
        </h2>
        <h2>
          <span>Precio:</span> ${product.price}.-
        </h2>

        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>

    
  )
}

export default ItemDetail