import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import { useState } from "react"
import { Link } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import  CartItem  from "../cardItem/CartItem"
import Orders from "../orders/Orders"
import './cart.css'


const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const [order, setOrder] = useState({})

  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true)
    } else {
      alert("no se puede comprar la nada")
    }
  }

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        })
      })
    }
  }, [orderId])

  const limpiar = () => {
    alert("Has quitado los producto;(")
    clearCart()
  }

  if (orderId) {
    return (
      <div>
        <h1>tu orden de compra es : {orderId}</h1>
        <Orders order={order} />

        <Link to={"/"}>Volver a comprar</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length < 1 && <noInfo />}
      </div>

      <div className="cart-info">

        <h3>
          Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay productos"}
        </h3>
        {buy ? (
          <Form
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        ) : (
          cart.length > 0 && (
            <div className="btn-cart">
              <button variant="contained" onClick={openForm}>
                Comprar
              </button>
              <button onClick={() => limpiar()} variant="contained">
                Vaciar carrito
              </button>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Cart