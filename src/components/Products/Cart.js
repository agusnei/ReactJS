import { useEffect, useState } from "react";
import { CartState } from "../../Context";
import Cards from "../CardsComponent/Cards";

  const Cart = () => {
    const { cart, setCart } = CartState();
    const [total, setTotal] = useState();
    const [totalQuantity, setCounter] = useState(Number(cart.length));

    console.log(totalQuantity, total);
    
    useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart]);

    const addToCart = (id) => {
      setCounter(totalQuantity + 1);
      cart.map((cart) => {
        if(cart.id === id) {
          const tp = cart.price
          return setTotal(total + tp);
          }
        }
      );   
    }
  
    const delFromCart = (id) => {
      setCounter(totalQuantity - 1);
      cart.map((cart) => {
        if(cart.id === id) {
          if((totalQuantity - 1) === 0){
            return setTotal(0)
          }
          else{
            const tp = cart.price
            return setTotal(total - tp);
          }
          }
        }
      );   
            }



    
    return (
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: 30 }}>My Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total: {total}</span>
        <div className="productContainer">
          {cart.map((data) => (
            <div key={data.id}>
              <Cards data={data}  />
              {totalQuantity > 0 ? (<button onClick= {() => delFromCart(data.id)}>-1</button>) : (<div></div>)}
              {cart.includes(data) ? (
                <button
                className="add remove"
                onClick={() => setCart(cart.filter((c) => c.id !== data.id))}
                >
                Remove from Cart
                </button>
                ) : (
                <button className="add" onClick={() => setCart([...cart, data])}>
                Add to Cart
                </button>
              )}

              <button className="btnCar" onClick={() => addToCart(data.id)}>+1</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cart;
