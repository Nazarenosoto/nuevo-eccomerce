import {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const { cart } = useContext( CartContext )

    return(
        <div>
            {cart.map( item =>(
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <h2>{item.description}</h2>
                </div>
            ))}
        </div>
    )
}