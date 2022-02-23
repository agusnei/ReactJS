import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
//Firebase firestore
import {db} from '../../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs} from "firebase/firestore";
//Link roter dom
import {Link} from "react-router-dom";
//Components
import Spinner from '../../spinner/Spinner';
import Cards from '../../CardsComponent/Cards';

const Category = () => {
    const [isLoading, setIsLoading] = useState(true);
	const [categoryData, setCategoryData] = useState([]);

	const {category}= useParams();
    
    useEffect(() =>{
        const getCategory = async () => {
        const q = query(collection(db, 'ecommerce'),where ('category',"==", category));
        const docs = []
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs.push({...doc.data(), id: doc.id});
        });
        setCategoryData(docs);
    };
        getCategory();
        
        setTimeout(() => {
                setIsLoading(false);
                }, 2000);
    }  ,[category]);	
    
    return (
        <div >
			{
				isLoading ? 	<Spinner />	 :
				<div key={categoryData.id}>
					<div  className='row row-cols-1 row-cols-md-4 g-4'>
						{categoryData.map((data) => {
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

export default Category;