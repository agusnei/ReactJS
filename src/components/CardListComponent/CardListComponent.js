import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Components
import CardList from './CardList.js'
import Spinner from '../spinner/Spinner.js';



const CardListComponent = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	console.log(data);
		
	useEffect(() => {
		axios(
			`https://fakestoreapi.com/products`).then((res) => setData(res.data));
		setTimeout(() => {
			setIsLoading(false);
			}, 2000);
		}, []);
	
	return (
		<div>
			{isLoading ? <Spinner /> : 
				<div>
					<CardList data={data} />
				</div> }
		</div> 
	);
};

export default CardListComponent;