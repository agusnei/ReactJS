import addcart from '../Logo/addcart.png'

const ProductItem = ({ data, addToCart}) => {
  let { id, name, price } = data;
  return (
    <div className='card col'>
      {/* <img src={data.image} className='card-img-top' alt={data.title}/> */}
      <div className="card-body">
        <p className="card-title">{name}</p>
        {/* <p className="card-title">{data.category}</p> */}
        {/* <p className="card-text">{data.description}</p> */}
        <p className="card-text">${price}</p>
        {/* <p >Stock {data.rating.count}</p> */}
        {/* <button className="btn btn-primary" onClick={onClick}>Agregar al carrito</button> */}
        <button className="btnCar" onClick={() => addToCart(id)}>
          <img src={addcart} alt="addcart" width={50}/>
        </button>
    </div>
  </div>
  );
};

export default ProductItem;
