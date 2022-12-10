import products from "../products";
import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({ presentation }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });

  return (
    <>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;