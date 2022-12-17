import mock from "../mocks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import "./Style.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    function getProducts() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mock);
        }, 2000);
      });
    }

    getProducts(categoryId) //
      .then((products) => {
        if (categoryId) {
          setProducts(
            products.filter((product) => product.category === categoryId)
          );
        } else {
          setProducts(products);
        }
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;


