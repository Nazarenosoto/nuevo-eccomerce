import {useParams} from 'react-router-dom';


import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";



const ItemListContainer = ({ presentation }) => {
  const [Item, setProductList] = useState([]);
  const {detailId} = useParams();

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, [detailId]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Item);
    }, 3000);
  });

  getProducts.then(res => setProducts(res.find(Item => datailId === parseInt(detalleId))));
  return (
    <>
      <ItemList lista={ItemList} />{" "}
    </>
  );
};

export default ItemListContainer;