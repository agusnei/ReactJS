import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
//Link roter dom
import {Link} from "react-router-dom";

import { CartState } from "../../Context";
//Firebase firestore
import {db} from '../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


//Components
import Spinner from '../spinner/Spinner.js';
import Cards from '../CardsComponent/Cards.js';

const CardDetail = () => {
	const { cart, setCart } = CartState();
	const [isLoading, setIsLoading] = useState(true);
	const [productData, setProductData] = useState([]);

	let useparams = useParams();

	let id = useparams.id;
    console.log(id);

	useEffect(() =>{
			const getProduct = async () => {
			const q = query(collection(db, 'ecommerce'),where (documentId(),"==", id));
			const docs = []
			const querySnapshot = await getDocs(q);
			
			querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			docs.push({...doc.data(), id: doc.id});
			});
			setProductData(docs);
		};
			getProduct();
			
			setTimeout(() => {
				setIsLoading(false);
				}, 2000);
	},[id]);	

	return (
		<div >
			{
				isLoading ? 	<Spinner />	 :
				<div key={productData.id}>
					<div  className='row row-cols-1 row-cols-md-4 g-4'>
						{productData.map((data) => {
							return (
									<div className='card col' key={data.id} >
										<Link to={`/detail/${data.id}`}>
											<Cards data={data} />
										</Link>
									</div>
							);
						})}
					</div>
				</div>
			}
		</div>
	);
};

export default CardDetail;