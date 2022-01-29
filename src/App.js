import React, { useState } from 'react';
import "./App.css";
import NavBar from "./components/NavBar.js";
import CardComponent from './components/CardComponent/CardComponent.js';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
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

	const onClick = () => {
		alert('Hello World!');
	};

	const stock = 10 - counter;

	return (
			<div className='App'>
				<NavBar/>
				<div className='container'>
					<CardComponent
						img='https://growlerstore.com.ar/1510-large_default/whisky-johnnie-walker-red-label-750ml.jpg'
						title='Jonny Walker Red Label'
						p='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sed quidem recusandae nisi numquam repellat vero nemo sint ratione perspiciatis totam unde libero ipsam possimus voluptas, eligendi saepe perferendis? Officia!'
						onClick={onClick}
						myStock={stock}
					/>
				</div>
				<div className='CounterSection'>
					<ItemListContainer />
					<div className='btn-section'>
					<p>Counter: {counter}</p>
						<button  className="btn btn-primary" onClick={handlerCounterUp}>Incrementar</button>
						<button className="btn btn-primary" onClick={handlerCounterDown}>Decrementar</button>
					</div>
				</div>
			</div>
		);
	};

export default App;
