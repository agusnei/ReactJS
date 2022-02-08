import React, { useState, useEffect } from 'react';

import CardList from './CardList.js'
import Spinner from '../spinner/Spinner.js';

const CardListComponent = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	console.log(data);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((json) => setData(json));
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
	}, []);
	
	return (
		<div>
			{isLoading ? <Spinner /> : <CardList data={data} />}
		</div> 
	);
};

export default CardListComponent;