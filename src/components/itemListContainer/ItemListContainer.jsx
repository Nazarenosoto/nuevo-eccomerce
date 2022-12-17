import "./Style.css";
import mock from "../mocks";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    const productosFiltered = mock.filter(
      (productos) => productos.category === categoryId
    )

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryId ? productosFiltered : mock)
      }, 500)
    })

    getProducts
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

  }, [categoryId])

  return (
    <div className="light">
      <ItemList items={items} />
    </div>
  )
}


export default ItemListContainer;


