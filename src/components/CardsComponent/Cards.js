import * as React from 'react';


const Cards = ({data}) => {
	

	
	return (
			<div >
				<img src={data.image} className='card-img-top' alt={data.title}/>
				<div className="card-body">
					<p className="card-title">{data.title}</p>
					<p className="card-title">{data.category}</p>
					<p className="card-text">{data.description}</p>
					<p className="card-text">{data.price}</p>
					<p >Stock {data.stock}</p>
				</div>
			</div>
	);
};

export default Cards;
