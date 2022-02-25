import React, { useState } from 'react';
//Firebase firestore
import {db} from '../../Firebase/FirebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

import MessageSuccess from '../MessageSuccess/MessageSuccess';
import './Buy.css';
import TextField from '@mui/material/TextField';

const initialState = {
	name: '',
	email: '',
	phone: '',
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Buy = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			<h1>Shop</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					value={values.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Email'
                    type='email'
					style={{ margin: 10, width: 400 }}
					value={values.email}
					name='email'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Phone'
                    type='number'
					style={{ margin: 10, width: 400 }}
					value={values.phone}
					name='phone'
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Send</button>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);
};

export default Buy;