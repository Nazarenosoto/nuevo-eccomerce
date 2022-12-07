import "./Item.css"

const Item = ({element}) => {

    return(
        <div>
            <h3>{element.name}</h3>
            <img src={element.img} alt="" />
            <h4>${element.price}</h4>
            <h4>Ver detalles</h4>
        </div>
    )
}

export default Item