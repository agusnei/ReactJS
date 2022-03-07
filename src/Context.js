import { createContext, useContext, useState, useEffect } from "react";

//Firebase firestore
import {db} from './Firebase/FirebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";

const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProductsData] = useState([]);
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
	},[]);	

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
