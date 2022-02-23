import React, { useState, useEffect } from 'react';

//Firebase firestore
import {db} from '../../Firebase/FirebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";

//Components
import CardList from './CardList.js'
import Spinner from '../spinner/Spinner.js';



const CardListComponent = () => {
	const [isLoading, setIsLoading] = useState(true);
	
	const [productsData, setProductsData] = useState([]);
	
	useEffect(() =>{
		const getProducts = async () => {
			const q = query(collection(db, 'ecommerce'));
			const docs = []
			const querySnapshot = await getDocs(q);
			
			querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			docs.push({...doc.data(), id: doc.id});
			});
			setProductsData(docs);
		};
		getProducts();
		
		setTimeout(() => {
			setIsLoading(false);
			}, 2000);
	},[]);		
	
	return (
		<div>
			{isLoading ? <Spinner /> : 
				<div>
					<CardList productsData={productsData} />
				</div> }
		</div> 
	);
};

export default CardListComponent;