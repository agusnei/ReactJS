import * as React from 'react';
//Link roter dom
import {Link} from "react-router-dom";
import { CartState } from "../../Context";

import Cards from '../CardsComponent/Cards.js';

const CardList = ({products}) => {
    const { cart, setCart } = CartState();
    return (
            <div  className='row row-cols-1 row-cols-md-4 g-4'>
                {products.map((data) => {
                    return (
                            <div className='card col' key={data.id} >
                                <Cards data={data} />
                                <Link to={`/detail/${data.id}`}>
                                    Detalle
                                </Link>
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
                </div>
                );
                })}
            </div>
    );
};
    
export default CardList;