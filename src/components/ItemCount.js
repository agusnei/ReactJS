import React, { useState } from 'react';

const ItemCount = () => {
	const [counter, setCounter] = useState(1);

	const handlerCounterUp = () => {

		if (counter == 0,counter > 0,counter < 10) {
			setCounter(counter + 1);
		} else
			alert("No hay más productos");
	};

	const handlerCounterDown = () => {
		if ((counter - 1) < 0) {
			return  0;
		} else
			setCounter(counter - 1);
	};

	return (
			<div className='btn-section'>
                <p>Counter: {counter}</p>
                <button  className="btn btn-primary" onClick={handlerCounterUp}>Incrementar</button>
                <button className="btn btn-primary" onClick={handlerCounterDown}>Decrementar</button>
			</div>
		);
	};

export default ItemCount;