import Item from "../item/Item"
import { Link } from "react-router-dom";

    const ItemList = ({ lista }) =>  {
  return (
    <div>
    {lista.map((product)=> (
        <Link id={product.id}
              to={'/classic/' + product.id}>

        
      <Item className="itemlist"
            id={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            category={product.category} /> 
      </Link>
    ))
    }
    </div>
  );
}

export default ItemList;


