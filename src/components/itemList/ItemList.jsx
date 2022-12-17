import Item from "../item/Item"

  function ItemList ({ products }){
    <>
    <div>
      {products.map((product) =>{
        <div key={product.id}>
          <Item {...product} />
        </div>
      })}
    </div>
    </>
  }

export default ItemList;


