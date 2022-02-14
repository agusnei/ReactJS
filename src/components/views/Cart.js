import React from 'react';

//COMPONENTS
import img from '../Logo/logo.png';

const Cart = (data) => {
    console.log(data)
    return(
        <div>
            <img src={img} alt='logo-carro' width="50px"/>;
        </div>
    )
}

export default Cart;