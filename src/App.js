import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/NavBar.js";
import CardComponent from './components/CardComponent/CardComponent.js';


class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar/>
				<div className='container'>
					<CardComponent
            img='https://growlerstore.com.ar/1510-large_default/whisky-johnnie-walker-red-label-750ml.jpg'
            title='Jonny Walker Red Label'
            p='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sed quidem recusandae nisi numquam repellat vero nemo sint ratione perspiciatis totam unde libero ipsam possimus voluptas, eligendi saepe perferendis? Officia!'
          />
				</div>
			</div>
		);
	}
}

export default App;
