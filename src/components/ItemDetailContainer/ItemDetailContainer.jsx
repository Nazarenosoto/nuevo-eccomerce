import mock from "../mocks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {

    function getProducts() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mock);
        }, 2000);
      });
    }

    getProducts(id)
      .then((product) => {
        setProduct(product.find((x) => x.id === id));
      });
  }, [id]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;