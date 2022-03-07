import React from 'react';

// REACT ROUTER DOM
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';

// Style
import "./App.css";

//Components
import NavBar from "./components/NavBar.js";
import CardListComponent from './components/CardListComponent/CardListComponent.js';
import Cart from './components/Products/Cart';

// VIEWS
import Error from './components/views/Error.js';
import CardDetail from './components/views/CardDetail';
import Buy from './components/views/Buy';
import Category from './components/views/Category/Category';

const App = () => {

	return (
		<BR>
			<div className='App'>
				<NavBar/>
					<Routes>
						<Route path='/' element={<CardListComponent/>} />
						<Route path='*' element={<Error />} />
						<Route path='/detail/:id' element={<CardDetail/>} />
						<Route path='/category/:category' element={<Category/>} />
						<Route path='/cart' element={<Cart/>} />
						<Route path='/buy' element={<Buy/>} />
					</Routes>
			</div>
		</BR>
		);
	};

export default App;
