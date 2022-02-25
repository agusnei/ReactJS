import { useReducer, useState } from "react";
import {Link} from "react-router-dom";

import "./Cart.css";

import { TYPES } from "./shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "./shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import CartWidget from "../CartWidget";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;
  
  const [totalQuantity, setCounter] = useState(0);

  const [totalPrice, setPrice] = useState(0);
  console.log(totalQuantity, totalPrice);
  
  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    setCounter(totalQuantity + 1);
    products.map((product) => {
      if(product.id === id) {
        const tp = product.price
        return setPrice(totalPrice + tp);
        }
      }
    );   
  }
  

  const delFromCart = (id, all = false) => {
    // console.log(id, all);
          if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
              cart.map((cart) => {
                  if(cart.id === id) {
                    const tq = cart.quantity
                    const tp = cart.price
                    setCounter(totalQuantity - tq);
                    setPrice(totalPrice - tp * tq);

                  }
                }
              );
          } 
          else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
            setCounter(totalQuantity - 1);
            cart.map((cart) => {
              if(cart.id === id) {
                const tp = cart.price
                setPrice(totalPrice - tp);
                }
              }
            );
          }
  };

  const clearCart = () => {
      dispatch({ type: TYPES.CLEAR_CART });
      setCounter(totalQuantity - totalQuantity);
      setPrice(totalPrice - totalPrice);
  };


  return (
    <div>
      <div className="cart">
        {
          totalQuantity === 0 ? 
                <p>No tiene productos en su carrito</p> 
                : 
            <div>
              <CartWidget totalQuantity={totalQuantity} totalPrice={totalPrice}/>

                <div className="cart1">
                  <h3>Productos en tu carrito</h3>
                  <div className='row row-cols-1 row-cols-md-4 g-4 m-5'>
                    {cart.map((item, index) => (
                      <div className='card col' key={index}>
                        <CartItem  data={item} delFromCart={delFromCart} addToCart={addToCart}/>
                      </div>
                    ))}
                  </div>
                  <button onClick={clearCart}>Limpiar Carrito</button>            
                  <Link className="nav-link" to="/buy">Terminar mi compra</Link>
                </div>
            </div> 
        }
      </div>
      
      
      <div>
        <h3>Productos disponibles</h3>
        <article className='row row-cols-1 row-cols-md-4 g-4 m-5'>
          {products.map((product) => (
            <div className='card col' key={product.id}>
              <ProductItem  data={product} addToCart={addToCart}/>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default ShoppingCart;
