const itemDetail = ({ item }) => {
  return (
    <div className='item'>
            <img src={item.img} alt="img" />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
        </div>
  )
}

export default itemDetail;
