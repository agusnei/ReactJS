import * as React from 'react';
import Card from './Card.css';

const Cards = ({data}) => {
	
	return (
			<div >
				<img src={data.image} className='card-img-top' alt={data.title}/>
				<div className="card-body">
					<p className="card-title">{data.title}</p>
					<p className="card-title">{data.category}</p>
					<p className="card-text">{data.description}</p>
					<p className="card-text">{data.price}</p>
					<p >Stock {data.rating.count}</p>
					{/* <button className="btn btn-primary" onClick={onClick}>Agregar al carrito</button> */}
				</div>
			</div>
	);
};

export default Cards;
