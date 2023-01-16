import "./Style.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {

    const itemCollection = collection(db, "products")

    if (categoryId) {
      const q = query(itemCollection, where("category", "==", categoryId))
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    }

  }, [categoryId])

  return (
    <div className="cardPadre">
        <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer


