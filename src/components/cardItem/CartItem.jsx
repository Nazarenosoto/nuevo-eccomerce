import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ item }) => {

    const { deleteProductById } = useContext( CartContext )

return (
    <div key={item.id} className="cart-item">
        <img src={item.img} alt="" />
    <div className="cart-item-info">
        <h2>{item.name}</h2>
        <h2>${item.price}.-</h2>
        <h2>Unidades: {item.quantity}</h2>
    </div>
        < button onClick={()=>deleteProductById(item.id)}>Quitar</button>
    </div>
)
}

export default CartItem