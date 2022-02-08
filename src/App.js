import React  from 'react';
import "./App.css";
import NavBar from "./components/NavBar.js";
import CardListComponent from './components/CardListComponent/CardListComponent.js';
import ItemListContainer from './components/ItemListContainer';


const App = () => {

	return (
			<div className='App'>
				<NavBar/>
				<div>
					<CardListComponent/>
				</div>
				<div className='CounterSection'>
					<ItemListContainer />
				</div>
			</div>
		);
	};

export default App;
