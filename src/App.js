import React  from 'react';

// REACT ROUTER DOM
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';

// Style
import "./App.css";

//Components
import NavBar from "./components/NavBar.js";
import CardListComponent from './components/CardListComponent/CardListComponent.js';

// VIEWS
import Home from './components/views/Home.js';
import About from './components/views/About.js';
import Contact from './components/views/Contact.js';
import Error from './components/views/Error.js';
import CardDetail from './components/views/CardDetail';
import Cart from './components/views/Cart';

const App = () => {

	return (
		<BR>
			<div className='App'>
				<NavBar/>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<CardListComponent/>} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<Error />} />
						<Route path='/detail/:id' element={<CardDetail/>} />
						<Route path='/cart' element={<Cart/>} />
					</Routes>

			</div>
		</BR>
		);
	};

export default App;
