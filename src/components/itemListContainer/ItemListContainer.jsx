import { useEffect, useState } from "react";
import { products} from "../../productsMock";
import ItemList from "../itemList/ItemList";
import ItemCount from "../itemCount/ItemCount";

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const task = new Promise((resolve, reject)=>{
            setTimeout(() =>{
                resolve(products)
            },1000)
        })
        task
            .then((res) => {
                console.log("No funciona")
            })
            .catch((err) =>{
                console.log("Se cumplió la promesa")
            })
        console.log("Se hizo la peticion")
    }, [])

    return(
        <div>
            <ItemCount />
            <ItemList items={items} />
        </div>
    )
}