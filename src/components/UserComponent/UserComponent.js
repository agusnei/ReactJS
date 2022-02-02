import * as React from 'react';

const UserComponent = ({ data }) => {
	
	const onClick = () => {
		alert('Hello World!');
	};

	return (
		<div className='container'>
			<div className="card" style={{scrollHeight: "100px"}}>
				<img src={data.img} className='card-img-top' alt={data.id}/>
				<div className="card-body">
					<h3 className="card-title">{data.name}</h3>
					<h3 className="card-text">{data.email}</h3>
					<p className="card-text">{data.address.city}</p>
					<p>Stock actual: {data.myStock}</p>
				<button className="btn btn-primary" onClick={onClick}>Agregar al carrito</button>
				</div>
			</div>
		</div>
	);
};

export default UserComponent;
