const CartItem = ({ data, delFromCart,addToCart}) => {
  let { id, name, price, quantity } = data;

  return (
    <div className="card-body">
      <h4>{name}</h4>
      <h5>Precio:$ {price}</h5>
      <h5>Cantidad: {quantity}</h5>
      <h5>Total: $ {price * quantity}</h5>
      <button onClick= {() => delFromCart(id)}>-1</button>
      <button onClick={() => delFromCart(id, true)}>X</button>
      <button className="btnCar" onClick={() => addToCart(id)}>+1</button>
    </div>
  );
};

export default CartItem;
