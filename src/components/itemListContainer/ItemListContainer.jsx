import products from "../products";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import "./Style.css";


const ItemListContainer = ({ presentation }) => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams(); 
  console.log(categoryName);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  return (
    <>
    <h1>{presentation}</h1>
      <ItemList lista={productList} />{" "} 
    </>
  );
};

export default ItemListContainer;

//me sale el error "ERROR in ./src/Components/ItemDetailContainer/ItemDetailContainer.jsx 7:0-44

