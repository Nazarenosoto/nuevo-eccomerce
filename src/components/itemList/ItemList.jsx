import Item from "../Item/Item"
import { Link } from "react-router-dom";


const ItemList = ({ octoCat }) =>  {
  return (
    <div>
    {octoCat.map((product)=> (
        <Link id={product.id}
              to={'/Home/' + product.id}>

        
      <Item className="itemlist"
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.img}
            category={product.category} 
            description={product.description} /> 
      </Link>
    ))
    }
    </div>
  );
}

export default ItemList

