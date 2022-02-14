import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

//Components
import Spinner from '../spinner/Spinner.js';
import Cards from '../CardsComponent/Cards.js';
import ItemListContainer from '../CountComponent/ItemListContainer.js';

const CardDetail = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	let useparams = useParams();

	let id = useparams.id;
    console.log(id);

		
	useEffect(() => {
		axios(
            `https://fakestoreapi.com/products/${id}`).then((res) => {
                setData(res.data)
                console.log(res)});
        setTimeout(() => {
            setIsLoading(false);
                }, 2000);
            console.log(data);
                }, [id]);
	
	return (
		<div >
			{
				isLoading ? 	<Spinner />	 :
				<div key={data.id}>
					<Cards data={data} />
					<div className='CounterSection'>
						<ItemListContainer data={data} />
					</div>
				</div>
			}
		</div>
	);
};

export default CardDetail;