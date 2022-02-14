import React, { useState } from 'react';
import {Link} from "react-router-dom";


//COMPONENTS
import Cart from '../views/Cart';

const ItemCount = ({data}) => {
	

	const [counter, setCounter] = useState(1);

			const handlerCounterUp = () => {

				if (counter == 0,counter > 0,counter < 10) {
					setCounter(counter + 1);
				} else
					alert("No hay más productos");
			};

			const handlerCounterDown = () => {
				if ((counter - 1) < 1) {
					return  1;
				} else
					setCounter(counter - 1);
			};

						const onChange = (e) => {
							// console.log(e.target.value);
							setCounter(e.target.value)
						}

						const onAdd = (e) => {
							e.preventDefault();
							
							const addQuantity = counter;
							const addItem = {data};
							
							console.log(addQuantity);
							console.log(addItem);

						};

	return (
			<div className='btn-section'>
				<div className='btn-ocultar'>

				<input type="number" className="form-control" onChange={onChange} value={counter}/>
				<button  className="btn btn-primary" onClick={handlerCounterUp}>+</button>
                <button className="btn btn-primary" onClick={handlerCounterDown}>-</button>
                <button className="btn btn-secondary" onClick={onAdd}>Agregar al carrito</button>

				</div>
                <button className="btn btn-secondary">
					<Link to={`/cart`}>
						Ir al carrito
					</Link>
				</button>	
			</div>
		);
	};

export default ItemCount;